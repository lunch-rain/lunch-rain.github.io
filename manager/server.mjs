import http from "node:http";
import { readFile, writeFile, readdir, mkdir, unlink, stat, realpath, mkdtemp, cp, rm } from "node:fs/promises";
import path from "node:path";
import os from "node:os";
import { fileURLToPath } from "node:url";
import { randomBytes } from "node:crypto";
import { spawn } from "node:child_process";
import { execFileSync } from "node:child_process";
import matter from "gray-matter";
import { marked } from "marked";
import sanitizeHtml from "sanitize-html";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const managerDir = path.join(root, "manager");
const postsDir = path.join(root, "src", "content", "posts");
const dynamicDir = path.join(root, "src", "content", "dynamic");
const settingsFile = path.join(managerDir, "site-settings.json");
const deployConfigFile = path.join(managerDir, "deploy-config.json");
const imageRoot = path.join(root, "public", "uploads");
const galleryRoot = path.join(root, "public", "gallery");
const galleryDataFile = path.join(root, "src", "config", "gallery-data.json");
const token = randomBytes(24).toString("hex");
const port = Number(process.env.MANAGER_PORT || 4174);
const gitRemote = "https://github.com/lunch-rain/lunch-rain.github.io.git";
let busy = false;
const editableExtensions = new Set([".md", ".mdx", ".ts", ".tsx", ".astro", ".svelte", ".css", ".styl", ".json", ".html", ".svg", ".mjs", ".js", ".txt"]);
const editableRoots = ["src/config", "src/content", "src/pages", "src/components", "src/layouts", "src/styles", "public"];

function siteFile(relative) {
	const normalized = String(relative || "").replaceAll("\\", "/");
	if (!normalized || normalized.startsWith("/") || normalized.split("/").some(part => !part || part === "." || part === ".." || part.startsWith("."))) throw new Error("文件路径无效");
	const allowed = editableRoots.some(prefix => normalized.startsWith(`${prefix}/`)) || ["astro.config.mjs", "vercel.json"].includes(normalized);
	if (!allowed || !editableExtensions.has(path.extname(normalized).toLowerCase())) throw new Error("此文件不在可编辑范围内");
	const resolved = path.resolve(root, normalized);
	if (!resolved.startsWith(`${root}${path.sep}`)) throw new Error("文件路径无效");
	return { normalized, resolved };
}

async function verifyExistingPath(file) {
	const actual = await realpath(file);
	if (!actual.startsWith(`${root}${path.sep}`)) throw new Error("文件位于项目目录外");
	return actual;
}

async function listSiteFiles(directory, prefix) {
	const files = [];
	for (const entry of await readdir(directory, { withFileTypes: true })) {
		if (entry.name.startsWith(".")) continue;
		const relative = `${prefix}/${entry.name}`;
		if (entry.isDirectory()) files.push(...await listSiteFiles(path.join(directory, entry.name), relative));
		else if (entry.isFile() && editableExtensions.has(path.extname(entry.name).toLowerCase())) files.push(relative);
	}
	return files;
}

function imageFolder(folder = "") {
	const normalized = String(folder).replaceAll("\\", "/").trim();
	const parts = normalized ? normalized.split("/") : [];
	if (parts.some(part => !/^[\p{L}\p{N}_ -]{1,64}$/u.test(part) || /^(con|prn|aux|nul|com[1-9]|lpt[1-9])$/i.test(part.trim()))) throw new Error("图片文件夹名称无效");
	return { normalized: parts.join("/"), resolved: path.join(imageRoot, ...parts) };
}

async function verifiedImageFolder(folder = "") {
	await mkdir(imageRoot, { recursive: true });
	const location = imageFolder(folder);
	const actual = await realpath(location.resolved);
	const rootActual = await realpath(imageRoot);
	if (actual !== rootActual && !actual.startsWith(`${rootActual}${path.sep}`)) throw new Error("图片文件夹位于上传目录外");
	return { ...location, resolved: actual };
}

function imageUrl(folder, filename) {
	return `/uploads/${[...folder.split("/").filter(Boolean), filename].map(encodeURIComponent).join("/")}`;
}

function imageFilename(name) {
	if (typeof name !== "string" || !name || name === "." || name === ".." || name.includes("/") || name.includes("\\") || !/\.(jpe?g|png|webp|avif|gif)$/i.test(name)) throw new Error("图片名称无效");
	return name;
}

function albumId(id) {
	if (typeof id !== "string" || !/^[a-z0-9][a-z0-9_-]{0,63}$/i.test(id)) throw new Error("相册 ID 无效");
	return id;
}

async function galleryData() {
	return JSON.parse(await readFile(galleryDataFile, "utf8"));
}

async function albumDirectory(id) {
	albumId(id);
	const actual = await realpath(path.join(galleryRoot, id));
	const base = await realpath(galleryRoot);
	if (path.dirname(actual) !== base) throw new Error("相册目录无效");
	return actual;
}

async function countImages(directory) {
	let count = 0;
	for (const item of await readdir(directory, { withFileTypes: true })) {
		if (item.isDirectory()) count += await countImages(path.join(directory, item.name));
		else if (item.isFile() && /\.(jpe?g|png|webp|avif|gif)$/i.test(item.name)) count++;
	}
	return count;
}

function reply(res, status, data, type = "application/json; charset=utf-8") {
	res.writeHead(status, { "content-type": type, "cache-control": "no-store", "x-content-type-options": "nosniff" });
	res.end(type.startsWith("application/json") ? JSON.stringify(data) : data);
}

async function body(req, max = 2_000_000) {
	const chunks = [];
	let size = 0;
	for await (const chunk of req) {
		size += chunk.length;
		if (size > max) throw new Error("文件或内容过大");
		chunks.push(chunk);
	}
	return Buffer.concat(chunks);
}

function safeId(id) {
	if (!/^[a-zA-Z0-9_/-]+\.(md|mdx)$/.test(id) || id.includes("..") || id.startsWith("/")) throw new Error("文章路径无效");
	return path.join(postsDir, id);
}

function dynamicFile(id) {
	if (typeof id !== "string" || !/^[a-zA-Z0-9_-]+(?:\/[a-zA-Z0-9_-]+)*\.md$/.test(id)) throw new Error("动态文件名无效");
	return path.join(dynamicDir, id);
}

async function readDynamic(id) {
	const parsed = matter(await readFile(dynamicFile(id), "utf8"));
	return { id, published: new Date(parsed.data.published).toISOString(), pinned: Boolean(parsed.data.pinned), location: String(parsed.data.location || ""), body: parsed.content.trim() };
}

async function allPosts(dir = postsDir, prefix = "") {
	const result = [];
	for (const item of await readdir(dir, { withFileTypes: true })) {
		if (item.isDirectory()) result.push(...await allPosts(path.join(dir, item.name), `${prefix}${item.name}/`));
		else if (/\.(md|mdx)$/.test(item.name)) result.push(`${prefix}${item.name}`);
	}
	return result;
}

function dateString(value) {
	if (value instanceof Date) return value.toISOString().slice(0, 10);
	return String(value || "").slice(0, 10);
}

function windowsProxy() {
	if (process.platform !== "win32") return "";
	const key = "HKCU\\Software\\Microsoft\\Windows\\CurrentVersion\\Internet Settings";
	try {
		const enabled = execFileSync("reg.exe", ["query", key, "/v", "ProxyEnable"], { encoding: "utf8", windowsHide: true });
		if (!/REG_DWORD\s+0x1(?:\s|$)/i.test(enabled)) return "";
		const setting = execFileSync("reg.exe", ["query", key, "/v", "ProxyServer"], { encoding: "utf8", windowsHide: true });
		const raw = setting.match(/ProxyServer\s+REG_\w+\s+([^\r\n]+)/i)?.[1]?.trim() || "";
		const address = raw.includes("=") ? raw.split(";").find(part => /^https?=/i.test(part))?.split("=").slice(1).join("=") : raw;
		if (!address) return "";
		return /^[a-z]+:\/\//i.test(address) ? address : `http://${address}`;
	} catch { return ""; }
}

async function readPost(id) {
	const parsed = matter(await readFile(safeId(id), "utf8"));
	return { id, ...parsed.data, published: dateString(parsed.data.published), updated: dateString(parsed.data.updated), body: parsed.content.trimStart() };
}

async function run(command, args, timeout = 180_000, cwd = root) {
	return new Promise((resolve, reject) => {
		// Git accepts an argv array directly on Windows. Sending it through cmd.exe
		// splits a commit message containing spaces into separate pathspecs.
		const env = { ...process.env };
		if (!env.HTTPS_PROXY && !env.https_proxy && !env.ALL_PROXY && !env.all_proxy) {
			const proxy = windowsProxy();
			if (proxy) { env.HTTPS_PROXY = proxy; env.HTTP_PROXY ||= proxy; }
		}
		const child = spawn(command, args, { cwd, env, shell: process.platform === "win32" && command === "pnpm", windowsHide: true });
		let output = "";
		const timer = setTimeout(() => child.kill(), timeout);
		for (const stream of [child.stdout, child.stderr]) stream.on("data", chunk => { output = (output + chunk.toString()).slice(-12000); });
		child.on("error", reject);
		child.on("close", code => {
			clearTimeout(timer);
			if (code === 0) resolve(output);
			else reject(new Error(`${command} ${args.join(" ")} 失败（${code}）\n${output}`));
		});
	});
}

async function git(...args) { return run("git", args, 120_000); }

async function pushWithRetry(args, cwd = root) {
	for (let attempt = 1; attempt <= 3; attempt++) {
		try { return await run("git", ["push", ...args], 120_000, cwd); }
		catch (error) {
			if (!/Failed to connect|Could not resolve host|Connection timed out|Connection reset|unable to access|HTTP\/2 stream|TLS connection/i.test(error.message)) throw error;
			if (attempt === 3) throw new Error(`GitHub 网络连接失败，已重试 3 次。请确认系统代理正在运行后再次点击发布。\n${error.message}`);
			await new Promise(resolve => setTimeout(resolve, attempt * 2000));
		}
	}
}

const defaultDeployConfig = { staticRepoUrl: gitRemote, staticBranch: "gh-pages", sourceRepoUrl: gitRemote, sourceBranch: "main" };

function validateDeployConfig(input) {
	const config = {};
	for (const key of ["staticRepoUrl", "sourceRepoUrl"]) {
		const value = String(input[key] || "").trim();
		if (!/^https:\/\/github\.com\/[a-z\d_.-]+\/[a-z\d_.-]+(?:\.git)?$/i.test(value) && !/^git@[a-z\d_.-]+:[a-z\d_.-]+\/[a-z\d_.-]+(?:\.git)?$/i.test(value)) throw new Error(`${key} 必须是 GitHub 仓库地址`);
		config[key] = value;
	}
	for (const key of ["staticBranch", "sourceBranch"]) {
		const value = String(input[key] || "").trim();
		if (!/^[a-z\d][a-z\d._/-]*$/i.test(value) || value.includes("..") || value.includes("//") || value.endsWith("/") || value.endsWith(".lock")) throw new Error(`${key} 分支名称无效`);
		config[key] = value;
	}
	if (config.staticRepoUrl === config.sourceRepoUrl && config.staticBranch === config.sourceBranch) throw new Error("静态页和源码不能使用同一仓库的同一分支");
	return config;
}

async function deployConfig() {
	try { return validateDeployConfig(JSON.parse(await readFile(deployConfigFile, "utf8"))); }
	catch (error) { if (error.code === "ENOENT") return defaultDeployConfig; throw error; }
}

async function publishSource() {
	const config = await deployConfig();
	const logs = [];
	try { await git("rev-parse", "--is-inside-work-tree"); }
	catch { await git("init"); }
	await git("add", "-A");
	const staged = await git("diff", "--cached", "--name-only");
	if (staged.trim()) {
		await git("commit", "-m", `content: update blog ${new Date().toISOString().slice(0, 10)}`);
		logs.push("本地修改已提交");
	} else logs.push("没有新的本地修改");
	await pushWithRetry([config.sourceRepoUrl, `HEAD:${config.sourceBranch}`]);
	logs.push(`源码已推送到 ${config.sourceBranch}。若 Vercel 已连接此仓库和分支，将自动开始构建。`);
	return logs.join("\n");
}

async function publishPages() {
	const config = await deployConfig();
	await run("pnpm", ["astro", "sync", "--force"], 120_000);
	await run("pnpm", ["build"], 600_000);
	const temporary = await mkdtemp(path.join(os.tmpdir(), "firefly-pages-"));
	try {
		const pagesGit = (...args) => run("git", args, 120_000, temporary);
		await pagesGit("init");
		await pagesGit("remote", "add", "origin", config.staticRepoUrl);
		let exists = false;
		try { exists = Boolean((await pagesGit("ls-remote", "--heads", "origin", config.staticBranch)).trim()); } catch {}
		if (exists) {
			await pagesGit("fetch", "--depth", "1", "origin", config.staticBranch);
			await pagesGit("checkout", "-b", config.staticBranch, "FETCH_HEAD");
			for (const entry of await readdir(temporary)) if (entry !== ".git") await rm(path.join(temporary, entry), { recursive: true, force: true });
		} else await pagesGit("checkout", "--orphan", config.staticBranch);
		await cp(path.join(root, "dist"), temporary, { recursive: true, force: true });
		await writeFile(path.join(temporary, ".nojekyll"), "", "utf8");
		await pagesGit("add", "-A");
		if ((await pagesGit("status", "--porcelain")).trim()) {
			await pagesGit("commit", "-m", `Publish blog ${new Date().toISOString().slice(0, 10)}`);
			await pushWithRetry(["origin", `HEAD:${config.staticBranch}`], temporary);
			return `静态页已上传到 ${config.staticBranch}。请在 GitHub 仓库的 Pages 设置中选择从此分支部署。`;
		}
		return `静态页没有变化；${config.staticBranch} 已是最新。`;
	} finally {
		await rm(temporary, { recursive: true, force: true });
	}
}

async function publishVercel() {
	try { await stat(path.join(root, ".vercel", "project.json")); }
	catch { throw new Error("尚未连接 Vercel 项目。请先双击「配置Vercel.bat」完成登录和项目关联。"); }
	await run("pnpm", ["astro", "sync", "--force"], 120_000);
	await run("pnpm", ["build"], 600_000);
	return await run("pnpm", ["exec", "vercel", "deploy", "--prod", "--yes"], 900_000);
}

const server = http.createServer(async (req, res) => {
	try {
		const host = req.headers.host || "";
		if (!/^(localhost|127\.0\.0\.1)(:\d+)?$/.test(host)) return reply(res, 403, { error: "只能在本机访问" });
		const url = new URL(req.url, `http://${host}`);
		if (req.method !== "GET") {
			if (req.headers["x-manager-token"] !== token) return reply(res, 403, { error: "请求验证失败" });
			const origin = req.headers.origin;
			if (origin && origin !== `http://${host}`) return reply(res, 403, { error: "请求来源无效" });
		}
		if (req.method === "GET" && url.pathname === "/") {
			const html = (await readFile(path.join(managerDir, "index.html"), "utf8")).replace("__TOKEN__", token);
			return reply(res, 200, html, "text/html; charset=utf-8");
		}
		if (req.method === "GET" && url.pathname === "/style.css") return reply(res, 200, await readFile(path.join(managerDir, "style.css"), "utf8"), "text/css; charset=utf-8");
		if (req.method === "GET" && url.pathname === "/app.js") return reply(res, 200, await readFile(path.join(managerDir, "app.js"), "utf8"), "text/javascript; charset=utf-8");
		if (req.method === "GET" && (url.pathname.startsWith("/uploads/") || url.pathname.startsWith("/gallery/"))) {
			const isGallery = url.pathname.startsWith("/gallery/");
			const relative = decodeURIComponent(url.pathname.slice(isGallery ? "/gallery/".length : "/uploads/".length));
			const pieces = relative.split("/");
			const filename = pieces.pop();
			const mime = { ".jpg": "image/jpeg", ".jpeg": "image/jpeg", ".png": "image/png", ".webp": "image/webp", ".avif": "image/avif", ".gif": "image/gif" }[path.extname(filename || "").toLowerCase()];
			if (!mime) throw new Error("图片路径无效");
			imageFilename(filename);
			const directory = isGallery && pieces.length === 1 ? await albumDirectory(pieces[0]) : isGallery ? null : (await verifiedImageFolder(pieces.join("/"))).resolved;
			if (!directory) throw new Error("图片路径无效");
			const file = await realpath(path.join(directory, filename));
			if (path.dirname(file) !== directory) throw new Error("图片路径无效");
			return reply(res, 200, await readFile(file), mime);
		}
		if (req.method === "GET" && url.pathname === "/api/state") {
			const ids = await allPosts();
			const posts = await Promise.all(ids.map(readPost));
			posts.sort((a, b) => b.published.localeCompare(a.published));
			return reply(res, 200, { posts, settings: JSON.parse(await readFile(settingsFile, "utf8")), remote: gitRemote });
		}
		if (req.method === "GET" && url.pathname === "/api/dynamics") {
			const ids = (await allPosts(dynamicDir)).filter(id => id.endsWith(".md"));
			const items = await Promise.all(ids.map(readDynamic));
			items.sort((a, b) => b.published.localeCompare(a.published));
			return reply(res, 200, { items });
		}
		if (req.method === "POST" && url.pathname === "/api/dynamic") {
			const input = JSON.parse((await body(req)).toString());
			const content = String(input.body || "").trim();
			if (!content) throw new Error("请输入动态内容");
			const date = new Date(input.published || Date.now());
			if (Number.isNaN(date.getTime())) throw new Error("发布时间无效");
			const id = input.id ? String(input.id) : `dynamic-${Date.now()}.md`;
			const file = dynamicFile(id);
			await mkdir(path.dirname(file), { recursive: true });
			await writeFile(file, matter.stringify(`\n${content}\n`, { published: date, pinned: Boolean(input.pinned), location: String(input.location || "").trim().slice(0, 120) }), "utf8");
			return reply(res, 200, { ok: true, id });
		}
		if (req.method === "POST" && url.pathname === "/api/dynamic/delete") {
			const input = JSON.parse((await body(req)).toString());
			const file = dynamicFile(input.id);
			await verifyExistingPath(file);
			await unlink(file);
			return reply(res, 200, { ok: true });
		}
		if (req.method === "GET" && url.pathname === "/api/deploy/config") return reply(res, 200, await deployConfig());
		if (req.method === "GET" && url.pathname === "/api/albums") {
			const config = await galleryData();
			const albums = await Promise.all(config.albums.map(async album => {
				if (album.id === "uploads") return { ...album, source: "uploads", count: await countImages(imageRoot) };
				const directory = await albumDirectory(album.id);
				const images = (await readdir(directory)).filter(name => /\.(jpe?g|png|webp|avif|gif)$/i.test(name));
				return { ...album, count: images.length };
			}));
			return reply(res, 200, { albums });
		}
		if (req.method === "GET" && url.pathname === "/api/albums/images") {
			const id = albumId(url.searchParams.get("id"));
			if (id === "uploads") throw new Error("图片库请在图片文件夹中管理");
			const directory = await albumDirectory(id);
			const images = await Promise.all((await readdir(directory)).filter(name => /\.(jpe?g|png|webp|avif|gif)$/i.test(name)).map(async name => ({ name, url: `/gallery/${id}/${encodeURIComponent(name)}`, size: (await stat(path.join(directory, name))).size })));
			return reply(res, 200, { images });
		}
		if (req.method === "POST" && url.pathname === "/api/albums/create") {
			const input = JSON.parse((await body(req)).toString());
			const name = String(input.name || "").trim();
			if (!name || name.length > 80) throw new Error("请输入 1 到 80 字的相册名称");
			const id = `album-${Date.now()}-${randomBytes(3).toString("hex")}`;
			const config = await galleryData();
			await mkdir(path.join(galleryRoot, id), { recursive: true });
			await writeFile(path.join(galleryRoot, id, ".gitkeep"), "", "utf8");
			config.albums.push({ id, name, description: String(input.description || "").trim().slice(0, 300) });
			await writeFile(galleryDataFile, `${JSON.stringify(config, null, 2)}\n`, "utf8");
			return reply(res, 200, { id });
		}
		if (req.method === "POST" && url.pathname === "/api/albums/update") {
			const input = JSON.parse((await body(req)).toString());
			const id = albumId(input.id);
			const config = await galleryData();
			const album = config.albums.find(item => item.id === id);
			if (!album) throw new Error("相册不存在");
			const name = String(input.name || "").trim();
			if (!name || name.length > 80) throw new Error("请输入 1 到 80 字的相册名称");
			album.name = name;
			for (const key of ["description", "date", "location", "cover", "password", "passwordHint"]) album[key] = String(input[key] || "").trim().slice(0, 300);
			if (album.cover && !/^(https?:\/\/|\/)/i.test(album.cover)) throw new Error("封面请填写站内绝对路径或 HTTPS 地址");
			album.tags = String(input.tags || "").split(/[,，]/).map(tag => tag.trim()).filter(Boolean).slice(0, 20);
			await writeFile(galleryDataFile, `${JSON.stringify(config, null, 2)}\n`, "utf8");
			return reply(res, 200, { ok: true });
		}
		if (req.method === "POST" && url.pathname === "/api/albums/upload") {
			const id = albumId(String(req.headers["x-album-id"] || ""));
			if (id === "uploads" || !(await galleryData()).albums.some(album => album.id === id)) throw new Error("相册不存在");
			const directory = await albumDirectory(id);
			const mime = String(req.headers["content-type"] || "").split(";")[0];
			const ext = { "image/jpeg": "jpg", "image/png": "png", "image/webp": "webp", "image/avif": "avif", "image/gif": "gif" }[mime];
			if (!ext) throw new Error("仅支持 JPG、PNG、WebP、AVIF、GIF 图片");
			const filename = `${Date.now()}-${randomBytes(4).toString("hex")}.${ext}`;
			await writeFile(path.join(directory, filename), await body(req, 8_000_000));
			return reply(res, 200, { url: `/gallery/${id}/${filename}` });
		}
		if (req.method === "POST" && url.pathname === "/api/albums/delete") {
			const id = albumId(JSON.parse((await body(req)).toString()).id);
			if (id === "uploads") throw new Error("默认图片库不能删除");
			const config = await galleryData();
			if (!config.albums.some(album => album.id === id)) throw new Error("相册不存在");
			const directory = await albumDirectory(id);
			await rm(directory, { recursive: true });
			config.albums = config.albums.filter(album => album.id !== id);
			await writeFile(galleryDataFile, `${JSON.stringify(config, null, 2)}\n`, "utf8");
			return reply(res, 200, { ok: true });
		}
		if (req.method === "POST" && url.pathname === "/api/albums/image/delete") {
			const input = JSON.parse((await body(req)).toString());
			const directory = await albumDirectory(albumId(input.id));
			const filename = imageFilename(input.name);
			const file = await realpath(path.join(directory, filename));
			if (path.dirname(file) !== directory) throw new Error("图片路径无效");
			await unlink(file);
			return reply(res, 200, { ok: true });
		}
		if (req.method === "GET" && url.pathname === "/api/images") {
			const { normalized, resolved } = await verifiedImageFolder(url.searchParams.get("folder") || "");
			const folders = [];
			const images = [];
			for (const item of await readdir(resolved, { withFileTypes: true })) {
				if (item.isDirectory()) folders.push({ name: item.name, path: [normalized, item.name].filter(Boolean).join("/") });
				else if (item.isFile() && /\.(jpe?g|png|webp|avif|gif)$/i.test(item.name)) {
					const info = await stat(path.join(resolved, item.name));
					images.push({ name: item.name, url: imageUrl(normalized, item.name), size: info.size });
				}
			}
			folders.sort((a, b) => a.name.localeCompare(b.name, "zh-CN"));
			images.sort((a, b) => b.name.localeCompare(a.name));
			return reply(res, 200, { folder: normalized, parent: normalized.split("/").slice(0, -1).join("/"), folders, images });
		}
		if (req.method === "POST" && url.pathname === "/api/images/folder") {
			const input = JSON.parse((await body(req)).toString());
			const parent = await verifiedImageFolder(input.parent || "");
			const name = String(input.name || "").trim();
			imageFolder([parent.normalized, name].filter(Boolean).join("/"));
			if (!name) throw new Error("请输入文件夹名称");
			await mkdir(path.join(parent.resolved, name));
			await writeFile(path.join(parent.resolved, name, ".gitkeep"), "", "utf8");
			return reply(res, 200, { ok: true, folder: [parent.normalized, name].filter(Boolean).join("/") });
		}
		if (req.method === "POST" && url.pathname === "/api/images/upload") {
			const folder = await verifiedImageFolder(decodeURIComponent(String(req.headers["x-image-folder"] || "")));
			const mime = String(req.headers["content-type"] || "").split(";")[0];
			const ext = { "image/jpeg": "jpg", "image/png": "png", "image/webp": "webp", "image/avif": "avif", "image/gif": "gif" }[mime];
			if (!ext) throw new Error("仅支持 JPG、PNG、WebP、AVIF、GIF 图片");
			const bytes = await body(req, 8_000_000);
			const filename = `${Date.now()}-${randomBytes(4).toString("hex")}.${ext}`;
			await writeFile(path.join(folder.resolved, filename), bytes);
			return reply(res, 200, { url: imageUrl(folder.normalized, filename) });
		}
		if (req.method === "POST" && url.pathname === "/api/images/delete") {
			const input = JSON.parse((await body(req)).toString());
			const directory = (await verifiedImageFolder(input.folder || "")).resolved;
			const file = await realpath(path.join(directory, imageFilename(input.name)));
			if (path.dirname(file) !== directory) throw new Error("图片路径无效");
			await unlink(file);
			return reply(res, 200, { ok: true });
		}
		if (req.method === "POST" && url.pathname === "/api/images/folder/delete") {
			const input = JSON.parse((await body(req)).toString());
			const folder = imageFolder(input.folder || "");
			if (!folder.normalized) throw new Error("不能删除图片库根目录");
			const directory = (await verifiedImageFolder(folder.normalized)).resolved;
			await rm(directory, { recursive: true });
			return reply(res, 200, { ok: true });
		}
		if (req.method === "POST" && url.pathname === "/api/deploy/config") {
			const config = validateDeployConfig(JSON.parse((await body(req)).toString()));
			await writeFile(deployConfigFile, `${JSON.stringify(config, null, 2)}\n`, "utf8");
			return reply(res, 200, { ok: true, config });
		}
		if (req.method === "GET" && url.pathname === "/api/files") {
			const groups = await Promise.all(editableRoots.map(async prefix => listSiteFiles(path.join(root, prefix), prefix)));
			return reply(res, 200, { files: [...groups.flat(), "astro.config.mjs", "vercel.json"].sort() });
		}
		if (req.method === "GET" && url.pathname === "/api/file") {
			const { resolved } = siteFile(url.searchParams.get("path"));
			await verifyExistingPath(resolved);
			if ((await stat(resolved)).size > 1_000_000) throw new Error("文件过大，无法在管理器中编辑");
			return reply(res, 200, { content: await readFile(resolved, "utf8") });
		}
		if (req.method === "POST" && url.pathname === "/api/file") {
			const input = JSON.parse((await body(req)).toString());
			const { normalized, resolved } = siteFile(input.path);
			const content = String(input.content || "");
			if (Buffer.byteLength(content) > 1_000_000) throw new Error("文件内容过大");
			if (!normalized.startsWith("src/content/")) await verifyExistingPath(resolved);
			else {
				await mkdir(path.dirname(resolved), { recursive: true });
				await verifyExistingPath(path.dirname(resolved));
				try { await verifyExistingPath(resolved); }
				catch (error) { if (error.code !== "ENOENT") throw error; }
				if (input.create) {
					try { await stat(resolved); throw new Error("文件已存在，请换一个路径"); }
					catch (error) { if (error.code !== "ENOENT") throw error; }
				}
			}
			await writeFile(resolved, content, "utf8");
			return reply(res, 200, { ok: true, path: normalized });
		}
		if (req.method === "POST" && url.pathname === "/api/file/delete") {
			const input = JSON.parse((await body(req)).toString());
			const { normalized, resolved } = siteFile(input.path);
			if (!normalized.startsWith("src/content/")) throw new Error("只能在这里删除内容文件");
			await verifyExistingPath(resolved);
			await unlink(resolved);
			return reply(res, 200, { ok: true });
		}
		if (req.method === "POST" && url.pathname === "/api/post") {
			const input = JSON.parse((await body(req)).toString());
			if (!String(input.title || "").trim()) throw new Error("请填写文章标题");
			const id = input.id ? String(input.id) : `post-${Date.now()}.md`;
			const file = safeId(id);
			let previous = {};
			try { previous = matter(await readFile(file, "utf8")).data; } catch {}
			const data = {
				...previous,
				title: String(input.title).trim(),
				published: dateString(input.published) || new Date().toISOString().slice(0, 10),
				description: String(input.description || ""),
				image: String(input.image || ""),
				category: String(input.category || ""),
				tags: Array.isArray(input.tags) ? input.tags.map(String).filter(Boolean) : [],
				draft: Boolean(input.draft),
				pinned: Boolean(input.pinned),
			};
			await mkdir(path.dirname(file), { recursive: true });
			await writeFile(file, matter.stringify(`\n${String(input.body || "").trim()}\n`, data), "utf8");
			return reply(res, 200, { ok: true, id });
		}
		if (req.method === "POST" && url.pathname === "/api/delete") {
			const input = JSON.parse((await body(req)).toString());
			await unlink(safeId(String(input.id)));
			return reply(res, 200, { ok: true });
		}
		if (req.method === "POST" && url.pathname === "/api/settings") {
			const input = JSON.parse((await body(req)).toString());
			const keys = ["title", "subtitle", "siteUrl", "description", "author", "bio", "avatar", "github", "bannerTitle", "announcement", "siteStartDate"];
			const settings = {};
			for (const key of keys) settings[key] = String(input[key] || "").trim();
			for (const key of ["bannerSubtitle", "bannerDesktop", "bannerMobile"]) {
				settings[key] = (Array.isArray(input[key]) ? input[key] : String(input[key] || "").split(/\r?\n/))
					.map(value => String(value).trim()).filter(Boolean).slice(0, 20);
				if (!settings[key].length) throw new Error(`${key} 至少需要一项`);
			}
			for (const key of ["bannerDesktop", "bannerMobile"]) {
				if (settings[key].some(value => !/^(https:\/\/|\/(?!\/))/.test(value))) throw new Error(`${key} 只能填写 https 图片地址或站内路径`);
			}
			settings.profileLinks = Array.isArray(input.profileLinks) ? input.profileLinks.slice(0, 30).map(item => ({
				name: String(item.name || "").trim(), icon: String(item.icon || "").trim(),
				url: String(item.url || "").trim(), showName: Boolean(item.showName),
			})).filter(item => item.name && item.icon && item.url) : [];
			if (!settings.title || !settings.siteUrl) throw new Error("站点标题和网址不能为空");
			if (!/^https:\/\//.test(settings.siteUrl)) throw new Error("站点网址必须以 https:// 开头");
			if (!settings.siteStartDate || Number.isNaN(Date.parse(settings.siteStartDate))) throw new Error("站点开始时间无效");
			await writeFile(settingsFile, `${JSON.stringify(settings, null, 2)}\n`, "utf8");
			return reply(res, 200, { ok: true });
		}
		if (req.method === "POST" && url.pathname === "/api/upload") {
			const mime = String(req.headers["content-type"] || "").split(";")[0];
			const ext = { "image/jpeg": "jpg", "image/png": "png", "image/webp": "webp", "image/avif": "avif", "image/gif": "gif" }[mime];
			if (!ext) throw new Error("仅支持 JPG、PNG、WebP、AVIF、GIF 图片");
			const bytes = await body(req, 8_000_000);
			const filename = `${Date.now()}-${randomBytes(4).toString("hex")}.${ext}`;
			await mkdir(path.join(root, "public", "uploads"), { recursive: true });
			await writeFile(path.join(root, "public", "uploads", filename), bytes);
			return reply(res, 200, { url: `/uploads/${filename}` });
		}
		if (req.method === "POST" && url.pathname === "/api/asset") {
			const folder = String(req.headers["x-target-folder"] || "public/uploads").replaceAll("\\", "/");
			if (!/^(public\/uploads|public\/assets\/images|public\/assets\/music|public\/gallery\/[a-zA-Z0-9_-]+)$/.test(folder)) throw new Error("上传目标目录无效");
			const mime = String(req.headers["content-type"] || "").split(";")[0];
			const ext = { "image/jpeg": "jpg", "image/png": "png", "image/webp": "webp", "image/avif": "avif", "image/gif": "gif", "audio/mpeg": "mp3", "audio/ogg": "ogg", "audio/wav": "wav", "audio/mp4": "m4a" }[mime];
			if (!ext) throw new Error("仅支持常见图片或音频文件");
			if (mime.startsWith("audio/") && folder !== "public/assets/music") throw new Error("音频请上传到音乐目录");
			const bytes = await body(req, 30_000_000);
			const filename = `${Date.now()}-${randomBytes(4).toString("hex")}.${ext}`;
			await mkdir(path.join(root, folder), { recursive: true });
			await writeFile(path.join(root, folder, filename), bytes);
			return reply(res, 200, { url: `/${folder.slice("public/".length)}/${filename}` });
		}
		if (req.method === "POST" && url.pathname === "/api/preview") {
			const input = JSON.parse((await body(req)).toString());
			return reply(res, 200, { html: sanitizeHtml(marked.parse(String(input.body || "")), { allowedTags: sanitizeHtml.defaults.allowedTags.concat(["img"]), allowedAttributes: { ...sanitizeHtml.defaults.allowedAttributes, img: ["src", "alt", "title"] } }) });
		}
		if (req.method === "POST" && ["/api/publish/github", "/api/publish/source", "/api/publish/pages", "/api/publish/vercel"].includes(url.pathname)) {
			if (busy) return reply(res, 409, { error: "发布任务正在运行" });
			busy = true;
			try { return reply(res, 200, { ok: true, log: url.pathname.endsWith("vercel") ? await publishVercel() : url.pathname.endsWith("pages") ? await publishPages() : await publishSource() }); }
			finally { busy = false; }
		}
		return reply(res, 404, { error: "页面不存在" });
	} catch (error) { reply(res, 400, { error: error.message || "操作失败" }); }
});

server.listen(port, "127.0.0.1", () => console.log(`Firefly 管理器：http://localhost:${port}`));
if (process.env.MANAGER_NO_BLOG !== "1") {
	const blog = spawn("pnpm", ["dev", "--host", "127.0.0.1"], { cwd: root, shell: process.platform === "win32", stdio: "inherit", windowsHide: true });
	blog.on("error", error => console.error("博客启动失败：", error.message));
	process.on("SIGINT", () => blog.kill());
}

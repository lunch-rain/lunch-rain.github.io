import http from "node:http";
import { readFile, writeFile, readdir, mkdir, unlink, stat, realpath } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { randomBytes } from "node:crypto";
import { spawn } from "node:child_process";
import matter from "gray-matter";
import { marked } from "marked";
import sanitizeHtml from "sanitize-html";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const managerDir = path.join(root, "manager");
const postsDir = path.join(root, "src", "content", "posts");
const settingsFile = path.join(managerDir, "site-settings.json");
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

async function readPost(id) {
	const parsed = matter(await readFile(safeId(id), "utf8"));
	return { id, ...parsed.data, published: dateString(parsed.data.published), updated: dateString(parsed.data.updated), body: parsed.content.trimStart() };
}

async function run(command, args, timeout = 180_000) {
	return new Promise((resolve, reject) => {
		// Git accepts an argv array directly on Windows. Sending it through cmd.exe
		// splits a commit message containing spaces into separate pathspecs.
		const child = spawn(command, args, { cwd: root, shell: process.platform === "win32" && command === "pnpm", windowsHide: true });
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

async function publishGithub() {
	const logs = [];
	logs.push("正在构建 Firefly...");
	await run("pnpm", ["astro", "sync", "--force"], 120_000);
	await run("pnpm", ["build"], 600_000);
	try { await git("rev-parse", "--is-inside-work-tree"); }
	catch { await git("init"); }
	let remote = "";
	try { remote = (await git("remote", "get-url", "origin")).trim(); } catch {}
	if (remote && remote !== gitRemote) throw new Error(`当前 origin 指向 ${remote}，请先检查仓库地址。`);
	if (!remote) await git("remote", "add", "origin", gitRemote);
	await git("add", "-A");
	const staged = await git("diff", "--cached", "--name-only");
	if (staged.trim()) {
		await git("commit", "-m", `content: update blog ${new Date().toISOString().slice(0, 10)}`);
		logs.push("本地修改已提交");
	} else logs.push("没有新的本地修改");
	await git("branch", "-M", "main");
	await git("push", "-u", "origin", "main");
	logs.push("已推送到 GitHub。若连接了 Vercel 或启用了 Pages，对应平台会自动部署。");
	return logs.join("\n");
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
		if (req.method === "GET" && url.pathname === "/api/state") {
			const ids = await allPosts();
			const posts = await Promise.all(ids.map(readPost));
			posts.sort((a, b) => b.published.localeCompare(a.published));
			return reply(res, 200, { posts, settings: JSON.parse(await readFile(settingsFile, "utf8")), remote: gitRemote });
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
			const keys = ["title", "subtitle", "siteUrl", "description", "author", "bio", "avatar", "github", "bannerTitle", "bannerSubtitle", "bannerDesktop", "bannerMobile", "announcement", "siteStartDate"];
			const settings = {};
			for (const key of keys) settings[key] = String(input[key] || "").trim();
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
		if (req.method === "POST" && (url.pathname === "/api/publish/github" || url.pathname === "/api/publish/vercel")) {
			if (busy) return reply(res, 409, { error: "发布任务正在运行" });
			busy = true;
			try { return reply(res, 200, { ok: true, log: url.pathname.endsWith("vercel") ? await publishVercel() : await publishGithub() }); }
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

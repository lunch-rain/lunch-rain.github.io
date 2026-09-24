const token = document.querySelector('meta[name="manager-token"]').content;
const $ = selector => document.querySelector(selector);
const startTimeLabel = document.createElement("label");
startTimeLabel.className = "wide";
startTimeLabel.textContent = "站点开始时间（含时区）";
const startTimeInput = document.createElement("input");
startTimeInput.dataset.setting = "siteStartDate";
startTimeInput.placeholder = "2026-09-24T15:10:15+08:00";
startTimeLabel.append(startTimeInput);
$("#settings .settings-grid").append(startTimeLabel);
const linksPanel = document.createElement("div");
linksPanel.className = "panel profile-links-panel";
linksPanel.innerHTML = '<div class="panel-heading"><div><h3>个人资料链接</h3><p>按照 Firefly 资料页的格式添加名称、Iconify 图标和地址。</p></div><button id="add-profile-link" class="secondary">＋ 添加链接</button></div><div id="profile-links"></div><p class="editor-hint">图标示例：fa7-brands:github、fa7-solid:envelope、fa7-solid:rss</p>';
$("#settings").append(linksPanel);
const assetPanel = document.createElement("div");
assetPanel.className = "panel profile-links-panel";
assetPanel.innerHTML = '<h3>上传站点素材</h3><p class="editor-hint">图片、音乐可以上传到相应目录；相册填 public/gallery/相册ID。</p><label>目标目录<input id="asset-folder" value="public/uploads" placeholder="public/uploads"></label><label class="upload-label">选择图片或音频<input id="asset-file" type="file" accept="image/png,image/jpeg,image/webp,image/avif,image/gif,audio/mpeg,audio/ogg,audio/wav,audio/mp4"></label><label>上传后的站内路径<input id="asset-url" readonly></label>';
$("#files").append(assetPanel);
let state = { posts: [], settings: {} };
let editingId = null;
let lastUpload = "";
let files = [];
let activeFile = "";

function addProfileLink(item = {}) {
	const row = document.createElement("div");
	row.className = "profile-link-row";
	for (const [key, label] of [["name", "名称"], ["icon", "图标"], ["url", "链接地址"]]) {
		const field = document.createElement("label");
		field.textContent = label;
		const input = document.createElement("input");
		input.dataset.linkField = key;
		input.value = item[key] || "";
		field.append(input);
		row.append(field);
	}
	const showName = document.createElement("label");
	showName.className = "show-name";
	const checkbox = document.createElement("input");
	checkbox.type = "checkbox";
	checkbox.dataset.linkField = "showName";
	checkbox.checked = Boolean(item.showName);
	showName.append(checkbox, "显示名称");
	const remove = document.createElement("button");
	remove.className = "danger ghost";
	remove.textContent = "删除";
	remove.onclick = () => row.remove();
	row.append(showName, remove);
	$("#profile-links").append(row);
}
$("#add-profile-link").onclick = () => addProfileLink();

async function api(path, data) {
	const options = data === undefined ? {} : { method: "POST", headers: { "content-type": "application/json", "x-manager-token": token }, body: JSON.stringify(data) };
	const response = await fetch(path, options);
	const result = await response.json();
	if (!response.ok) throw new Error(result.error || "操作失败");
	return result;
}

function toast(message) {
	const element = $("#toast");
	element.textContent = message;
	element.classList.add("show");
	clearTimeout(toast.timer);
	toast.timer = setTimeout(() => element.classList.remove("show"), 3800);
}

function view(name) {
	document.querySelectorAll(".view").forEach(element => element.classList.toggle("active", element.id === name));
	document.querySelectorAll(".nav-item").forEach(element => element.classList.toggle("active", element.dataset.view === name || (name === "editor" && element.dataset.view === "posts")));
	const titles = { dashboard: ["早上好，lunch-rain ☀", "写下新的故事，整理你的灵感。"], posts: ["文章工作台", "在这里管理所有 Firefly 文章。"], editor: ["专注写作", "把灵感变成一篇文章。"], settings: ["我的博客", "让博客呈现你的风格。"], files: ["全部内容与配置", "每个文件都可以在这里找到。"], publish: ["准备发布", "把修改带到线上。"] };
	$("#page-title").textContent = titles[name][0];
	$("#page-subtitle").textContent = titles[name][1];
	window.scrollTo(0, 0);
	if (name === "files") loadFileList().catch(error => toast(error.message));
}

function row(post) {
	const element = document.createElement("div");
	element.className = "post-row";
	const text = document.createElement("div");
	const title = document.createElement("strong");
	title.textContent = post.title || post.id;
	const meta = document.createElement("small");
	meta.textContent = `${post.published || "未设日期"} · ${post.category || "未分类"} · ${post.id}`;
	text.append(title, meta);
	const actions = document.createElement("div");
	actions.className = "row-actions";
	const badge = document.createElement("span");
	badge.className = `badge${post.draft ? " draft" : ""}`;
	badge.textContent = post.draft ? "草稿" : "已发布";
	const button = document.createElement("button");
	button.className = "secondary";
	button.textContent = "编辑";
	button.onclick = () => edit(post.id);
	actions.append(badge, button);
	element.append(text, actions);
	return element;
}

function render() {
	const posts = state.posts;
	$("#count-all").textContent = posts.length;
	$("#count-public").textContent = posts.filter(post => !post.draft).length;
	$("#count-draft").textContent = posts.filter(post => post.draft).length;
	$("#post-total").textContent = `共 ${posts.length} 篇`;
	$("#recent-list").replaceChildren(...posts.slice(0, 5).map(row));
	const query = $("#search").value.trim().toLowerCase();
	$("#post-list").replaceChildren(...posts.filter(post => `${post.title} ${post.category} ${post.id}`.toLowerCase().includes(query)).map(row));
	for (const input of document.querySelectorAll("[data-setting]")) input.value = state.settings[input.dataset.setting] || "";
	$("#profile-links").replaceChildren();
	for (const item of state.settings.profileLinks || []) addProfileLink(item);
}

async function refresh() { state = await api("/api/state"); render(); }

function edit(id = null) {
	editingId = id;
	const post = state.posts.find(item => item.id === id) || {};
	$("#editor-heading").textContent = id ? "编辑文章" : "写新文章";
	$("#delete-post").hidden = !id;
	$("#post-title").value = post.title || "";
	$("#post-description").value = post.description || "";
	$("#post-body").value = post.body || "";
	$("#post-date").value = post.published || new Date().toISOString().slice(0, 10);
	$("#post-category").value = post.category || "";
	$("#post-tags").value = (post.tags || []).join(", ");
	$("#post-image").value = post.image || "";
	$("#post-draft").checked = Boolean(post.draft);
	$("#post-pinned").checked = Boolean(post.pinned);
	$('[data-editor-tab="write"]').click();
	view("editor");
}

document.querySelectorAll(".nav-item").forEach(button => button.onclick = () => view(button.dataset.view));
document.querySelectorAll("[data-go]").forEach(button => button.onclick = () => view(button.dataset.go));
$("#hero-new").onclick = () => edit();
$("#new-post").onclick = () => edit();
$("#back-posts").onclick = () => view("posts");
$("#search").oninput = render;

$("#save-post").onclick = async () => {
	try {
		const post = {
			id: editingId, title: $("#post-title").value, description: $("#post-description").value,
			body: $("#post-body").value, published: $("#post-date").value,
			category: $("#post-category").value, tags: $("#post-tags").value.split(/[,，]/).map(x => x.trim()).filter(Boolean),
			image: $("#post-image").value, draft: $("#post-draft").checked, pinned: $("#post-pinned").checked,
		};
		const result = await api("/api/post", post);
		editingId = result.id;
		await refresh();
		toast("文章已保存到本地，博客预览会自动更新。");
		view("posts");
	} catch (error) { toast(error.message); }
};

$("#delete-post").onclick = async () => {
	if (!editingId || !confirm("确定删除这篇文章吗？此操作会删除本地 Markdown 文件。")) return;
	try { await api("/api/delete", { id: editingId }); await refresh(); view("posts"); toast("文章已删除。"); }
	catch (error) { toast(error.message); }
};

$("#save-settings").onclick = async () => {
	const data = {};
	for (const input of document.querySelectorAll("[data-setting]")) data[input.dataset.setting] = input.value;
	data.profileLinks = Array.from(document.querySelectorAll(".profile-link-row"), row => ({
		name: row.querySelector('[data-link-field="name"]').value,
		icon: row.querySelector('[data-link-field="icon"]').value,
		url: row.querySelector('[data-link-field="url"]').value,
		showName: row.querySelector('[data-link-field="showName"]').checked,
	}));
	try { await api("/api/settings", data); await refresh(); toast("站点设置已保存。"); }
	catch (error) { toast(error.message); }
};

document.querySelectorAll("[data-editor-tab]").forEach(button => button.onclick = async () => {
	const preview = button.dataset.editorTab === "preview";
	document.querySelectorAll("[data-editor-tab]").forEach(item => item.classList.toggle("active", item === button));
	$("#post-body").hidden = preview;
	$("#markdown-preview").hidden = !preview;
	if (preview) {
		try { $("#markdown-preview").innerHTML = (await api("/api/preview", { body: $("#post-body").value })).html; }
		catch (error) { toast(error.message); }
	}
});

async function uploadImage(event, target) {
	const file = event.target.files[0];
	if (!file) return;
	try {
		const response = await fetch("/api/upload", { method: "POST", headers: { "content-type": file.type, "x-manager-token": token }, body: file });
		const result = await response.json();
		if (!response.ok) throw new Error(result.error);
		lastUpload = result.url;
		$(target).value = result.url;
		toast(`图片已上传：${result.url}`);
	} catch (error) { toast(error.message); }
}
$("#image-upload").onchange = event => uploadImage(event, "#post-image");
$("#settings-upload").onchange = event => uploadImage(event, "#settings-upload-url");
$("#asset-file").onchange = async event => {
	const file = event.target.files[0];
	if (!file) return;
	try {
		const response = await fetch("/api/asset", { method: "POST", headers: { "content-type": file.type, "x-target-folder": $("#asset-folder").value.trim(), "x-manager-token": token }, body: file });
		const result = await response.json();
		if (!response.ok) throw new Error(result.error);
		$("#asset-url").value = result.url;
		toast(`上传成功：${result.url}`);
	} catch (error) { toast(error.message); }
};

$("#insert-image").onclick = () => {
	const url = lastUpload || $("#post-image").value;
	if (!url) return toast("请先上传图片或填写图片 URL。");
	const editor = $("#post-body");
	const insertion = `\n![图片说明](${url})\n`;
	editor.setRangeText(insertion, editor.selectionStart, editor.selectionEnd, "end");
	editor.focus();
	toast("图片链接已插入正文。");
};

async function publish(target) {
	const button = $(`#publish-${target}`);
	const log = $("#publish-log");
	button.disabled = true;
	const original = button.textContent;
	button.textContent = "正在上传…";
	log.hidden = false;
	log.textContent = target === "source" ? "正在提交并同步源码…" : "正在构建和发布，请勿关闭管理器。首次构建可能需要几分钟…";
	try { log.textContent = (await api(`/api/publish/${target}`, {})).log; toast("发布操作完成，请查看日志。"); }
	catch (error) { log.textContent = error.message; toast("发布失败，请查看日志。"); }
	finally { button.disabled = false; button.textContent = original; }
}
async function loadDeployConfig() {
	const config = await api("/api/deploy/config");
	$("#static-repo-url").value = config.staticRepoUrl;
	$("#static-branch").value = config.staticBranch;
	$("#source-repo-url").value = config.sourceRepoUrl;
	$("#source-branch").value = config.sourceBranch;
}
$("#save-deploy-config").onclick = async () => {
	try {
		await api("/api/deploy/config", {
			staticRepoUrl: $("#static-repo-url").value,
			staticBranch: $("#static-branch").value,
			sourceRepoUrl: $("#source-repo-url").value,
			sourceBranch: $("#source-branch").value,
		});
		toast("发布目标已保存。");
	} catch (error) { toast(error.message); }
};
$("#publish-pages").onclick = () => publish("pages");
$("#publish-source").onclick = () => publish("source");
$("#publish-vercel").onclick = () => publish("vercel");

async function loadFileList() {
	files = (await api("/api/files")).files;
	renderFiles();
}

function renderFiles() {
	const query = $("#file-search").value.trim().toLowerCase();
	const list = $("#file-list");
	list.replaceChildren();
	for (const file of files.filter(item => item.toLowerCase().includes(query))) {
		const button = document.createElement("button");
		button.className = `file-item${file === activeFile ? " active" : ""}`;
		button.textContent = file;
		button.onclick = () => openFile(file);
		list.append(button);
	}
}

async function openFile(file) {
	try {
		const result = await api(`/api/file?path=${encodeURIComponent(file)}`);
		activeFile = file;
		$("#file-path").textContent = file;
		$("#file-content").value = result.content;
		$("#file-content").disabled = false;
		$("#save-file").disabled = false;
		$("#delete-file").hidden = !file.startsWith("src/content/");
		renderFiles();
	} catch (error) { toast(error.message); }
}

$("#file-search").oninput = renderFiles;
$("#new-file").onclick = async () => {
	const file = prompt("新内容路径（例如 src/content/posts/my-first-post.md）");
	if (!file) return;
	if (!file.replaceAll("\\", "/").startsWith("src/content/")) return toast("新建内容请放在 src/content/ 目录下。");
	const normalized = file.replaceAll("\\", "/");
	const name = normalized.split("/").at(-1).replace(/\.(md|mdx)$/, "");
	let content = "";
	if (normalized.startsWith("src/content/posts/")) content = `---\ntitle: "${name}"\npublished: ${new Date().toISOString().slice(0, 10)}\ndraft: true\n---\n\n在这里开始写作。\n`;
	else if (normalized.startsWith("src/content/dynamic/")) content = `---\npublished: ${new Date().toISOString().slice(0, 10)} 12:00:00\n---\n\n写下此刻的想法。\n`;
	else if (normalized.startsWith("src/content/projects/")) content = `---\ntitle: "${name}"\npublished: ${new Date().toISOString().slice(0, 10)}\ndraft: true\n---\n\n项目介绍。\n`;
	else content = `---\ntitle: "${name}"\n---\n\n`;
	try { await api("/api/file", { path: normalized, content, create: true }); await loadFileList(); await openFile(normalized); toast("内容文件已创建，请继续编辑。"); }
	catch (error) { toast(error.message); }
};
$("#save-file").onclick = async () => {
	if (!activeFile) return;
	try { await api("/api/file", { path: activeFile, content: $("#file-content").value }); toast("文件已保存到本地。"); if (activeFile.startsWith("src/content/posts/")) await refresh(); }
	catch (error) { toast(error.message); }
};
$("#delete-file").onclick = async () => {
	if (!activeFile || !confirm(`确定删除 ${activeFile} 吗？`)) return;
	try { await api("/api/file/delete", { path: activeFile }); activeFile = ""; $("#file-path").textContent = "选择左侧文件"; $("#file-content").value = ""; $("#file-content").disabled = true; $("#save-file").disabled = true; $("#delete-file").hidden = true; await loadFileList(); await refresh(); toast("内容已删除。"); }
	catch (error) { toast(error.message); }
};

refresh().catch(error => toast(error.message));
loadDeployConfig().catch(error => toast(error.message));

const token = document.querySelector('meta[name="manager-token"]').content;
const $ = selector => document.querySelector(selector);
const assetPanel = document.createElement("div");
assetPanel.className = "panel profile-links-panel";
assetPanel.innerHTML = '<h3>上传站点素材</h3><p class="editor-hint">图片、音乐可以上传到相应目录；相册填 public/gallery/相册ID。</p><label>目标目录<input id="asset-folder" value="public/uploads" placeholder="public/uploads"></label><label class="upload-label">选择图片或音频<input id="asset-file" type="file" accept="image/png,image/jpeg,image/webp,image/avif,image/gif,audio/mpeg,audio/ogg,audio/wav,audio/mp4"></label><label>上传后的站内路径<input id="asset-url" readonly></label>';
$("#files").append(assetPanel);
let state = { posts: [], settings: {} };
let editingId = null;
let lastUpload = "";
let files = [];
let activeFile = "";
let currentImageFolder = "";
let currentAlbumId = "";
const linkPresets = {
	GitHub: { icon: "fa7-brands:github", url: "https://github.com/lunch-rain" },
	邮箱: { icon: "fa7-solid:envelope", url: "mailto:" },
	RSS: { icon: "fa7-solid:rss", url: "/rss/" },
	Atom: { icon: "fa7-solid:atom", url: "/atom/" },
	哔哩哔哩: { icon: "fa7-brands:bilibili", url: "https://space.bilibili.com/" },
	X: { icon: "fa7-brands:x-twitter", url: "https://x.com/" },
};

function addProfileLink(item = {}) {
	const row = document.createElement("div");
	row.className = "profile-link-row";
	const typeField = document.createElement("label");
	typeField.textContent = "平台";
	const type = document.createElement("select");
	for (const name of ["自定义", ...Object.keys(linkPresets)]) {
		const option = document.createElement("option");
		option.value = name;
		option.textContent = name;
		type.append(option);
	}
	type.value = linkPresets[item.name]?.icon === item.icon ? item.name : "自定义";
	typeField.append(type);
	row.append(typeField);
	for (const [key, label] of [["name", "名称"], ["icon", "图标"], ["url", "链接地址"]]) {
		const field = document.createElement("label");
		field.textContent = label;
		const input = document.createElement("input");
		input.dataset.linkField = key;
		input.value = item[key] || "";
		field.append(input);
		row.append(field);
	}
	type.onchange = () => {
		if (type.value === "自定义") return;
		const preset = linkPresets[type.value];
		row.querySelector('[data-link-field="name"]').value = type.value;
		row.querySelector('[data-link-field="icon"]').value = preset.icon;
		row.querySelector('[data-link-field="url"]').value = type.value === "GitHub" ? ($("[data-setting=github]").value || preset.url) : preset.url;
	};
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
	const titles = { dashboard: ["早上好，RainLove ☀", "写下新的故事，整理你的灵感。"], posts: ["文章工作台", "在这里管理所有 Firefly 文章。"], images: ["图片工作台", "上传、预览并整理博客图片。"], albums: ["相册工作台", "管理博客相册中的图片。"], editor: ["专注写作", "把灵感变成一篇文章。"], settings: ["我的博客", "让博客呈现你的风格。"], files: ["全部内容与配置", "每个文件都可以在这里找到。"], publish: ["准备发布", "把修改带到线上。"] };
	$("#page-title").textContent = titles[name][0];
	$("#page-subtitle").textContent = titles[name][1];
	window.scrollTo(0, 0);
	if (name === "files") loadFileList().catch(error => toast(error.message));
	if (name === "images") loadImageLibrary().catch(error => toast(error.message));
	if (name === "albums") loadAlbums().catch(error => toast(error.message));
}

async function loadImageLibrary() {
	const result = await api(`/api/images?folder=${encodeURIComponent(currentImageFolder)}`);
	currentImageFolder = result.folder;
	const breadcrumbs = $("#image-breadcrumbs");
	breadcrumbs.replaceChildren();
	const parts = currentImageFolder.split("/").filter(Boolean);
	for (let index = 0; index <= parts.length; index++) {
		const button = document.createElement("button");
		button.type = "button";
		button.textContent = index ? parts[index - 1] : "图片库";
		button.disabled = index === parts.length;
		button.onclick = () => { currentImageFolder = parts.slice(0, index).join("/"); loadImageLibrary().catch(error => toast(error.message)); };
		breadcrumbs.append(button);
		if (index < parts.length) breadcrumbs.append(" / ");
	}
	$("#image-parent").disabled = !currentImageFolder;
	$("#image-count").textContent = `${result.folders.length} 个文件夹 · ${result.images.length} 张图片`;
	const folderList = $("#image-folders");
	folderList.replaceChildren();
	for (const folder of result.folders) {
		const wrapper = document.createElement("div");
		wrapper.className = "image-folder-row";
		const button = document.createElement("button");
		button.type = "button";
		button.className = "image-folder";
		button.textContent = `📁 ${folder.name}`;
		button.onclick = () => { currentImageFolder = folder.path; loadImageLibrary().catch(error => toast(error.message)); };
		const remove = document.createElement("button");
		remove.type = "button";
		remove.className = "danger ghost";
		remove.textContent = "删除";
		remove.title = `删除文件夹“${folder.name}”及其中所有图片`;
		remove.onclick = async () => {
			if (!confirm(`确定删除文件夹“${folder.name}”及其中所有图片吗？`)) return;
			try { await api("/api/images/folder/delete", { folder: folder.path }); await loadImageLibrary(); toast("文件夹已删除。"); }
			catch (error) { toast(error.message); }
		};
		wrapper.append(button, remove);
		folderList.append(wrapper);
	}
	const grid = $("#image-grid");
	grid.replaceChildren();
	for (const item of result.images) {
		const card = document.createElement("article");
		card.className = "image-card";
		const img = document.createElement("img");
		img.src = item.url;
		img.alt = item.name;
		img.loading = "lazy";
		const caption = document.createElement("div");
		const name = document.createElement("strong");
		name.textContent = item.name;
		name.title = item.name;
		const size = document.createElement("small");
		size.textContent = `${Math.max(1, Math.round(item.size / 1024))} KB`;
		const copy = document.createElement("button");
		copy.type = "button";
		copy.className = "secondary";
		copy.textContent = "复制路径";
		copy.onclick = async () => {
			try { await navigator.clipboard.writeText(decodeURI(item.url)); toast(`已复制：${decodeURI(item.url)}`); }
			catch { toast(`图片路径：${decodeURI(item.url)}`); }
		};
		const remove = document.createElement("button");
		remove.type = "button";
		remove.className = "danger ghost";
		remove.textContent = "删除";
		remove.onclick = async () => {
			if (!confirm(`确定删除图片“${item.name}”吗？`)) return;
			try { await api("/api/images/delete", { folder: currentImageFolder, name: item.name }); await loadImageLibrary(); toast("图片已删除。"); }
			catch (error) { toast(error.message); }
		};
		const actions = document.createElement("div");
		actions.className = "image-card-actions";
		actions.append(copy, remove);
		caption.append(name, size, actions);
		card.append(img, caption);
		grid.append(card);
	}
	$("#image-empty").hidden = Boolean(result.folders.length || result.images.length);
}

$("#image-parent").onclick = () => { currentImageFolder = currentImageFolder.split("/").slice(0, -1).join("/"); loadImageLibrary().catch(error => toast(error.message)); };
$("#new-image-folder").onclick = async () => {
	const name = prompt("新文件夹名称（支持中文、英文、数字、空格、- 和 _）");
	if (name === null) return;
	try {
		const result = await api("/api/images/folder", { parent: currentImageFolder, name: name.trim() });
		currentImageFolder = result.folder;
		await loadImageLibrary();
		toast("文件夹已创建。");
	} catch (error) { toast(error.message); }
};

async function uploadLibraryImages(fileList) {
	const images = Array.from(fileList || []);
	if (!images.length) return;
	let uploaded = 0;
	for (const file of images) {
		try {
			if (!/^image\/(jpeg|png|webp|avif|gif)$/.test(file.type)) throw new Error(`${file.name} 不是支持的图片格式`);
			if (file.size > 8_000_000) throw new Error(`${file.name} 超过 8 MB`);
			$("#image-dropzone").textContent = `正在上传 ${uploaded + 1} / ${images.length}：${file.name}`;
			const response = await fetch("/api/images/upload", { method: "POST", headers: { "content-type": file.type, "x-image-folder": encodeURIComponent(currentImageFolder), "x-manager-token": token }, body: file });
			const result = await response.json();
			if (!response.ok) throw new Error(result.error || "上传失败");
			uploaded++;
		} catch (error) { toast(error.message); }
	}
	$("#image-dropzone").innerHTML = '把图片拖到这里，或点击右上角“上传图片”<small>支持 JPG、PNG、WebP、AVIF、GIF；单张不超过 8 MB</small>';
	$("#library-upload").value = "";
	await loadImageLibrary();
	if (uploaded) toast(`已上传 ${uploaded} 张图片到 ${currentImageFolder || "图片库"}。`);
}
$("#library-upload").onchange = event => uploadLibraryImages(event.target.files).catch(error => toast(error.message));
const imageDropzone = $("#image-dropzone");
imageDropzone.ondragover = event => { event.preventDefault(); imageDropzone.classList.add("drag-over"); };
imageDropzone.ondragleave = () => imageDropzone.classList.remove("drag-over");
imageDropzone.ondrop = event => { event.preventDefault(); imageDropzone.classList.remove("drag-over"); uploadLibraryImages(event.dataTransfer.files).catch(error => toast(error.message)); };

async function loadAlbums() {
	const result = await api("/api/albums");
	const selected = result.albums.find(album => album.id === currentAlbumId);
	if (currentAlbumId && !selected) currentAlbumId = "";
	$("#album-back").hidden = !currentAlbumId;
	$("#album-delete").hidden = !currentAlbumId || currentAlbumId === "uploads";
	$("#album-manage-library").hidden = currentAlbumId !== "uploads";
	$("#album-upload-button").hidden = !currentAlbumId || currentAlbumId === "uploads";
	$("#album-editor").hidden = !currentAlbumId;
	$("#album-heading").textContent = selected ? selected.name : "全部相册";
	$("#album-count").textContent = selected ? `${selected.count} 张图片` : `${result.albums.length} 个相册`;
	if (selected) {
		for (const key of ["name", "date", "description", "location", "cover", "password", "passwordHint"]) $("#album-" + key.replace(/[A-Z]/g, letter => "-" + letter.toLowerCase())).value = selected[key] || "";
		$("#album-tags").value = (selected.tags || []).join(", ");
	}
	const list = $("#album-list");
	const grid = $("#album-images");
	list.replaceChildren();
	grid.replaceChildren();
	$("#album-empty").hidden = true;
	if (!currentAlbumId) {
		for (const album of result.albums) {
			const button = document.createElement("button");
			button.type = "button";
			button.className = "image-folder album-tile";
			const title = document.createElement("strong");
			title.textContent = `▣ ${album.name}`;
			const details = document.createElement("small");
			details.textContent = `${album.count} 张图片${album.id === "uploads" ? " · 自动展示图片库" : ""}`;
			button.append(title, details);
			button.onclick = () => { currentAlbumId = album.id; loadAlbums().catch(error => toast(error.message)); };
			list.append(button);
		}
		return;
	}
	if (currentAlbumId === "uploads") return;
	const { images } = await api(`/api/albums/images?id=${encodeURIComponent(currentAlbumId)}`);
	$("#album-empty").hidden = images.length > 0;
	for (const item of images) {
		const card = document.createElement("article");
		card.className = "image-card";
		const img = document.createElement("img");
		img.src = item.url;
		img.alt = item.name;
		const caption = document.createElement("div");
		const name = document.createElement("strong");
		name.textContent = item.name;
		const actions = document.createElement("div");
		actions.className = "image-card-actions";
		const copy = document.createElement("button");
		copy.className = "secondary";
		copy.textContent = "复制路径";
		copy.onclick = () => navigator.clipboard.writeText(item.url).then(() => toast("路径已复制。"), () => toast(item.url));
		const remove = document.createElement("button");
		remove.className = "danger ghost";
		remove.textContent = "删除";
		remove.onclick = async () => {
			if (!confirm(`确定删除图片“${item.name}”吗？`)) return;
			try { await api("/api/albums/image/delete", { id: currentAlbumId, name: item.name }); await loadAlbums(); toast("图片已删除。"); }
			catch (error) { toast(error.message); }
		};
		actions.append(copy, remove);
		caption.append(name, actions);
		card.append(img, caption);
		grid.append(card);
	}
}

$("#album-back").onclick = () => { currentAlbumId = ""; loadAlbums().catch(error => toast(error.message)); };
$("#album-manage-library").onclick = () => { currentImageFolder = ""; view("images"); };
$("#album-save").onclick = async () => {
	const data = { id: currentAlbumId };
	for (const key of ["name", "date", "description", "location", "cover", "password", "passwordHint", "tags"]) data[key] = $("#album-" + key.replace(/[A-Z]/g, letter => "-" + letter.toLowerCase())).value;
	try { await api("/api/albums/update", data); await loadAlbums(); toast("相册信息已保存。"); }
	catch (error) { toast(error.message); }
};
$("#new-album").onclick = async () => {
	const name = prompt("新相册名称：");
	if (name === null) return;
	try {
		const result = await api("/api/albums/create", { name: name.trim() });
		currentAlbumId = result.id;
		await loadAlbums();
		toast("相册已创建，可上传图片。");
	} catch (error) { toast(error.message); }
};
$("#album-delete").onclick = async () => {
	const name = $("#album-heading").textContent;
	if (!confirm(`确定删除相册“${name}”及其中所有图片吗？`)) return;
	try { await api("/api/albums/delete", { id: currentAlbumId }); currentAlbumId = ""; await loadAlbums(); toast("相册已删除。"); }
	catch (error) { toast(error.message); }
};
$("#album-upload").onchange = async event => {
	const images = Array.from(event.target.files || []);
	let uploaded = 0;
	for (const file of images) {
		try {
			if (!/^image\/(jpeg|png|webp|avif|gif)$/.test(file.type) || file.size > 8_000_000) throw new Error(`${file.name} 格式不支持或超过 8 MB`);
			const response = await fetch("/api/albums/upload", { method: "POST", headers: { "content-type": file.type, "x-album-id": currentAlbumId, "x-manager-token": token }, body: file });
			const result = await response.json();
			if (!response.ok) throw new Error(result.error || "上传失败");
			uploaded++;
		} catch (error) { toast(error.message); }
	}
	event.target.value = "";
	await loadAlbums();
	if (uploaded) toast(`已上传 ${uploaded} 张图片。`);
};

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
	for (const input of document.querySelectorAll("[data-setting]")) {
		const value = state.settings[input.dataset.setting] || "";
		if (input.dataset.setting === "siteStartDate" && value) {
			const date = new Date(value);
			const pad = number => String(number).padStart(2, "0");
			input.value = Number.isNaN(date.getTime()) ? "" : `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}T${pad(date.getHours())}:${pad(date.getMinutes())}:${pad(date.getSeconds())}`;
		} else input.value = Array.isArray(value) ? value.join("\n") : value;
	}
	$("#profile-links").replaceChildren();
	for (const item of state.settings.profileLinks || []) addProfileLink(item);
	updateImagePreviews();
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
	for (const key of ["bannerSubtitle", "bannerDesktop", "bannerMobile"]) {
		data[key] = data[key].split(/\r?\n/).map(value => value.trim()).filter(Boolean);
	}
	data.profileLinks = Array.from(document.querySelectorAll(".profile-link-row"), row => ({
		name: row.querySelector('[data-link-field="name"]').value,
		icon: row.querySelector('[data-link-field="icon"]').value,
		url: row.querySelector('[data-link-field="url"]').value,
		showName: row.querySelector('[data-link-field="showName"]').checked,
	}));
	try {
		if (data.siteStartDate) data.siteStartDate = new Date(data.siteStartDate).toISOString();
		for (const [index, link] of data.profileLinks.entries()) {
			if ((link.name || link.icon || link.url) && (!link.name || !link.icon || !link.url)) throw new Error(`第 ${index + 1} 个社交链接还未填完整。`);
		}
		for (const link of data.profileLinks) if (link.icon === "fa7-brands:github" && data.github) link.url = data.github;
		await api("/api/settings", data);
		await refresh();
		toast("设置已保存。打开本地博客即可预览。");
	}
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
		updateImagePreviews();
		toast(`图片已上传：${result.url}。请保存当前内容。`);
	} catch (error) { toast(error.message); }
}
$("#image-upload").onchange = event => uploadImage(event, "#post-image");
$("#avatar-upload").onchange = event => uploadImage(event, '[data-setting="avatar"]');
async function uploadBannerImages(event, key) {
	const files = Array.from(event.target.files || []);
	if (!files.length) return;
	const input = $(`[data-setting="${key}"]`);
	const urls = input.value.split(/\r?\n/).map(value => value.trim()).filter(Boolean);
	try {
		for (const file of files) {
			const response = await fetch("/api/upload", { method: "POST", headers: { "content-type": file.type, "x-manager-token": token }, body: file });
			const result = await response.json();
			if (!response.ok) throw new Error(result.error);
			urls.push(result.url);
			input.value = urls.join("\n");
			updateImagePreviews();
		}
		toast(`已添加 ${files.length} 张图片，请点击“保存设置”。`);
	} catch (error) { toast(error.message); }
	event.target.value = "";
}
$("#desktop-upload").onchange = event => uploadBannerImages(event, "bannerDesktop");
$("#mobile-upload").onchange = event => uploadBannerImages(event, "bannerMobile");
for (const key of ["avatar", "bannerDesktop", "bannerMobile"]) $(`[data-setting="${key}"]`).oninput = updateImagePreviews;

function updateImagePreviews() {
	const avatar = $("#avatar-preview");
	const avatarUrl = $('[data-setting="avatar"]').value.trim();
	avatar.hidden = !avatarUrl;
	avatar.onerror = () => { avatar.hidden = true; };
	if (avatarUrl) avatar.src = /^https?:\/\//i.test(avatarUrl) ? avatarUrl : `http://localhost:4321/${avatarUrl.replace(/^\//, "")}`;
	for (const [key, id] of [["bannerDesktop", "desktop-previews"], ["bannerMobile", "mobile-previews"]]) {
		const input = $(`[data-setting="${key}"]`);
		const urls = input.value.split(/\r?\n/).map(value => value.trim()).filter(Boolean);
		const previews = $(`#${id}`);
		previews.replaceChildren();
		urls.forEach((value, index) => {
			const card = document.createElement("div");
			card.className = "banner-preview-card";
			const img = document.createElement("img");
			img.src = /^https?:\/\//i.test(value) ? value : `http://localhost:4321/${value.replace(/^\//, "")}`;
			img.alt = `${key === "bannerDesktop" ? "桌面" : "手机"}壁纸 ${index + 1}`;
			const remove = document.createElement("button");
			remove.type = "button";
			remove.textContent = "删除";
			remove.onclick = () => { input.value = urls.filter((_, i) => i !== index).join("\n"); updateImagePreviews(); };
			card.append(img, remove);
			previews.append(card);
		});
	}
}

document.querySelectorAll("[data-settings-tab]").forEach(button => button.onclick = () => {
	for (const item of document.querySelectorAll("[data-settings-tab]")) {
		const active = item === button;
		item.classList.toggle("active", active);
		item.setAttribute("aria-selected", String(active));
	}
	for (const panel of document.querySelectorAll("[data-settings-panel]")) panel.hidden = panel.dataset.settingsPanel !== button.dataset.settingsTab;
});
document.querySelectorAll("[data-open-config]").forEach(button => button.onclick = async () => {
	$("#file-search").value = "";
	view("files");
	$("#file-category").value = "config";
	await loadFileList();
	await openFile(button.dataset.openConfig);
});
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
	const category = $("#file-category").value;
	const inCategory = file => ({
		config: file.startsWith("src/config/") || ["astro.config.mjs", "vercel.json"].includes(file),
		content: file.startsWith("src/content/"),
		pages: file.startsWith("src/pages/"),
		components: file.startsWith("src/components/") || file.startsWith("src/layouts/"),
		styles: file.startsWith("src/styles/"),
		assets: file.startsWith("public/"),
	})[category] ?? true;
	const list = $("#file-list");
	list.replaceChildren();
	for (const file of files.filter(item => inCategory(item) && item.toLowerCase().includes(query))) {
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
$("#file-category").onchange = renderFiles;
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

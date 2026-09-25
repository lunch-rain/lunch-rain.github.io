import type { BooknavGroup, BooknavPageConfig } from "../types/booknavConfig";

export const booknavPageConfig: BooknavPageConfig = {
	title: "常用书签",
	description: "写博客、发布和查资料时常用的入口。",
	favicon: {
		enabled: true,
		api: "https://a.favicon.im/{domain}",
	},
};

export const booknavConfig: BooknavGroup[] = [
	{
		id: "my-blog",
		name: "我的博客",
		icon: "material-symbols:home",
		desc: "访问博客和管理源码",
		items: [
			{ title: "RainLove 博客", url: "https://www.rainlove.work/", desc: "查看已经发布的博客页面", icon: "material-symbols:home" },
			{ title: "GitHub 源码", url: "https://github.com/lunch-rain/lunch-rain.github.io", desc: "查看博客源码、提交记录和 GitHub Pages 分支", icon: "fa7-brands:github" },
		],
	},
	{
		id: "writing",
		name: "写作与配置",
		icon: "material-symbols:bookmarks",
		desc: "修改主题、学习 Markdown 和 Astro",
		items: [
			{ title: "Firefly 官方文档", url: "https://docs-firefly.cuteleaf.cn/zh/", desc: "查询主题配置、页面和组件的说明" },
			{ title: "Markdown 中文教程", url: "https://markdown.com.cn/basic-syntax/", desc: "写标题、列表、链接和图片时查语法" },
			{ title: "Astro 中文文档", url: "https://docs.astro.build/zh-cn/", desc: "了解博客使用的网站框架" },
		],
	},
	{
		id: "reference",
		name: "开发参考",
		icon: "material-symbols:code",
		desc: "遇到网页问题时快速查阅",
		items: [
			{ title: "MDN Web 文档", url: "https://developer.mozilla.org/zh-CN/", desc: "查 HTML、CSS 和 JavaScript" },
			{ title: "GitHub 文档", url: "https://docs.github.com/zh", desc: "查仓库、分支和 GitHub Pages 的用法" },
			{ title: "Vercel 文档", url: "https://vercel.com/docs", desc: "查部署、域名和构建问题" },
		],
	},
];

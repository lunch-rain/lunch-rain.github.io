export type SubscribedFeed = {
	id: string;
	category: "AI" | "GitHub";
	name: string;
	description: string;
	siteUrl: string;
	feedUrl: string;
};

// 这些地址是公开 RSS 源；在 /rss/ 页面展示，并导出为 /subscriptions.opml。
export const subscribedFeeds: SubscribedFeed[] = [
	{
		id: "openai-news",
		category: "AI",
		name: "OpenAI 最新动态",
		description: "模型、产品与研究的官方更新。",
		siteUrl: "https://openai.com/news/",
		feedUrl: "https://openai.com/news/rss.xml",
	},
	{
		id: "hugging-face",
		category: "AI",
		name: "Hugging Face 博客",
		description: "开源模型、工具和实用教程。",
		siteUrl: "https://huggingface.co/blog",
		feedUrl: "https://huggingface.co/blog/feed.xml",
	},
	{
		id: "hn-ai",
		category: "AI",
		name: "Hacker News · AI 热门",
		description: "近期获得至少 50 点热度的 AI 讨论。",
		siteUrl: "https://news.ycombinator.com/",
		feedUrl: "https://hnrss.org/newest?q=AI&points=50",
	},
	{
		id: "github-trending",
		category: "GitHub",
		name: "GitHub 每日热门项目",
		description: "每天更新的 GitHub Trending 仓库。",
		siteUrl: "https://github.com/trending",
		feedUrl: "https://mshibanami.github.io/GitHubTrendingRSS/daily/all.xml",
	},
	{
		id: "github-blog",
		category: "GitHub",
		name: "GitHub 官方博客",
		description: "开发工具、开源社区和 GitHub 产品动态。",
		siteUrl: "https://github.blog/",
		feedUrl: "https://github.blog/feed/",
	},
];

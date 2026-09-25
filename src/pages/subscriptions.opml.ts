import type { APIRoute } from "astro";
import { subscribedFeeds } from "@/config/subscribedFeeds";

const escapeXml = (value: string) => value.replace(/[&<>"']/g, (character) => ({
	"&": "&amp;",
	"<": "&lt;",
	">": "&gt;",
	'"': "&quot;",
	"'": "&apos;",
})[character] || character);

export const GET: APIRoute = () => {
	const groups = ["AI", "GitHub"].map((category) => {
		const feeds = subscribedFeeds.filter((feed) => feed.category === category);
		return `    <outline text="${category}">\n${feeds.map((feed) =>
			`      <outline type="rss" text="${escapeXml(feed.name)}" title="${escapeXml(feed.name)}" description="${escapeXml(feed.description)}" xmlUrl="${escapeXml(feed.feedUrl)}" htmlUrl="${escapeXml(feed.siteUrl)}" />`,
		).join("\n")}\n    </outline>`;
	}).join("\n");
	const opml = `<?xml version="1.0" encoding="UTF-8"?>\n<opml version="2.0">\n  <head><title>RainLove 的 AI 与 GitHub 订阅</title></head>\n  <body>\n${groups}\n  </body>\n</opml>\n`;
	return new Response(opml, { headers: { "Content-Type": "text/x-opml; charset=utf-8" } });
};

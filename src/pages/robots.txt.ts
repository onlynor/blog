import type { APIRoute } from "astro";

const base = import.meta.env.BASE_URL.replace(/^\/|\/$/g, "");
const basePath = base ? `/${base}` : "";

const sitemapUrl = new URL(
	`${basePath}/sitemap-index.xml`,
	import.meta.env.SITE,
).href;

const robotsTxt = `
User-agent: *
${basePath ? `Disallow: ${basePath}/_astro/` : "Disallow: /_astro/"}

Sitemap: ${sitemapUrl}
`.trim();

export const GET: APIRoute = () => {
	return new Response(robotsTxt, {
		headers: {
			"Content-Type": "text/plain; charset=utf-8",
		},
	});
};

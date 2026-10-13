/**
 * robots.txt generado en build: la URL del sitemap sale de `site`
 * (SITE_URL en astro.config.mjs), así nunca apunta a un dominio viejo.
 */
import type { APIRoute } from "astro";

export const GET: APIRoute = ({ site }) => {
    const sitemapUrl = new URL("sitemap-index.xml", site).href;
    const body = ["User-agent: *", "Allow: /", "", `Sitemap: ${sitemapUrl}`, ""].join("\n");

    return new Response(body, {
        headers: { "Content-Type": "text/plain; charset=utf-8" }
    });
};

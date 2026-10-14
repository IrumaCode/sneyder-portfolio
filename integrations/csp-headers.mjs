/**
 * Integración de Astro: Content-Security-Policy con hashes de scripts inline.
 *
 * Al terminar el build recorre todo el HTML de dist/, calcula el SHA-256 de cada
 * <script> inline ejecutable (el JSON-LD se ignora: no es código) y sustituye el
 * marcador __CSP__ de dist/_headers por la política final. Así la CSP nunca necesita
 * 'unsafe-inline' para scripts y se mantiene sincronizada en cada build.
 */
import { createHash } from "node:crypto";
import { readdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const PLACEHOLDER = "__CSP__";
const INLINE_SCRIPT = /<script(?![^>]*\bsrc=)([^>]*)>([\s\S]*?)<\/script>/g;
const DATA_BLOCK = /type="application\/ld\+json"/;

// Cloudflare Web Analytics inyecta su beacon y envía las métricas a este dominio
const ANALYTICS_SCRIPT = "https://static.cloudflareinsights.com";
const ANALYTICS_ENDPOINT = "https://cloudflareinsights.com";

async function* htmlFiles(dir) {
    for (const entry of await readdir(dir, { withFileTypes: true })) {
        const fullPath = path.join(dir, entry.name);
        if (entry.isDirectory()) yield* htmlFiles(fullPath);
        else if (entry.name.endsWith(".html")) yield fullPath;
    }
}

function buildPolicy(scriptHashes) {
    return [
        "default-src 'self'",
        `script-src 'self' ${[...scriptHashes].join(" ")} ${ANALYTICS_SCRIPT}`,
        // style="" en el marcado y estilos que aplica GSAP: sin riesgo de ejecución de código
        "style-src 'self' 'unsafe-inline'",
        "img-src 'self' data:",
        // Vite incrusta como data: las variantes de fuente más pequeñas (sin riesgo de ejecución)
        "font-src 'self' data:",
        `connect-src 'self' ${ANALYTICS_ENDPOINT}`,
        "object-src 'none'",
        "base-uri 'self'",
        "form-action 'self'",
        "frame-ancestors 'none'",
        "upgrade-insecure-requests",
    ].join("; ");
}

export default function cspHeaders() {
    return {
        name: "csp-headers",
        hooks: {
            "astro:build:done": async ({ dir, logger }) => {
                const root = fileURLToPath(dir);
                const hashes = new Set();

                for await (const file of htmlFiles(root)) {
                    const html = await readFile(file, "utf8");
                    for (const [, attributes, code] of html.matchAll(INLINE_SCRIPT)) {
                        if (DATA_BLOCK.test(attributes)) continue;
                        const digest = createHash("sha256").update(code).digest("base64");
                        hashes.add(`'sha256-${digest}'`);
                    }
                }

                const headersPath = path.join(root, "_headers");
                const headers = await readFile(headersPath, "utf8");
                if (!headers.includes(PLACEHOLDER)) {
                    throw new Error(`[csp-headers] No se encontró ${PLACEHOLDER} en public/_headers`);
                }
                await writeFile(headersPath, headers.replace(PLACEHOLDER, buildPolicy(hashes)));
                logger.info(`CSP generada con ${hashes.size} hashes de scripts inline`);
            },
        },
    };
}

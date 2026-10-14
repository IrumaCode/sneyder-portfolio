/**
 * Genera los PDF del CV (public/cv/*.pdf) a partir de las páginas /cv/ y /en/cv/.
 *
 * Uso: pnpm cv:pdf   (hace el build, levanta `astro preview` e imprime en A4)
 * Usa el navegador instalado en el sistema (Edge o Chrome) vía playwright-core:
 *   CV_PDF_BROWSER=chrome pnpm cv:pdf   para forzar Chrome (por defecto: msedge en Windows, chrome en el resto).
 */
import { spawn } from "node:child_process";
import { mkdir } from "node:fs/promises";
import { chromium } from "playwright-core";

const PORT = 4329;
const HOST = "127.0.0.1"; // IPv4 explícito: fetch("localhost") puede resolver a ::1
const BASE_URL = `http://${HOST}:${PORT}`;
const OUTPUT_DIR = new URL("../public/cv/", import.meta.url);
const BROWSER_CHANNEL = process.env.CV_PDF_BROWSER ?? (process.platform === "win32" ? "msedge" : "chrome");

const targets = [
    { lang: "es", path: "/cv/", file: "sneyder-leguia-arrieta-cv-es.pdf" },
    { lang: "en", path: "/en/cv/", file: "sneyder-leguia-arrieta-cv-en.pdf" },
];

async function waitForServer(url, timeoutMs = 30_000) {
    const start = Date.now();
    while (Date.now() - start < timeoutMs) {
        try {
            const response = await fetch(url);
            if (response.ok) return;
        } catch {
            // el servidor todavía no responde
        }
        await new Promise((resolve) => setTimeout(resolve, 300));
    }
    throw new Error(`El servidor de preview no respondió en ${url}`);
}

const preview = spawn("pnpm", ["astro", "preview", "--host", HOST, "--port", String(PORT)], {
    shell: true,
    stdio: "ignore",
});

try {
    await waitForServer(BASE_URL);
    await mkdir(OUTPUT_DIR, { recursive: true });

    const browser = await chromium.launch({ channel: BROWSER_CHANNEL });
    for (const { lang, path, file } of targets) {
        const context = await browser.newContext();
        // Tema claro e idioma de la ruta: el PDF siempre sale igual
        await context.addInitScript((language) => {
            localStorage.setItem("preferred-theme", "classroom");
            localStorage.setItem("preferred-lang", language);
        }, lang);
        const page = await context.newPage();
        await page.goto(BASE_URL + path, { waitUntil: "networkidle" });
        await page.evaluate(() => document.fonts.ready);
        await page.pdf({
            path: new URL(file, OUTPUT_DIR).pathname.replace(/^\/([A-Za-z]:)/, "$1"),
            format: "A4",
            printBackground: true,
            preferCSSPageSize: true,
        });
        console.log(`✓ ${file}`);
        await context.close();
    }
    await browser.close();
} finally {
    // En Windows el proceso hijo vive bajo un shell: se termina el árbol completo
    if (process.platform === "win32") {
        spawn("taskkill", ["/pid", String(preview.pid), "/t", "/f"], { stdio: "ignore" });
    } else {
        preview.kill();
    }
}

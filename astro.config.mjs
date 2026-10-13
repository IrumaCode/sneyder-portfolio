// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import sitemap from '@astrojs/sitemap';

import icon from 'astro-icon';

// URL pública del sitio: la usan canonical, Open Graph y el sitemap.
// Defínela en el entorno de despliegue (SITE_URL=https://tu-dominio.com).
const SITE_URL = process.env.SITE_URL ?? 'https://irumacode.github.io';

// https://astro.build/config
export default defineConfig({
  site: SITE_URL,

  // Español en la raíz (/) e inglés en /en/
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en'],
    routing: { prefixDefaultLocale: false }
  },

  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [
    sitemap({
      // Añade <xhtml:link hreflang> entre / y /en/
      i18n: { defaultLocale: 'es', locales: { es: 'es', en: 'en' } }
    }),
    icon()
  ]
});

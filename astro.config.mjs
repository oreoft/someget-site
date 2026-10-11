import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://www.someget.xyz',
  server: { port: 4321 },
  devToolbar: { enabled: false },
  integrations: [
    sitemap({
      i18n: { defaultLocale: 'zh', locales: { zh: 'zh-CN', en: 'en' } },
    }),
  ],
});

import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { movedLandingPaths } from './src/products.js';

// 搬到自己官网的产品，本站保留的落地页不进站点地图
const moved = movedLandingPaths.flatMap((id) => [`/${id}/`, `/en/${id}/`]);

export default defineConfig({
  site: 'https://www.someget.xyz',
  server: { port: 4321 },
  devToolbar: { enabled: false },
  integrations: [
    sitemap({
      filter: (page) => !moved.some((p) => new URL(page).pathname === p),
      i18n: { defaultLocale: 'zh', locales: { zh: 'zh-CN', en: 'en' } },
    }),
  ],
});

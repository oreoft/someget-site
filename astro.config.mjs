import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://someget.xyz',
  server: { port: 4321 },
  devToolbar: { enabled: false },
});

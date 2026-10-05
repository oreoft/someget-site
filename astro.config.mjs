import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://www.someget.xyz',
  server: { port: 4321 },
  devToolbar: { enabled: false },
});

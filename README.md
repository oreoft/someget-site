# someget-site

someget 的官网（`someget.xyz`）和各产品落地页（`xxx.someget.xyz`）。Astro 静态站，npm workspaces。

## 结构

| 目录 | 域名 | 内容 |
|---|---|---|
| `apps/home` | `someget.xyz` | 官网，陈列全部产品 |
| `apps/loopback` | `loopback.someget.xyz` | Loopback 落地页 + 隐私政策 + 支持页 |
| `apps/muninn` | `muninn.someget.xyz` | Muninn 落地页 + 隐私政策 + 支持页 |
| `apps/instash` | `instash.someget.xyz` | InStash 落地页 + 隐私政策 + 支持页 |
| `packages/ui` | — | 共用的设计规范（`styles.css`）、产品清单（`products.js`）、页头页脚、落地页骨架、手机外框 |

有自己官网的产品（如 overLc）不在这里，只在 `products.js` 里登记，官网外链过去。

## 新增一个产品

1. `packages/ui/products.js` 加一条
2. 复制 `apps/loopback` 为 `apps/<id>`，改 `package.json` 的 `name`、`astro.config.mjs` 的 `site` 和端口、`index.astro` 里的 `id`，换 `public/icon.png`
3. 官网图标放到 `apps/home/public/icons/<id>.png`

## 本地开发

```bash
npm install
npm run dev            # 官网 http://localhost:4321
npm run dev:loopback   # 落地页 http://localhost:4322
npm run build          # 构建全部
```

## 部署

每个 `apps/*` 在 Vercel 上是一个独立项目，Root Directory 填对应目录，绑各自的域名；DNS 在 Cloudflare，灰云 CNAME 到 Vercel。

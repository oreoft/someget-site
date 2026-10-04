# someget-site

someget 的官网（`someget.xyz`）和各产品落地页（`xxx.someget.xyz`）。Astro 静态站，npm workspaces。

## 结构

| 目录 | 域名 | 内容 |
|---|---|---|
| `apps/home` | `someget.xyz` | 官网，陈列全部产品 |
| `apps/loopback` | `loopback.someget.xyz` | Loopback 落地页 + 隐私政策 + 支持页 |
| `apps/muninn` | `muninn.someget.xyz` | Muninn 落地页 + 隐私政策 + 支持页 |
| `apps/instash` | `instash.someget.xyz` | InStash 落地页 + 隐私政策 + 支持页 |
| `packages/ui` | — | 共用部分：设计规范 `styles.css`、产品清单 `products.js`、界面文字 `i18n.js`、各产品文案 `content/<id>.js`（介绍、功能、常见问题、隐私政策）、页面组件 `components/`、手机演示 `demos/` |

有自己官网的产品（如 overLc）不在这里，只在 `products.js` 里登记，官网外链过去。

## 中英文

中文在根路径（`/`、`/privacy`），英文在 `/en/` 下。中文页在浏览器语言不是中文、且用户没手动切换过时，会自动跳到英文。改文案只改 `packages/ui/content/<id>.js` 和 `products.js`，两种语言写在一起。

## 新增一个产品

1. `packages/ui/products.js` 加一条
2. 在 `packages/ui/content/<id>.js` 写文案，在 `packages/ui/demos/` 写手机演示，并在 `ProductLanding`、`ProductPrivacy`、`ProductSupport` 里登记
3. 复制 `apps/loopback` 为 `apps/<id>`，改 `package.json` 的 `name`、`astro.config.mjs` 的 `site` 和端口、页面里的 `id` 和演示组件，换 `public/icon.png`
4. 官网图标放到 `apps/home/public/icons/<id>.png`

## 本地开发

```bash
npm install
npm run dev            # 官网 http://localhost:4321
npm run dev:loopback   # 落地页 http://localhost:4322
npm run build          # 构建全部
```

## 部署

每个 `apps/*` 在 Vercel 上是一个独立项目，Root Directory 填对应目录，绑各自的域名；DNS 在 Cloudflare，灰云 CNAME 到 Vercel。

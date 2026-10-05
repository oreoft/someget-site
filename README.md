# someget-site

someget 的官网 `www.someget.xyz`（根域名 `someget.xyz` 308 跳转到 www），以及没有网页版的产品的落地页。Astro 静态站，部署为一个站点。

## 产品网址规则

1. 官网：`someget.xyz`
2. 有网页版的产品：独立子域名，如 `overlc.someget.xyz`，不在本仓库，官网外链过去
3. 没有网页版的产品：落地页在本站 `someget.xyz/<产品>`，如 `someget.xyz/loopback`，附带 `/privacy` 和 `/support`
4. 产品以后有了网页版，就迁出去改用子域名，本站的 `/<产品>` 跳转过去

## 结构

| 路径 | 内容 |
|---|---|
| `src/pages/` | 页面路由：首页、`[product]/`（落地页、隐私政策、支持页），`en/` 下是英文版 |
| `src/products.js` | 产品清单，首页列表和落地页共用 |
| `src/content/<id>.js` | 各产品的中英文案：介绍、功能、常见问题、隐私政策 |
| `src/components/` | 页头页脚、首页、落地页骨架、隐私和支持页、手机外框 |
| `src/demos/` | 各产品的可点击手机演示 |
| `src/i18n.js` | 导航、按钮等界面文字 |
| `src/styles.css` | 共用设计规范（颜色、字体、按钮） |
| `public/icons/` | 产品图标 |

## 设计约定

- 按钮：站内跳转（了解更多、常见问题）用描边按钮 `.pill`；离开本站去拿产品（App Store 下载、产品官网）用橙色实心 `.pill pill--accent`，一眼区分
- 宽屏（≥1280px）时内容放在 1200 宽的「纸」上，外圈稍深底色

## 中英文

中文在根路径（`/loopback`），英文在 `/en/` 下（`/en/loopback`）。中文页在浏览器语言不是中文、且用户没手动切换过时，会自动跳到英文。

## 新增一个没有网页版的产品

1. `src/products.js` 加一条（不写 `website`）
2. `src/content/<id>.js` 写文案，`src/demos/` 写演示，在 `ProductLanding`、`ProductPrivacy`、`ProductSupport` 里登记
3. 图标放到 `public/icons/<id>.png`

页面路由会自动生成，不用新建页面文件。

## 本地开发

```bash
npm install
npm run dev     # http://localhost:4321
npm run build
```

## 许可

代码以 MIT 协议开源，见 `LICENSE`。产品名称、图标、文案和截图等品牌素材保留所有权利，不在 MIT 授权范围内。

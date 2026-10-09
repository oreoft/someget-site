// 产品清单：官网列表和各落地页共用。新增产品在这里加一条。
// 有自己网页版的产品（website: true）用独立子域名，官网直接外链过去；
// 没有网页版的产品，落地页就在本站 someget.xyz/<id>。以后有了网页版再迁出去。
export const products = [
  {
    id: 'loopback',
    tint: '#1B3F6B',
    name: 'Loopback',
    platforms: ['iOS'],
    storeUrl: 'https://apps.apple.com/app/id6757280702',
    zh: {
      tagline: '在手机上打开内网里的服务。',
      summary: '通过 Tailscale 或 SSH 隧道，在 iPhone 上直接打开 NAS、服务器面板这些只在内网能访问的网页。',
    },
    en: {
      tagline: 'Your private network, one tap away.',
      summary: 'Open the NAS dashboard, server panels and dev builds that only live on your private network, right on your iPhone, over Tailscale or an SSH tunnel.',
    },
  },
  {
    id: 'muninn',
    tint: '#8C7EE0',
    name: 'Muninn',
    platforms: ['iOS', 'Android'],
    storeUrl: 'https://apps.apple.com/app/id6757280892',
    // 安卓安装包：页面打开时读 androidLatest（发版脚本 --promote 写的 latest.json）里的下载地址，
    // 读不到才用 androidUrl 这个写死的版本链接。所以发安卓新版不用改这里
    androidUrl: 'https://asset-download.someget.xyz/muninn/android/Muninn-2.0.apk',
    androidLatest: 'https://asset-download.someget.xyz/muninn/android/latest.json',
    zh: {
      tagline: '看过的，都留得住。',
      summary: '粘贴一条链接，Muninn 把推文、视频、帖子的正文和图片取回来，存进你自己的收藏库，随时搜得到。',
    },
    en: {
      tagline: "Keep everything you've seen.",
      summary: 'Paste a link and Muninn fetches the text and images behind it, from posts, threads and videos, into a library you can search any time.',
    },
  },
  {
    id: 'instash',
    tint: '#F1D28B',
    name: 'InStash',
    platforms: ['macOS', 'iOS'],
    storeUrl: 'https://apps.apple.com/app/id6757969574',
    zh: {
      tagline: '灵感即刻暂存，多端无缝同步。',
      summary: '像系统便签一样贴在 Mac 桌面上，看见就是提醒；再加上 iCloud 同步和收纳便签的吸附坞。',
    },
    en: {
      tagline: 'Your ideas, instantly stashed, synced everywhere.',
      summary: 'Sticky notes that live on your Mac desktop, where seeing is remembering, plus iCloud sync and an edge deck to tuck them away.',
    },
  },
  {
    id: 'overlc',
    tint: '#41B146',
    name: 'overLc',
    platforms: ['Web'],
    url: 'https://overlc.someget.xyz',
    website: true,
    zh: {
      tagline: '刷过的 LeetCode，不再忘。',
      summary: '做完一道题打个卡，overLc 按遗忘曲线安排之后的复习日期，每天告诉你该回顾哪几道。',
    },
    en: {
      tagline: 'LeetCode problems you solve, stay solved.',
      summary: 'Check in after solving a problem and overLc schedules your reviews along the forgetting curve, so each day you know exactly what to revisit.',
    },
  },
];

export const contactEmail = 'hello@someget.xyz';

export function getProduct(id) {
  const p = products.find((x) => x.id === id);
  if (!p) throw new Error(`products.js 里没有 ${id}`);
  return p;
}

// 在本站有落地页的产品（没有自己网页版的）
export const landingProducts = products.filter((p) => !p.website);

// 产品清单：官网列表和各落地页共用。新增产品在这里加一条。
// 有自己网页版的产品（website: true）用独立子域名，官网直接外链过去；
// 没有网页版的产品，落地页就在本站 someget.xyz/<id>。以后有了网页版再迁出去。
// darkIcon: 有深色版图标 /icons/<id>-dark.png，黑暗模式下换上
export const products = [
  {
    id: 'tlbox',
    tint: '#1F7A5A',
    name: 'tlbox',
    platforms: ['Web', 'Windows'],
    url: 'https://tlbox.someget.xyz',
    website: true,
    zh: {
      tagline: '让 AI 住进你常用的聊天。',
      summary: '把一个懂上下文、能干活的 AI 助手接进微信、QQ、飞书、Slack，群里 @ 它、私聊找它都行；Claude、Codex 这些 Agent 也能用命令行替你管好它。',
    },
    en: {
      tagline: 'An AI assistant that lives in your chats.',
      summary: 'Bring a context-aware AI assistant that gets things done into WeChat, QQ, Feishu and Slack. Mention it in a group or message it directly, and let agents like Claude and Codex manage it from the command line.',
    },
  },
  {
    id: 'herdsman',
    tint: '#24345E',
    name: 'Herdsman',
    platforms: ['macOS', 'Windows', 'iOS', 'Android'],
    darkIcon: true,
    // 演示自带「小电脑 + 小手机」外框，落地页不再套 MacFrame / PhoneFrame
    ownFrame: true,
    // 每端一个下载按钮；url 留空显示「即将推出」。Mac / Windows / 安卓走官网安装包，iPhone 走 App Store
    downloads: [
      { icon: 'apple', zh: 'Mac 版', en: 'Mac', url: '' },
      { icon: 'windows', zh: 'Windows 版', en: 'Windows', url: '' },
      { icon: 'apple', zh: 'iPhone 版', en: 'iPhone', url: '' },
      { icon: 'android', zh: '安卓版', en: 'Android', url: '' },
    ],
    zh: {
      storeName: 'Herdsman：herdr 图形客户端',
      tagline: '你的 agent，一眼看全。',
      summary: 'herdr 的原生图形客户端：Claude Code、Codex、pi 的对话在 Mac、Windows、iPhone、安卓上直接看、直接答；手机扫码就连上，还能远程看屏、接管电脑。',
    },
    en: {
      storeName: 'Herdsman: GUI for herdr',
      tagline: 'All your agents, at a glance.',
      summary: 'The native GUI client for herdr. Follow and answer Claude Code, Codex and pi from your Mac, Windows PC, iPhone or Android. Scan to pair, then view and control your computer from your phone.',
    },
  },
  {
    id: 'raiju',
    tint: '#FF6A13',
    name: 'Raiju',
    platforms: ['macOS'],
    darkIcon: true,
    // 官网下载版（Developer ID），还没发布：没有 storeUrl，下载按钮显示「即将推出」。发布后填 downloadUrl
    comingSoon: true,
    zh: {
      tagline: '画一笔，就办到。',
      summary: '原生 Apple 芯片的鼠标手势工具：按住右键画一道轨迹，松开就执行对应的快捷键。兼容 WGestures 配置，一键迁移。',
    },
    en: {
      tagline: 'One stroke, done.',
      summary: 'A mouse gesture tool native to Apple silicon: hold the right button, draw a stroke, and let go to fire its shortcut. Works with your WGestures settings, moved over in one click.',
    },
  },
  {
    id: 'fastzz',
    tint: '#3A6FE0',
    name: 'FastZZ',
    platforms: ['macOS'],
    storeUrl: 'https://apps.apple.com/app/id6757905553',
    zh: {
      storeName: 'FastZZ：离线语音转文字',
      tagline: '说出来，就写下。',
      summary: '在 Mac 上实时把说的话转成文字，带标点，还能顺手翻译。识别和翻译全在本机完成，不用联网，声音不离开你的 Mac。',
    },
    en: {
      storeName: 'FastZZ: Offline Speech to Text',
      tagline: 'Speak it, see it written.',
      summary: 'Turn speech into text in real time on your Mac, with punctuation and translation along the way. Recognition and translation run entirely on-device, offline. Your voice stays on your Mac.',
    },
  },
  {
    id: 'blink',
    darkIcon: true,
    tint: '#F0832E',
    name: 'Blink',
    platforms: ['macOS'],
    // 还没上架：下载按钮显示「即将推出」。上架后去掉 comingSoon，把 storeUrl 换成真实的 App Store 链接
    comingSoon: true,
    storeUrl: 'https://apps.apple.com/app/id0000000000',
    zh: {
      tagline: '一键直达你的应用。',
      summary: '给常用的应用绑定全局快捷键，按一下打开或切到它，再按一下隐藏。',
    },
    en: {
      tagline: 'Your apps, one keystroke away.',
      summary: 'Give each app you use a global shortcut. Press it once to open or switch to the app, press it again to hide it.',
    },
  },
  {
    id: 'loopback',
    darkIcon: true,
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
    darkIcon: true,
    tint: '#8C7EE0',
    name: 'Muninn',
    platforms: ['iOS', 'Android', 'Web'],
    storeUrl: 'https://apps.apple.com/app/id6757280892',
    // 安卓安装包：页面打开时读 androidLatest（发版脚本 --promote 写的 latest.json）里的下载地址，
    // 读不到才用 androidUrl 这个写死的版本链接。所以发安卓新版不用改这里
    androidUrl: 'https://asset-download.someget.xyz/muninn/android/Muninn-2.0-9.apk',
    androidLatest: 'https://asset-download.someget.xyz/muninn/android/latest.json',
    // 2026-10 起有了自己的网页版和官网：入口和搜索引擎都指过去。本站的 /muninn 落地页保留（老链接还能打开），
    // 但规范网址指向新站、不进站点地图；/muninn/privacy、/muninn/support 照常（App Store 填的是这两个地址）
    url: 'https://muninn.someget.xyz',
    urlEn: 'https://muninn.someget.xyz/en',
    website: true,
    keepLanding: true,
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

// 在本站有落地页的产品（没有自己网页版的，加上迁出去但保留老落地页的）
export const landingProducts = products.filter((p) => !p.website || p.keepLanding);

// 已经迁到自己官网、本站只是保留的落地页路径（不进站点地图）
export const movedLandingPaths = products.filter((p) => p.website && p.keepLanding).map((p) => p.id);

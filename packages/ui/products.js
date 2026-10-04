// 产品清单：官网列表和各落地页共用。新增产品在这里加一条。
// website 有值的产品（有自己的官网）在根站直接外链过去，不做落地页。
export const products = [
  {
    id: 'loopback',
    name: 'Loopback',
    platforms: ['iOS'],
    tagline: '在手机上打开家里的服务。',
    summary: '通过 SSH 隧道或 Tailscale，在 iPhone 上直接访问内网网页服务。',
    url: 'https://loopback.someget.xyz',
  },
  {
    id: 'muninn',
    name: 'Muninn',
    platforms: ['iOS'],
    tagline: '收藏一切，稍后再读。',
    summary: '各个 App 里看到的文章、帖子、链接都收进一个地方，小组件提醒你回来读。',
    url: 'https://muninn.someget.xyz',
  },
  {
    id: 'instash',
    name: 'InStash',
    platforms: ['macOS', 'iOS'],
    tagline: '浮在桌面上的便签。',
    summary: '随手记下的东西贴在屏幕上，不被窗口盖住，iCloud 在 Mac 和 iPhone 间同步。',
    url: 'https://instash.someget.xyz',
  },
  {
    id: 'overlc',
    name: 'overLc',
    platforms: ['Web'],
    tagline: '[一句话定位，待确认]',
    summary: '围绕 LeetCode 的刷题记录工具。[具体介绍待补充]',
    url: 'https://overlc.someget.xyz',
    website: true,
  },
];

export const contactEmail = '[联系邮箱]';

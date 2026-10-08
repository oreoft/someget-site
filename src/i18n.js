// 站点界面文字（导航、按钮、页脚）的中英文。产品自己的文案在 content/ 和 products.js。
// 中文是默认语言，路径不带前缀；英文在 /en/ 下。
export const langs = ['zh', 'en'];

export const ui = {
  zh: {
    htmlLang: 'zh-CN',
    products: '产品',
    contact: '联系',
    privacy: '隐私政策',
    terms: '服务条款',
    support: '支持',
    switchLabel: 'English',
    learnMore: '了解更多 →',
    visitSite: '访问官网 ↗',
    download: '在 App Store 下载',
    downloadMac: '在 Mac App Store 下载',
    androidAsk: '用安卓手机？',
    getApk: '下载 APK',
    sectionIntro: '它能做什么',
    sectionDemo: '点一点试试',
    sectionDownload: '下载',
    demoHint: '这是一个模拟演示，数据都是假的。',
    updated: '最后更新',
    faq: '常见问题',
    stillNeedHelp: '没找到答案？',
    mailUs: '发邮件给我们',
    mailNote: '通常 1～2 个工作日内回复。',
    back: '返回',
    contactTitle: '有问题，或者只是想打个招呼？',
    helpTitle: '用 {name} 遇到问题？',
    contactSub: '发邮件给我们，通常 1～2 个工作日内回复。',
    copyEmail: '复制邮箱',
    copied: '已复制',
    allProducts: '全部产品',
  },
  en: {
    htmlLang: 'en',
    products: 'Products',
    contact: 'Contact',
    privacy: 'Privacy',
    terms: 'Terms',
    support: 'Support',
    switchLabel: '中文',
    learnMore: 'Learn more →',
    visitSite: 'Visit site ↗',
    download: 'Download on the App Store',
    downloadMac: 'Download on the Mac App Store',
    androidAsk: 'On Android?',
    getApk: 'Get the APK',
    sectionIntro: 'What it does',
    sectionDemo: 'Try it',
    sectionDownload: 'Download',
    demoHint: 'This is a simulated demo with sample data.',
    updated: 'Last updated',
    faq: 'FAQ',
    stillNeedHelp: 'Still need help?',
    mailUs: 'Email us',
    mailNote: 'We usually reply within one or two business days.',
    back: 'Back',
    contactTitle: 'Questions, or just want to say hi?',
    helpTitle: 'Need help with {name}?',
    contactSub: 'Email us. We usually reply within one or two business days.',
    copyEmail: 'Copy email',
    copied: 'Copied',
    allProducts: 'All products',
  },
};

// 把站内路径换成对应语言的路径：localize('en', '/privacy') → '/en/privacy'
export function localize(lang, path = '/') {
  if (lang !== 'en') return path;
  return path === '/' ? '/en/' : `/en${path}`;
}


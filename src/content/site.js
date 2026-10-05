// 站点级的隐私政策和服务条款：覆盖 someget 账号（各产品共用的登录）和本网站。
// 各产品自己保存的内容写在各产品的隐私政策里（content/<id>.js）。
import { contactEmail } from '../products.js';

export default {
  zh: {
    privacy: {
      updated: '2026-10-05',
      intro:
        'someget 的产品使用同一套登录服务。本页说明你登录 someget 的产品时，我们收集哪些信息、怎么使用、以及如何删除。各产品自己保存的内容，见该产品的隐私政策。',
      sections: [
        {
          h: '我们收集的信息',
          p: [
            '你通过 Apple、Google 或 GitHub 登录时，我们会获得该平台提供的账号标识、名字、邮箱和头像。我们不会获得你在这些平台的密码。',
            '你用邮箱登录时，我们保存你的邮箱；如果设置了密码，只保存它经过单向哈希后的结果，不保存密码本身。',
            '为了让你保持登录、保护账号安全，我们会记录登录会话的时间、IP 地址和设备或浏览器信息。',
          ],
        },
        {
          h: '我们怎么使用',
          p: [
            '这些信息只用于让你登录、在产品里识别你、给你发送验证码邮件，以及发现和阻止针对账号的异常尝试。',
          ],
        },
        {
          h: '每个产品的账号相互独立',
          p: ['你在不同产品里的账号是分开的。一个产品里的账号信息，不会提供给另一个产品使用。'],
        },
        {
          h: '我们不做的事',
          p: ['我们不出售你的信息，不用于广告，也不追踪你在其他网站或 App 上的行为。'],
        },
        {
          h: '第三方服务',
          p: [
            '你选择用 Apple、Google 或 GitHub 登录时，登录过程由对应平台处理，并适用它们各自的隐私政策。',
            '我们会借助云服务商来运行服务和保存数据，他们只按我们的要求处理这些数据，不会用于其他用途。',
          ],
        },
        {
          h: '保留与删除',
          p: [
            `你的账号信息会一直保留，直到你要求删除。需要删除账号，或想了解我们保存了你的哪些信息，请发邮件到 ${contactEmail}。登录会话到期后会自动失效。`,
          ],
        },
        {
          h: '政策更新',
          p: ['如果这份政策有变化，我们会更新本页和上面的日期。'],
        },
      ],
    },
    terms: {
      updated: '2026-10-05',
      intro: '这些条款适用于 someget 的网站、各产品，以及 someget 账号。使用它们即表示你同意这些条款。',
      sections: [
        {
          h: '你的账号',
          p: [
            '请使用真实、属于你自己的邮箱或第三方账号登录，并妥善保管你的登录方式。通过你的账号进行的操作视为你本人的操作。',
          ],
        },
        {
          h: '合理使用',
          p: [
            '请不要批量注册账号、尝试访问他人账号、干扰或攻击我们的服务，也不要用我们的产品做违法的事。违反这些要求时，我们可以暂停或关闭相关账号。',
          ],
        },
        {
          h: '产品与付费',
          p: [
            '各产品可能有自己的补充说明。通过 App Store 购买的订阅，由 Apple 按其条款处理付款、续订和退款。',
          ],
        },
        {
          h: '服务的变化',
          p: ['我们会持续改进产品，可能调整、新增或停止部分功能。'],
        },
        {
          h: '责任',
          p: ['我们会尽力让服务稳定可靠。在法律允许的范围内，服务按现有状态提供。'],
        },
        {
          h: '条款更新与联系',
          p: [`条款有变化时，我们会更新本页和上面的日期。有任何问题，请发邮件到 ${contactEmail}。`],
        },
      ],
    },
  },
  en: {
    privacy: {
      updated: '2026-10-05',
      intro:
        'someget products share one sign-in service. This page explains what we collect when you sign in to a someget product, how we use it, and how to delete it. For what each product stores, see that product’s privacy policy.',
      sections: [
        {
          h: 'What we collect',
          p: [
            'When you sign in with Apple, Google or GitHub, we receive the account identifier, name, email address and profile picture the provider shares. We never receive your password for those services.',
            'When you sign in with email, we store your email address. If you set a password, we keep only a one-way hash of it, never the password itself.',
            'To keep you signed in and protect your account, we record when each session started, its IP address and device or browser details.',
          ],
        },
        {
          h: 'How we use it',
          p: [
            'We use this information only to sign you in, recognize you inside our products, email you verification codes, and detect and stop suspicious attempts on your account.',
          ],
        },
        {
          h: 'Each product has its own accounts',
          p: ['Your accounts in different products are separate. Account information from one product is never made available to another.'],
        },
        {
          h: 'What we do not do',
          p: ['We never sell your information, use it for advertising, or track you across other websites or apps.'],
        },
        {
          h: 'Third-party services',
          p: [
            'When you choose to sign in with Apple, Google or GitHub, that provider handles its part of the sign-in under its own privacy policy.',
            'We rely on cloud providers to run our services and store data. They process it only on our instructions and for no other purpose.',
          ],
        },
        {
          h: 'Retention and deletion',
          p: [
            `We keep your account information until you ask us to delete it. To delete your account, or to learn what we hold about you, email ${contactEmail}. Sign-in sessions expire on their own.`,
          ],
        },
        {
          h: 'Changes',
          p: ['If this policy changes, we will update this page and the date above.'],
        },
      ],
    },
    terms: {
      updated: '2026-10-05',
      intro: 'These terms cover the someget website, our products and your someget account. By using them you agree to these terms.',
      sections: [
        {
          h: 'Your account',
          p: [
            'Sign in with an email address or third-party account that is yours, and keep your sign-in methods safe. Actions taken through your account are treated as yours.',
          ],
        },
        {
          h: 'Fair use',
          p: [
            'Do not create accounts in bulk, try to access other people’s accounts, interfere with or attack our services, or use our products for anything unlawful. We may suspend or close accounts that do.',
          ],
        },
        {
          h: 'Products and payments',
          p: [
            'Some products have additional notes of their own. Subscriptions bought through the App Store are billed, renewed and refunded by Apple under its terms.',
          ],
        },
        {
          h: 'Changes to the service',
          p: ['We keep improving our products and may change, add or retire features.'],
        },
        {
          h: 'Liability',
          p: ['We work to keep our services reliable. To the extent the law allows, they are provided as they are.'],
        },
        {
          h: 'Updates and contact',
          p: [`If these terms change, we will update this page and the date above. Questions? Email ${contactEmail}.`],
        },
      ],
    },
  },
};

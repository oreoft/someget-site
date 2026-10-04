export default {
  zh: {
    heroTitle: '看过的，\n都留得住。',
    heroSub:
      '刷到一条好推文、一个好视频、一篇小红书笔记，想着回头再看，结果再也找不到了。Muninn 帮你把它们取回来存好：正文、作者、图片和视频都在，按平台和标签整理，随时搜得到。',
    features: [
      {
        title: '粘贴就能存',
        desc: '复制链接后打开 Muninn，它会主动问你要不要存；也可以点 + 粘贴链接，或者直接写一段文字存成笔记。',
      },
      {
        title: '内容取回来',
        desc: '支持 X（Twitter）、Instagram、YouTube、TikTok、Reddit、微博、小红书等平台，把正文、作者、图片和视频取回来，原帖删了你这里还在。',
      },
      {
        title: '快捷指令一键存',
        desc: '用「Quick Mun」「Tag Mun」快捷指令，在任何 App 里一键保存，灵动岛上能看到保存进度。',
      },
      {
        title: '标签与搜索',
        desc: '自定义标签名和颜色，按平台和标签筛选；搜索在本机完成，打开就能找。',
      },
      {
        title: '随手写低语',
        desc: '给每条收藏写几句自己的想法，下次回来一眼想起当时为什么存它。',
      },
      {
        title: '收藏属于你',
        desc: '支持从文本文件批量导入链接，也能一键导出全部链接，随时带走。',
      },
    ],
    demoTitle: '粘贴，取回，再找到',
    demoDesc: '粘贴一条链接，看 Muninn 把内容取回来，再打开它写一句低语。',
    demoSteps: ['点 + 粘贴链接', '取回内容', '打开收藏', '写一句低语'],
    faq: [
      {
        q: '用 Muninn 需要注册吗？',
        a: '需要一个账号来同步你的收藏，可以用 Apple、Google 或 GitHub 一键登录，不用另设密码。',
      },
      {
        q: '免费版有什么限制？',
        a: '存多少条都不限。把链接解析成正文和图片会消耗服务器资源，所以免费版每小时、每天的解析次数有上限；订阅 Pro 或 Ultra 可以提高或取消上限。',
      },
      {
        q: '某条链接解析失败怎么办？',
        a: '在列表里长按这条收藏，选「重新衔回」。有些平台的内容需要登录才能看，可能无法解析，这时 Muninn 会保留原始链接。',
      },
      {
        q: '怎么管理或取消订阅？',
        a: '订阅由 Apple 管理：打开 iPhone「设置」→ 你的名字 →「订阅」，选择 Muninn 即可修改或取消。',
      },
      {
        q: '怎么删除账号和数据？',
        a: '在 App 的「设置」里选择「删除账户」。如果你希望我们确认服务器上的收藏也已全部清除，请发邮件给我们。',
      },
    ],
    privacy: {
      updated: '2026-10-04',
      intro:
        'Muninn 由 someget 开发。为了在你的设备之间同步收藏、并把链接解析成内容，Muninn 需要在服务器上保存你的部分数据。本页说明保存了什么、为什么、以及你如何删除。',
      sections: [
        {
          h: '账号信息',
          p: ['你通过 Apple、Google 或 GitHub 登录时，我们会获得用于识别你的账号标识和邮箱（如果该平台提供）。我们不会获得你在这些平台的密码。'],
        },
        {
          h: '你保存的内容',
          p: [
            '你提交的链接和文字、从链接解析出的正文、作者、图片和视频地址，以及你添加的标签和低语（笔记），会保存在我们的服务器上，用于在你的设备之间同步。',
          ],
        },
        {
          h: '使用与订阅记录',
          p: [
            '为了执行免费额度，我们会记录你的解析次数。如果你订阅，我们会保存订阅状态和 Apple 提供的交易编号，用于确认会员权益。付款由 Apple 处理，我们拿不到你的支付信息。',
            '你在 App 里提交的反馈会和你的账号一起保存，方便我们回复。',
          ],
        },
        {
          h: '我们不做的事',
          p: ['Muninn 没有接入广告、统计分析或崩溃上报工具，不追踪你在其他 App 或网站上的行为，也不出售你的数据。'],
        },
        {
          h: '第三方服务',
          p: [
            '我们使用以下服务来运行 Muninn：Supabase（账号与数据库）、Google Cloud（服务器）、Upstash（任务队列），以及一个第三方内容解析服务，它会收到你提交的链接以便取回内容。这些服务只为运行 Muninn 处理数据。',
          ],
        },
        {
          h: '删除你的数据',
          p: [
            '你可以随时在「设置」里删除账户，App 会同时清除本机数据。如需确认服务器上的收藏、标签和笔记也已全部删除，请发邮件至 hello@someget.xyz，我们会处理并回复你。',
          ],
        },
        {
          h: '儿童隐私',
          p: ['Muninn 不面向 13 岁以下儿童。如果你认为有儿童向我们提供了个人信息，请联系我们删除。'],
        },
        {
          h: '政策变更与联系',
          p: ['如果本政策有变化，我们会更新本页面和上方的日期。有任何问题，请发邮件至 hello@someget.xyz。'],
        },
      ],
    },
  },
  en: {
    heroTitle: "Keep everything\nyou've seen.",
    heroSub:
      'You find a great thread, a great video, a great post, and save it for later. Then it is gone. Muninn fetches it for you: the text, author, images and video, organized by platform and tag, and always searchable.',
    features: [
      {
        title: 'Paste to save',
        desc: 'Copy a link and open Muninn: it offers to save it. Or tap + to paste a link, or write a few lines to save as a note.',
      },
      {
        title: 'Fetches the content',
        desc: 'Works with X (Twitter), Instagram, YouTube, TikTok, Reddit, Weibo, Xiaohongshu and more. The text, author, images and video come back with it, so it stays even if the original is gone.',
      },
      {
        title: 'One-tap Shortcuts',
        desc: 'Use the Quick Mun and Tag Mun shortcuts to save from any app, with progress shown in the Dynamic Island.',
      },
      {
        title: 'Tags and search',
        desc: 'Name and color your own tags, and filter by platform or tag. Search runs on your device, so results show up instantly.',
      },
      {
        title: 'Whispers',
        desc: 'Add a few words to any saved item, so you remember why you kept it.',
      },
      {
        title: 'Yours to keep',
        desc: 'Import links in bulk from a text file, and export all your links whenever you want.',
      },
    ],
    demoTitle: 'Paste, fetch, find it again',
    demoDesc: 'Paste a link, watch Muninn fetch the content, then open it and add a whisper.',
    demoSteps: ['Tap + and paste', 'Fetch the content', 'Open the leaf', 'Add a whisper'],
    faq: [
      {
        q: 'Do I need an account?',
        a: 'Yes, to sync your library. Sign in with Apple, Google or GitHub; no new password needed.',
      },
      {
        q: 'What are the limits on the free plan?',
        a: 'You can save as much as you like. Turning links into text and images costs server time, so the free plan has hourly and daily fetch limits. Pro and Ultra raise or remove them.',
      },
      {
        q: 'A link failed to fetch. What now?',
        a: 'Long-press the item and choose Refetch. Some content needs a login to view and cannot be fetched; Muninn keeps the original link in that case.',
      },
      {
        q: 'How do I manage or cancel my subscription?',
        a: 'Subscriptions are handled by Apple: open iPhone Settings → your name → Subscriptions, then choose Muninn.',
      },
      {
        q: 'How do I delete my account and data?',
        a: 'Choose Delete Account in the app’s Settings. If you want us to confirm that your saved items are also cleared from our servers, email us.',
      },
    ],
    privacy: {
      updated: '2026-10-04',
      intro:
        'Muninn is made by someget. To sync your library across devices and turn links into content, Muninn stores some of your data on our servers. This page explains what we keep, why, and how to delete it.',
      sections: [
        {
          h: 'Account information',
          p: ['When you sign in with Apple, Google or GitHub, we receive an identifier for your account and your email address if the provider shares it. We never receive your password for those services.'],
        },
        {
          h: 'What you save',
          p: [
            'The links and text you submit, the text, author, image and video addresses fetched from those links, and the tags and whispers (notes) you add are stored on our servers so they sync across your devices.',
          ],
        },
        {
          h: 'Usage and subscriptions',
          p: [
            'We count your fetches to apply the free plan limits. If you subscribe, we store your subscription status and the transaction ID provided by Apple to confirm your plan. Payments are handled by Apple; we never see your payment details.',
            'Feedback you send from the app is stored with your account so we can reply.',
          ],
        },
        {
          h: 'What we do not do',
          p: ['Muninn has no ads, analytics or crash reporting. We do not track you across other apps or websites, and we never sell your data.'],
        },
        {
          h: 'Third-party services',
          p: [
            'We run Muninn on Supabase (accounts and database), Google Cloud (servers), Upstash (job queue), and a third-party content parsing service that receives the links you submit in order to fetch their content. These services process data only to run Muninn.',
          ],
        },
        {
          h: 'Deleting your data',
          p: [
            'You can delete your account at any time in Settings, which also clears data on your device. To confirm that your saved items, tags and notes are also removed from our servers, email hello@someget.xyz and we will take care of it.',
          ],
        },
        {
          h: "Children's privacy",
          p: ['Muninn is not directed at children under 13. If you believe a child has given us personal information, contact us and we will delete it.'],
        },
        {
          h: 'Changes and contact',
          p: ['If this policy changes, we will update this page and the date above. Questions? Email hello@someget.xyz.'],
        },
      ],
    },
  },
};

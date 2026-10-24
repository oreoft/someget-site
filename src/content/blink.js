export default {
  zh: {
    heroTitle: '按一下，\n就到。',
    heroSub:
      '给常用的应用各绑一个全局快捷键。按一下，应用就打开或切到最前面；它已经在最前面时再按一下，就隐藏起来。不用找 Dock，不用翻 ⌘Tab。',
    features: [
      {
        title: '一键打开或切换',
        desc: '应用没开就启动它，开着就把它带到最前面。没有窗口时会像点 Dock 图标一样新开一个。',
      },
      {
        title: '再按一下就隐藏',
        desc: '应用已经在最前面时，再按同一个快捷键，它就收起来，回到你刚才在做的事。',
      },
      {
        title: '组合随你定',
        desc: '⌃ 加字母、⇧⌃ 加字母、⌃⌘ 加字母，任意修饰键组合都能录。和已有的组合重复时当场提示。',
      },
      {
        title: 'iCloud 同步',
        desc: '打开同步后，登录同一 Apple ID 的几台 Mac 共用一份快捷键配置，换台电脑手感不变。',
      },
      {
        title: '导出和导入',
        desc: '整份快捷键配置可以导出成一个文件，换电脑、重装系统时导入，原来的快捷键原样搬过来。',
      },
      {
        title: '简单，也安静',
        desc: '一个应用一个快捷键，没有要先学的面板和规则，装好就能用。安静待在菜单栏，不收集任何数据。',
      },
    ],
    demoTitle: '一个快捷键，两种用法',
    demoDesc: '下面是一台 Mac 的桌面。点键盘上的快捷键，看应用怎么出现、怎么收起来。',
    demoSteps: ['按 ⌃N，笔记来到最前面', '再按一次 ⌃N，它就藏起来', '按 ⌃B，切到浏览器'],
    faq: [
      {
        q: '支持哪些系统？',
        a: 'macOS 14（Sonoma）及以上，Apple 芯片和 Intel 芯片的 Mac 都能用。',
      },
      {
        q: '收费吗？',
        a: '一次买断，没有订阅、内购和广告。上架初期限时免费，价格以 App Store 显示为准。',
      },
      {
        q: '关掉菜单栏图标后，怎么打开设置？',
        a: '在访达、启动台或聚焦搜索里再打开一次 Blink，快捷键列表窗口就会出现在最前面。',
      },
      {
        q: '换电脑怎么迁移配置？',
        a: '在旧电脑的 Blink 里导出配置，到新电脑上选择导入，选中那个文件，原来的快捷键就都过来了。打开 iCloud 同步的话，登录同一个 Apple ID 就会自动同步。',
      },
      {
        q: '多台 Mac 怎么共用一份配置？',
        a: '在每台 Mac 的 Blink 设置里打开 iCloud 同步，登录同一个 Apple ID 即可。第一次打开时如果两边配置不一样，Blink 会让你选择用哪一份。',
      },
      {
        q: '按快捷键没有反应怎么办？',
        a: '先确认设置里的「启用快捷键」是打开的；再看列表里那一行有没有提示，应用被移动或删除、组合被占用时都会标出来，重新选应用或换个组合就好。还不行就发邮件给我们。',
      },
    ],
    privacy: {
      updated: '2026-10-23',
      intro: 'Blink Launcher 由 someget 开发。你的快捷键配置只属于你，我们不运营任何服务器来接收你的数据。',
      sections: [
        {
          h: '我们收集什么',
          p: ['什么都不收集。Blink 没有账号体系，没有统计分析、广告或崩溃上报工具，不会把任何数据发给我们。'],
        },
        {
          h: '网络连接',
          p: ['除了你主动开启的 iCloud 同步，Blink 不会发起任何网络连接。'],
        },
        {
          h: '数据存在哪里',
          p: [
            '你设置的快捷键配置保存在你的 Mac 上。开启 iCloud 同步后，配置会存放在你自己的 iCloud 中，用来同步到登录同一 Apple ID 的其他 Mac，我们无法访问。',
            '你可以随时在设置里关闭同步，之后配置只保存在本机。',
          ],
        },
        {
          h: '儿童隐私',
          p: ['Blink 不面向 13 岁以下儿童，也不收集任何人的个人信息。'],
        },
        {
          h: '政策变更与联系',
          p: ['如果本政策有变化，我们会更新本页面和上方的日期。有任何问题，请发邮件至 hello@someget.xyz。'],
        },
      ],
    },
  },
  en: {
    heroTitle: 'One key,\nright there.',
    heroSub:
      'Give each app you use its own global shortcut. Press it and the app opens or comes to the front; press it again while it is in front and it hides. No hunting through the Dock, no cycling through ⌘Tab.',
    features: [
      {
        title: 'Open or switch in one press',
        desc: 'Not running? Blink launches it. Already running? It comes to the front, with a new window if none is open.',
      },
      {
        title: 'Press again to hide',
        desc: 'When the app is already in front, the same shortcut tucks it away so you are back to what you were doing.',
      },
      {
        title: 'Any combination you like',
        desc: '⌃ plus a letter, ⇧⌃ plus a letter, ⌃⌘ plus a letter: record any modifier combination. Duplicates are flagged right away.',
      },
      {
        title: 'iCloud sync',
        desc: 'Turn on sync and every Mac signed in to the same Apple ID shares one set of shortcuts, so each one feels the same.',
      },
      {
        title: 'Export and import',
        desc: 'Export your whole set of shortcuts to a file and import it on a new Mac or after a fresh install. Everything comes along as it was.',
      },
      {
        title: 'Simple and quiet',
        desc: 'One shortcut per app, no panels or rules to learn. It sits quietly in the menu bar and collects no data.',
      },
    ],
    demoTitle: 'One shortcut, two moves',
    demoDesc: 'Below is a Mac desktop. Press the shortcuts on the keyboard and watch apps appear and tuck away.',
    demoSteps: ['Press ⌃N to bring Notes to the front', 'Press ⌃N again to hide it', 'Press ⌃B to switch to the browser'],
    faq: [
      {
        q: 'Which macOS versions are supported?',
        a: 'macOS 14 (Sonoma) and later, on both Apple silicon and Intel Macs.',
      },
      {
        q: 'How much does it cost?',
        a: 'It is a one-time purchase with no subscription, in-app purchases or ads. It is free for a limited time at launch; see the App Store for the current price.',
      },
      {
        q: 'How do I open settings with the menu bar icon turned off?',
        a: 'Open Blink again from Finder, Launchpad or Spotlight, and the shortcut list comes up in front of everything.',
      },
      {
        q: 'How do I move my setup to a new Mac?',
        a: 'Export your setup in Blink on the old Mac, then choose Import on the new one and pick that file. Your shortcuts come straight over. With iCloud sync on, signing in to the same Apple ID syncs them automatically.',
      },
      {
        q: 'How do I share one setup across several Macs?',
        a: 'Turn on iCloud sync in Blink settings on each Mac, signed in to the same Apple ID. The first time, if the setups differ, Blink asks which one to keep.',
      },
      {
        q: 'A shortcut does nothing. What should I check?',
        a: 'First make sure "Enable shortcuts" is on in settings. Then look at that row in the list: Blink marks apps that were moved or deleted and combinations that are taken, so pick the app again or try another combination. Still stuck? Email us.',
      },
    ],
    privacy: {
      updated: '2026-10-23',
      intro: 'Blink Launcher is made by someget. Your shortcuts belong to you, and we run no servers that receive your data.',
      sections: [
        {
          h: 'What we collect',
          p: ['Nothing. Blink has no accounts, no analytics, no ads and no crash reporting, and it never sends data to us.'],
        },
        {
          h: 'Network access',
          p: ['Apart from iCloud sync, which you can choose to turn on, Blink makes no network connections.'],
        },
        {
          h: 'Where your data lives',
          p: [
            'Your shortcut settings are stored on your Mac. With iCloud sync on, they are kept in your own iCloud so your other Macs signed in to the same Apple ID can use them, and we cannot access them.',
            'You can turn off sync in Settings at any time, after which your settings stay only on that Mac.',
          ],
        },
        {
          h: "Children's privacy",
          p: ['Blink is not directed at children under 13 and collects no personal information from anyone.'],
        },
        {
          h: 'Changes and contact',
          p: ['If this policy changes, we will update this page and the date above. Questions? Email hello@someget.xyz.'],
        },
      ],
    },
  },
};

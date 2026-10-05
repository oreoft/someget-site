export default {
  zh: {
    heroTitle: '看见，\n就是提醒。',
    heroSub:
      'macOS 自带的便签很好用：贴在桌面上，一抬眼就看见。但它不能同步，也没有收起来的地方。InStash 保留了这种看得见的提醒，再补上 iCloud 同步和吸附坞。',
    features: [
      {
        title: '贴在桌面上',
        desc: '便签以小窗口浮在桌面上，可以浮动置顶、调透明度、折叠成一行；六种颜色区分不同的事。',
      },
      {
        title: '吸附坞',
        desc: '便签一多，就把它们收到屏幕边缘，变成一排细窄的标签。鼠标靠近就展开，点一下直接编辑，常看的钉在最上面。',
      },
      {
        title: 'iCloud 同步',
        desc: '在 Mac 和 iPhone 之间自动同步。在 iPhone 上记一笔，可以直接让它出现在 Mac 桌面上。',
      },
      {
        title: '收起，而不是删掉',
        desc: '不想看的便签可以从桌面收起，留在列表里，想看时再放回来；真不要了再永久删除。',
      },
      {
        title: '快捷键',
        desc: '⌘N 新建、⌘D 显示或隐藏全部，还有全局快捷键，在任何 App 里都能呼出；快捷键可以自定义。',
      },
      {
        title: '边写边排版',
        desc: '输入 Markdown 标记会自动变成格式，标题、列表、加粗都不用切换工具栏。',
      },
    ],
    demoTitle: '在 iPhone 上记，在 Mac 上看见',
    demoDesc: '在 iPhone 上新建一张便签，选个颜色，打开「在 Mac 桌面显示」，它就贴到了 Mac 桌面上。',
    demoSteps: ['新建便签', '选颜色', '显示到 Mac 桌面'],
    faq: [
      {
        q: '便签存在哪里？会被别人看到吗？',
        a: '存在你自己的设备和你自己的 iCloud 里，我们没有服务器，看不到你的任何便签。',
      },
      {
        q: '为什么另一台设备上没同步过来？',
        a: '确认两台设备登录的是同一个 Apple ID，并且都开启了 iCloud 和 InStash 的同步开关。同步偶尔会延迟几十秒。',
      },
      {
        q: '便签从桌面上消失了怎么办？',
        a: '它可能只是被收起了。打开「便签列表」（⌘L），找到它，选择「显示到桌面」即可。',
      },
      {
        q: '可以不用 iCloud 吗？',
        a: '可以，在设置里关闭同步后，便签只保存在本机。',
      },
    ],
    privacy: {
      updated: '2026-10-04',
      intro: 'InStash 由 someget 开发。你的便签只属于你，我们不运营任何服务器来接收你的数据。',
      sections: [
        {
          h: '我们收集什么',
          p: ['什么都不收集。InStash 没有账号体系，没有统计分析、广告或崩溃上报工具，不会把任何数据发给我们。'],
        },
        {
          h: '数据存在哪里',
          p: [
            '便签保存在你的设备上。开启 iCloud 同步后，便签会存放在你自己的 iCloud 私有空间中，由 Apple 加密保管，我们无法访问。',
            '你可以随时在设置里关闭同步，之后便签只保存在本机。',
          ],
        },
        {
          h: '儿童隐私',
          p: ['InStash 不面向 13 岁以下儿童，也不收集任何人的个人信息。'],
        },
        {
          h: '政策变更与联系',
          p: ['如果本政策有变化，我们会更新本页面和上方的日期。有任何问题，请发邮件至 hello@someget.xyz。'],
        },
      ],
    },
  },
  en: {
    heroTitle: 'Seeing is\nremembering.',
    heroSub:
      'macOS Stickies gets one thing right: notes sit on your desktop where you cannot miss them. But they do not sync, and there is no place to tuck them away. InStash keeps the visible reminders and adds iCloud sync and an edge deck.',
    features: [
      {
        title: 'On your desktop',
        desc: 'Notes float as small windows on your desktop. Keep them on top, adjust transparency or collapse them to one line, with six colors to tell things apart.',
      },
      {
        title: 'The edge deck',
        desc: 'When the desktop gets crowded, tuck notes to the edge of the screen as a slim strip of tabs. Move the pointer close to fan them out, click to edit, and pin the ones you use most.',
      },
      {
        title: 'iCloud sync',
        desc: 'Notes sync between your Mac and iPhone. Jot something on your phone and send it straight to your Mac desktop.',
      },
      {
        title: 'Tuck away, not delete',
        desc: 'Remove a note from the desktop and it stays in your list until you want it back. Delete it for good only when you are sure.',
      },
      {
        title: 'Keyboard shortcuts',
        desc: '⌘N for a new note, ⌘D to show or hide them all, plus a global hotkey that works from any app. Every shortcut can be changed.',
      },
      {
        title: 'Formatting as you type',
        desc: 'Markdown marks turn into formatting as you type, so headings, lists and bold need no toolbar.',
      },
    ],
    demoTitle: 'Write on iPhone, see it on your Mac',
    demoDesc: 'Create a note on iPhone, pick a color, turn on Show on Mac Desktop, and it appears on your Mac.',
    demoSteps: ['New note', 'Pick a color', 'Show on Mac desktop'],
    faq: [
      {
        q: 'Where are my notes stored? Can anyone else see them?',
        a: 'On your own devices and in your own iCloud. We have no servers and cannot see any of your notes.',
      },
      {
        q: 'Why is a note missing on my other device?',
        a: 'Make sure both devices use the same Apple ID with iCloud and InStash sync turned on. Sync can occasionally take a few seconds.',
      },
      {
        q: 'A note disappeared from my desktop.',
        a: 'It was probably tucked away. Open the note list (⌘L), find it and choose Show on Desktop.',
      },
      {
        q: 'Can I use it without iCloud?',
        a: 'Yes. Turn off sync in Settings and notes are stored only on that device.',
      },
    ],
    privacy: {
      updated: '2026-10-04',
      intro: 'InStash is made by someget. Your notes belong to you, and we run no servers that receive your data.',
      sections: [
        {
          h: 'What we collect',
          p: ['Nothing. InStash has no accounts, no analytics, no ads and no crash reporting, and it never sends data to us.'],
        },
        {
          h: 'Where your data lives',
          p: [
            'Notes are stored on your devices. With iCloud sync on, they are kept in your own private iCloud storage, protected by Apple, and we cannot access them.',
            'You can turn off sync in Settings at any time, after which notes stay only on that device.',
          ],
        },
        {
          h: "Children's privacy",
          p: ['InStash is not directed at children under 13 and collects no personal information from anyone.'],
        },
        {
          h: 'Changes and contact',
          p: ['If this policy changes, we will update this page and the date above. Questions? Email hello@someget.xyz.'],
        },
      ],
    },
  },
};

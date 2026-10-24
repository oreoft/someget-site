export default {
  zh: {
    heroTitle: '画一笔，\n就办到。',
    heroSub:
      '按住鼠标右键，随手画一道轨迹，松开就执行对应的快捷键：往左往右切换标签页，往上是最大化，画个倒 L 关掉标签页。Raiju 是为 Apple 芯片原生打造的鼠标手势工具，轻巧、迅速，安静地待在后台。',
    features: [
      {
        title: '画什么，认什么',
        desc: '按住右键或中键画出轨迹，不限于上下左右，折线、勾、圈都能当手势。松开就识别，也可以设成一画完立即执行。',
      },
      {
        title: '按指针下的应用生效',
        desc: '手势分全局、分组、应用、桌面四级，按鼠标指针下方的应用来匹配。同一个手势，在浏览器里是关标签页，在编辑器里可以是别的事。',
      },
      {
        title: '系统快捷键',
        desc: '调度中心、切换桌面这类系统级快捷键可以直接发出，不会先把指针下的应用激活到前面。',
      },
      {
        title: '原生 Apple 芯片',
        desc: '用 Swift 原生编写，安装包约 1.4 MB。识别一次手势只要约 4 微秒，不画手势时几乎不占 CPU。',
      },
      {
        title: '兼容 WGestures 配置',
        desc: '直接读取 WGestures 2 的手势和偏好设置，第一次打开就一键迁移，原来的手势和快捷键原样可用。',
      },
      {
        title: '轨迹看得见',
        desc: '画的时候实时显示轨迹，识别成功会变色并提示手势名，画错了也一眼就能看出来。',
      },
    ],
    demoTitle: '在这块屏幕上画一笔',
    demoDesc: '下面是一台 Mac 的屏幕。按住鼠标（手机上用手指）画一道轨迹，松开后看看它识别成了哪个手势、会按下哪个快捷键。',
    demoSteps: ['往左、往右画：切换标签页', '往上画：最大化', '先右再下画个倒 L：关闭标签页'],
    faq: [
      {
        q: '支持哪些系统？',
        a: 'macOS 14（Sonoma）及以上，为 Apple 芯片的 Mac 原生打造。',
      },
      {
        q: '为什么需要「辅助功能」权限？',
        a: 'Raiju 要读取鼠标按键和移动来识别手势，再替你按下对应的快捷键，这两件事都需要 macOS 的辅助功能授权。第一次打开时按提示在「系统设置 → 隐私与安全性 → 辅助功能」里打开 Raiju 即可。',
      },
      {
        q: '怎么从 WGestures 迁移过来？',
        a: '第一次打开 Raiju 时，它会自动读取 WGestures 2 的手势和偏好设置并导入，原来的手势、分组和快捷键都在。迁移完先退出 WGestures，两个手势工具同时运行会互相抢右键。',
      },
      {
        q: '右键菜单还能用吗？',
        a: '能。按住右键不拖动、直接松开，就是普通的右键点击；只有按住拖出一段轨迹，才会被当成手势。',
      },
      {
        q: '同一个手势能在不同应用里做不同的事吗？',
        a: '可以。给某个应用或某组应用单独设置同名手势，它会覆盖全局的设定；Raiju 按鼠标指针下方的应用来决定用哪一套。',
      },
      {
        q: '画了手势没有反应怎么办？',
        a: '先确认辅助功能权限已经打开，并且 WGestures 等其他手势工具已经退出；再看画的时候轨迹有没有变色，没变色说明没匹配上，可以在手势列表里重新录一下。还不行就发邮件给我们。',
      },
    ],
    privacy: {
      updated: '2026-10-24',
      intro: 'Raiju 由 someget 开发。你的手势和使用习惯只属于你，我们不运营任何服务器来接收你的数据。',
      sections: [
        {
          h: '我们收集什么',
          p: ['什么都不收集。Raiju 没有账号体系，没有统计分析、广告或崩溃上报工具，不会把任何数据发给我们。'],
        },
        {
          h: '辅助功能权限',
          p: [
            'Raiju 借助 macOS 的辅助功能权限读取鼠标按键和移动轨迹，用来识别手势，并模拟你设定的快捷键。这些信息只在你的 Mac 上即时处理，不会记录，也不会离开你的设备。',
          ],
        },
        {
          h: '数据存在哪里',
          p: [
            '你设置的手势和偏好保存在你的 Mac 上。导入 WGestures 配置时，Raiju 只在本机读取那份配置文件。',
            '如果你打开了 iCloud 同步，手势和显示设置还会保存在你自己的 iCloud 账户里，用来让你的几台 Mac 保持一致。这些数据只有你能访问，我们看不到。在偏好设置里关掉同步即可停止。',
          ],
        },
        {
          h: '儿童隐私',
          p: ['Raiju 不面向 13 岁以下儿童，也不收集任何人的个人信息。'],
        },
        {
          h: '政策变更与联系',
          p: ['如果本政策有变化，我们会更新本页面和上方的日期。有任何问题，请发邮件至 hello@someget.xyz。'],
        },
      ],
    },
  },
  en: {
    heroTitle: 'One stroke,\ndone.',
    heroSub:
      'Hold the right mouse button, draw a stroke, and let go to fire the shortcut it stands for: left and right to switch tabs, up to maximize, an upside-down L to close the tab. Raiju is a mouse gesture tool built natively for Apple silicon. Light, fast, and quiet in the background.',
    features: [
      {
        title: 'Draw any shape',
        desc: 'Hold the right or middle button and draw. Not just up, down, left and right: zigzags, checkmarks and loops all work as gestures. Recognized on release, or the moment you finish drawing if you prefer.',
      },
      {
        title: 'Follows the app under the pointer',
        desc: 'Gestures live at four levels: global, group, app and desktop, matched to the app under your pointer. The same stroke can close a tab in your browser and do something else in your editor.',
      },
      {
        title: 'System shortcuts',
        desc: 'Send system-wide shortcuts like Mission Control or switching Spaces directly, without first bringing the app under the pointer to the front.',
      },
      {
        title: 'Native on Apple silicon',
        desc: 'Written natively in Swift, about 1.4 MB to download. Recognizing a gesture takes around 4 microseconds, and it uses almost no CPU while you are not drawing.',
      },
      {
        title: 'Works with WGestures settings',
        desc: 'Reads your WGestures 2 gestures and preferences directly, so moving over takes one click on first launch. Your gestures and shortcuts work just as before.',
      },
      {
        title: 'See your stroke',
        desc: 'Your stroke is drawn live as you move. It changes color and shows the gesture name once recognized, so a miss is obvious at a glance.',
      },
    ],
    demoTitle: 'Draw on this screen',
    demoDesc: 'Below is a Mac screen. Hold the mouse button (or your finger on a phone) and draw a stroke, then let go to see which gesture it matched and which shortcut it would press.',
    demoSteps: ['Draw left or right: switch tabs', 'Draw up: maximize', 'Right, then down, an upside-down L: close the tab'],
    faq: [
      {
        q: 'Which macOS versions are supported?',
        a: 'macOS 14 (Sonoma) and later, built natively for Macs with Apple silicon.',
      },
      {
        q: 'Why does Raiju need Accessibility access?',
        a: 'Raiju reads mouse buttons and movement to recognize gestures, then presses the matching shortcut for you. macOS requires Accessibility access for both. On first launch, follow the prompt and turn on Raiju in System Settings → Privacy & Security → Accessibility.',
      },
      {
        q: 'How do I move over from WGestures?',
        a: 'The first time you open Raiju, it reads your WGestures 2 gestures and preferences and imports them, groups and shortcuts included. Quit WGestures afterwards: two gesture tools running at once will fight over the right button.',
      },
      {
        q: 'Does the right-click menu still work?',
        a: 'Yes. Press and release the right button without dragging and you get a normal right click. Only holding and drawing a stroke counts as a gesture.',
      },
      {
        q: 'Can one gesture do different things in different apps?',
        a: 'Yes. Give an app, or a group of apps, its own version of a gesture and it overrides the global one. Raiju picks the set based on the app under your pointer.',
      },
      {
        q: 'A gesture does nothing. What should I check?',
        a: 'First make sure Accessibility access is on and that WGestures and other gesture tools have quit. Then watch the stroke as you draw: if it never changes color, it did not match, so try recording that gesture again in the list. Still stuck? Email us.',
      },
    ],
    privacy: {
      updated: '2026-10-24',
      intro: 'Raiju is made by someget. Your gestures and habits belong to you, and we run no servers that receive your data.',
      sections: [
        {
          h: 'What we collect',
          p: ['Nothing. Raiju has no accounts, no analytics, no ads and no crash reporting, and it never sends data to us.'],
        },
        {
          h: 'Accessibility access',
          p: [
            'Raiju uses macOS Accessibility access to read mouse buttons and movement, so it can recognize gestures and press the shortcuts you set. This is processed on your Mac as it happens, never recorded, and never leaves your device.',
          ],
        },
        {
          h: 'Where your data lives',
          p: [
            'Your gestures and preferences are stored on your Mac. When importing WGestures settings, Raiju only reads that settings file locally.',
            'If you turn on iCloud sync, your gestures and display settings are also stored in your own iCloud account so your Macs stay in step. Only you can access that data; we cannot see it. Turn sync off in Preferences to stop.',
          ],
        },
        {
          h: "Children's privacy",
          p: ['Raiju is not directed at children under 13 and collects no personal information from anyone.'],
        },
        {
          h: 'Changes and contact',
          p: ['If this policy changes, we will update this page and the date above. Questions? Email hello@someget.xyz.'],
        },
      ],
    },
  },
};

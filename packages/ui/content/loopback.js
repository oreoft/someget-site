export default {
  zh: {
    heroTitle: '你的内网，\n随手打开。',
    heroSub:
      '家里的 NAS、服务器上的面板、开发机上的测试页，这些网页只在内网能打开。Loopback 帮你从 iPhone 连过去，在内置浏览器里直接打开。不用开系统 VPN，也不用把服务暴露到公网。',
    features: [
      {
        title: 'Tailscale 直连',
        desc: '在 App 里登录 Tailscale，tailnet 里的设备自动列出来，任何端口都能直接打开。Loopback 自己加入 tailnet，手机的系统 VPN 保持关闭。',
      },
      {
        title: 'SSH 隧道',
        desc: '没装 Tailscale 的机器，填上地址、用户名和密码或私钥（Ed25519 / RSA），Loopback 建好本地端口转发再打开网页。只监听本机的服务也能访问。',
      },
      {
        title: '书签卡片',
        desc: '每个服务存成一张彩色卡片，自选颜色、图标和访问路径，一点就开。地址栏输入 nas:8080 也能临时打开。',
      },
      {
        title: '多端口转发',
        desc: '一张卡片可以同时转发多个端口，前后端分开部署的服务也能正常用。',
      },
      {
        title: '用完自动断开',
        desc: '连接前先探测端口；切到后台或闲置超时会自动断开，不在后台空耗。',
      },
      {
        title: '数据只在你手机上',
        desc: '密码和私钥只存在本机钥匙串里。没有后台服务器，不收集任何数据。配置可以导出导入，换手机直接迁移。',
      },
    ],
    demoTitle: '从登录到打开，四步',
    demoDesc: '登录 Tailscale，选一台设备，给要用的端口建一张书签卡片，点一下就打开了。',
    demoSteps: ['登录 Tailscale', '选一台设备', '添加端口书签', '点卡片打开'],
    faq: [
      {
        q: '需要在服务器上装什么吗？',
        a: '用 Tailscale 的话，服务器上装好 Tailscale 并加入同一个 tailnet 就行。用 SSH 的话，服务器能 SSH 登录就行，不需要额外软件。',
      },
      {
        q: '会开启系统 VPN 吗？',
        a: '不会。Loopback 在 App 内部加入 tailnet，手机的系统 VPN 保持关闭，不影响你正在用的其他 VPN。',
      },
      {
        q: '为什么切到后台后连接断了？',
        a: '为了省电和安全，App 切到后台约 1 分钟、或闲置约 5 分钟后会自动断开。回到 App 点卡片会重新连上。',
      },
      {
        q: '换新手机怎么迁移？',
        a: '在设置里导出配置，在新手机上导入即可。导出文件里的密码只做了混淆、没有加密，请像对待密码一样保管它，用完删掉。',
      },
      {
        q: '某个网页打不开怎么办？',
        a: '先确认在电脑上通过同样的地址和端口能打开；再检查书签里的端口、路径和 HTTPS 开关是否正确。还不行就发邮件给我们，附上服务类型和报错截图。',
      },
    ],
    privacy: {
      updated: '2026-10-04',
      intro: 'Loopback 由 someget 开发。我们不运营任何服务器来接收你的数据，也不收集任何个人信息。',
      sections: [
        {
          h: '我们收集什么',
          p: ['什么都不收集。App 里没有账号体系，没有统计分析、广告或崩溃上报工具，也不会把任何数据发给我们。'],
        },
        {
          h: '数据存在哪里',
          p: [
            '你添加的服务器、书签等配置只保存在你的设备上，不会同步到 iCloud。',
            '密码和私钥保存在 iOS 钥匙串中，仅在设备解锁时可读取，且不会同步到其他设备。',
          ],
        },
        {
          h: '第三方服务',
          p: [
            '如果你选择登录 Tailscale，登录和设备之间的连接由 Tailscale 提供，相关数据受 Tailscale 隐私政策约束（tailscale.com/privacy-policy）。不用 Tailscale 时，App 只会直接连接你填写的服务器。',
          ],
        },
        {
          h: '导出的备份文件',
          p: ['导出的配置文件包含你的服务器信息，其中的密码和私钥只做了混淆，并未加密。请妥善保管，不要分享给他人。'],
        },
        {
          h: '儿童隐私',
          p: ['Loopback 不面向 13 岁以下儿童，也不收集任何人的个人信息。'],
        },
        {
          h: '政策变更与联系',
          p: ['如果本政策有变化，我们会更新本页面和上方的日期。有任何问题，请发邮件至 hello@someget.xyz。'],
        },
      ],
    },
  },
  en: {
    heroTitle: 'Your private network,\none tap away.',
    heroSub:
      'Your NAS dashboard, the admin panel on your server, the dev build on your laptop: these pages only open on your own network. Loopback connects to them from your iPhone and shows them in a built-in browser. No system VPN, and nothing exposed to the internet.',
    features: [
      {
        title: 'Tailscale Direct',
        desc: 'Sign in to Tailscale in the app and your tailnet devices are listed for you, with every port reachable. Loopback joins the tailnet on its own, so your system VPN stays off.',
      },
      {
        title: 'SSH Tunnel',
        desc: 'For machines without Tailscale, enter the address, username and a password or private key (Ed25519 / RSA). Loopback sets up a local port forward, so even localhost-only services work.',
      },
      {
        title: 'Bookmark cards',
        desc: 'Save each service as a color card with its own icon and path, and open it with one tap. Or type nas:8080 in the address bar to open it right away.',
      },
      {
        title: 'Multiple ports',
        desc: 'Forward several ports from one card, for apps with a separate frontend and backend.',
      },
      {
        title: 'Closes when you are done',
        desc: 'Ports are checked before connecting, and connections close when the app goes to the background or sits idle.',
      },
      {
        title: 'Stays on your phone',
        desc: 'Passwords and private keys stay in your device Keychain. No backend and no data collection. Export and import your setup to move to a new phone.',
      },
    ],
    demoTitle: 'From sign-in to open, in four steps',
    demoDesc: 'Sign in to Tailscale, pick a device, add a card for the port you need, and tap it to open.',
    demoSteps: ['Sign in to Tailscale', 'Pick a device', 'Add a port bookmark', 'Tap to open'],
    faq: [
      {
        q: 'Do I need to install anything on my server?',
        a: 'With Tailscale, install Tailscale on the server and join the same tailnet. With SSH, all you need is SSH access; nothing else to install.',
      },
      {
        q: 'Does it turn on a system VPN?',
        a: 'No. Loopback joins the tailnet inside the app, so the system VPN stays off and any VPN you already use is unaffected.',
      },
      {
        q: 'Why did my connection drop in the background?',
        a: 'To save battery and stay safe, connections close about a minute after the app goes to the background, or after about five idle minutes. Tap the card again to reconnect.',
      },
      {
        q: 'How do I move to a new phone?',
        a: 'Export your setup in Settings and import it on the new phone. Passwords in the export are obfuscated, not encrypted, so treat the file like a password and delete it when you are done.',
      },
      {
        q: 'A page will not load. What should I check?',
        a: 'First make sure the same address and port open from a computer. Then check the port, path and HTTPS switch on the bookmark. Still stuck? Email us with the service type and a screenshot of the error.',
      },
    ],
    privacy: {
      updated: '2026-10-04',
      intro: 'Loopback is made by someget. We run no servers that receive your data, and we collect no personal information.',
      sections: [
        {
          h: 'What we collect',
          p: ['Nothing. The app has no accounts, no analytics, no ads and no crash reporting, and it never sends data to us.'],
        },
        {
          h: 'Where your data lives',
          p: [
            'The servers and bookmarks you add are stored only on your device and are not synced to iCloud.',
            'Passwords and private keys are kept in the iOS Keychain, readable only while the device is unlocked, and never synced to other devices.',
          ],
        },
        {
          h: 'Third-party services',
          p: [
            'If you choose to sign in to Tailscale, sign-in and connections between devices are provided by Tailscale and covered by its privacy policy (tailscale.com/privacy-policy). Without Tailscale, the app only connects directly to the servers you enter.',
          ],
        },
        {
          h: 'Exported backups',
          p: ['An exported setup file contains your server details. Passwords and private keys in it are obfuscated, not encrypted. Keep it safe and do not share it.'],
        },
        {
          h: "Children's privacy",
          p: ['Loopback is not directed at children under 13 and collects no personal information from anyone.'],
        },
        {
          h: 'Changes and contact',
          p: ['If this policy changes, we will update this page and the date above. Questions? Email hello@someget.xyz.'],
        },
      ],
    },
  },
};

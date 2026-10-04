// 手机演示的极简状态机：每个演示是一个 [data-demo] 容器，里面若干 [data-screen] 屏幕。
// - [data-go="x"]        点击后切到屏幕 x
// - [data-screen][data-auto="x:900"]  进入该屏幕 900ms 后自动切到 x（用于“连接中”这类过渡）
// - [data-set="key:value"]  点击后在容器上设置 data-key="value"，样式据此变化（比如选颜色）
export function initDemos() {
  document.querySelectorAll<HTMLElement>('[data-demo]').forEach((root) => {
    if (root.dataset.ready) return;
    root.dataset.ready = '1';
    let timer: number | undefined;

    const show = (id: string) => {
      window.clearTimeout(timer);
      root.querySelectorAll<HTMLElement>('[data-screen]').forEach((s) => {
        s.hidden = s.dataset.screen !== id;
      });
      root.dataset.current = id;
      const auto = root.querySelector<HTMLElement>(`[data-screen="${id}"]`)?.dataset.auto;
      if (auto) {
        const [next, ms] = auto.split(':');
        timer = window.setTimeout(() => show(next), Number(ms) || 1200);
      }
    };

    root.addEventListener('click', (e) => {
      const el = (e.target as HTMLElement).closest<HTMLElement>('[data-go],[data-set]');
      if (!el || !root.contains(el)) return;
      e.preventDefault();
      if (el.dataset.set) {
        const [key, value] = el.dataset.set.split(':');
        root.dataset[key] = value;
      }
      if (el.dataset.go) show(el.dataset.go);
    });

    show(root.dataset.start ?? root.querySelector<HTMLElement>('[data-screen]')?.dataset.screen ?? '');
  });
}

const WindowLayoutMode = new Mode("Layout", [
  {
    label: "Split Left",
    key: "[",
    handle: async () => {
      const target = Window.focused();
      const screen = target.screen();
      const frame = screen.flippedFrame();

      const { x, y, width, height } = configs.left.computeCoords(frame);
      target.setSize({ width, height });
      target.setTopLeft({ x, y });
    },
  },

  {
    label: "Split Right",
    key: "]",
    handle: async () => {
      const target = Window.focused();
      const screen = target.screen();
      const frame = screen.flippedFrame();

      const { x, y, width, height } = configs.right.computeCoords(frame);
      target.setSize({ width, height });
      target.setTopLeft({ x, y });
    },
  },

  {
    label: "Maximize",
    key: "M",
    handle: async () => {
      const target = Window.focused();
      target.maximize();
    },
  },

  {
    label: "Other Screen",
    key: "O",
    handle: async () => {
      const window = getCurrentWindow();
      if (window === undefined) {
        return;
      }

      if (window.screen() === window.screen().next()) {
        return;
      }

      moveToScreen(window, window.screen().previous());
      window.focus();
    },
  },
]);

hotkey("Window Layout", "l", ["ctrl", "cmd"], async () => {
  await WindowLayoutMode.start();
});

const LAYOUT = {
  up: {
    computeCoords: (rect) => ({
      x: rect.x,
      y: rect.y,
      width: rect.width,
      height: rect.height,
    }),
  },
  down: {
    computeCoords: (rect) => ({
      x: rect.x,
      y: rect.height / 2,
      width: rect.width,
      height: rect.height / 2,
    }),
  },
  right: {
    computeCoords: (rect) => ({
      x: rect.x + rect.width / 2,
      y: rect.y,
      width: rect.width / 2,
      height: rect.height,
    }),
  },
  left: {
    computeCoords: (rect) => ({
      x: rect.x,
      y: rect.y,
      width: rect.width / 2,
      height: rect.height,
    }),
  },
};

const WindowLayoutMode = new Mode("Layout", [
  {
    label: "Split Left",
    key: "[",
    handle: async () => {
      const target = Window.focused();
      const screen = target.screen();
      const frame = screen.flippedFrame();

      const { x, y, width, height } = LAYOUT.left.computeCoords(frame);
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

      const { x, y, width, height } = LAYOUT.right.computeCoords(frame);
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

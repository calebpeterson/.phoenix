hotkey(
  {
    name: "Tile Window to Left",
    group: "Window Management",
    key: "[",
    modifiers: ["cmd", "ctrl"],
  },
  async () => {
    const target = Window.focused();
    const screen = target.screen();
    const frame = screen.flippedFrame();

    const { x, y, width, height } = LAYOUT.left.computeCoords(frame);
    target.setSize({ width, height });
    target.setTopLeft({ x, y });
  }
);

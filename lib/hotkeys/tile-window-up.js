hotkey(
  {
    name: "Tile Window to Top",
    group: "Window Management",
    key: "p",
    modifiers: ["cmd", "ctrl"],
  },
  async () => {
    const target = Window.focused();
    const screen = target.screen();
    const frame = screen.flippedFrame();

    const { x, y, width, height } = LAYOUT.up.computeCoords(frame);
    target.setSize({ width, height });
    target.setTopLeft({ x, y });
  }
);

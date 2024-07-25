hotkey(
  {
    name: "Tile Window to Right",
    group: "Window Management",
    key: "]",
    modifiers: ["cmd", "ctrl"],
  },
  async () => {
    const target = Window.focused();
    const screen = target.screen();
    const frame = screen.flippedFrame();

    const { x, y, width, height } = LAYOUT.right.computeCoords(frame);
    target.setSize({ width, height });
    target.setTopLeft({ x, y });
  }
);

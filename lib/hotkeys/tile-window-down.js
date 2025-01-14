hotkey(
  {
    name: "Tile Window to Bottom",
    group: "Window Management",
    key: "n",
    modifiers: ["cmd", "ctrl"],
  },
  async () => {
    const target = Window.focused();
    const screen = target.screen();
    const frame = screen.flippedFrame();

    const { x, y, width, height } = LAYOUT.down.computeCoords(frame);
    target.setSize({ width, height });
    target.setTopLeft({ x, y });
  }
);

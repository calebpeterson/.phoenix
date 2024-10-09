hotkey(
  {
    name: "Float active window",
    group: "Window Management",
    key: "f",
    modifiers: ["cmd", "ctrl"],
  },
  async () => {
    const window = Window.focused();
    const screen = window.screen();
    const screenFrame = screen.visibleFrame();

    const FACTOR = 0.8;

    window.setSize({
      width: screenFrame.width * FACTOR,
      height: screenFrame.height * FACTOR,
    });

    window.setTopLeft({
      x: screenFrame.x + (screenFrame.width * (1 - FACTOR)) / 2,
      y: screenFrame.y + (screenFrame.height * (1 - FACTOR)) / 2,
    });
  }
);

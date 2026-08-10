hotkey(
  {
    name: "Center active window",
    group: "Window Management",
    key: "c",
    modifiers: ["cmd", "ctrl"],
  },
  async () => {
    const window = Window.focused();
    const screen = window.screen();
    const screenFrame = screen.visibleFrame();
    const size = window.size();

    window.setTopLeft({
      x: screenFrame.x + (screenFrame.width - size.width) / 2,
      y: screenFrame.y + (screenFrame.height - size.height) / 2,
    });
  }
);

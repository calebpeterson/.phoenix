hotkey(
  {
    name: "Maximize active window",
    group: "Window Management",
    key: "m",
    modifiers: ["cmd", "ctrl"],
  },
  async () => {
    const window = Window.focused();
    window.maximize();
  }
);

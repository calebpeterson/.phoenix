hotkey(
  { name: "Maximize active window", key: "m", modifiers: ["cmd", "ctrl"] },
  async () => {
    const window = Window.focused();
    window.maximize();
  }
);

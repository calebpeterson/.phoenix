hotkey(
  { name: "Move to Other Screen", key: "o", modifiers: ["cmd", "ctrl"] },
  async () => {
    const window = getCurrentWindow();
    if (window === undefined) {
      return;
    }

    if (window.screen() === window.screen().next()) {
      return;
    }

    moveToScreen(window, window.screen().previous());
    window.focus();
  }
);

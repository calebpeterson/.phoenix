hotkey("Maximize active window", "m", ["cmd", "ctrl"], async () => {
  const window = Window.focused();
  window.maximize();
});

hotkey("Maximize active window", "m", ["cmd"], async () => {
  const window = Window.focused();
  window.maximize();
});

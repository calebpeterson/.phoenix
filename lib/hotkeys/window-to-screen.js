hotkey("Move to Other Screen", "o", ["cmd", "ctrl"], async () => {
  const window = getCurrentWindow();
  if (window === undefined) {
    return;
  }

  if (window.screen() === window.screen().next()) {
    return;
  }

  moveToScreen(window, window.screen().previous());
  window.focus();
});

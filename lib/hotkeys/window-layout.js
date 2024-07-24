hotkey("Tile Window to Left", "[", ["cmd", "ctrl"], async () => {
  const target = Window.focused();
  const screen = target.screen();
  const frame = screen.flippedFrame();

  const { x, y, width, height } = LAYOUT.left.computeCoords(frame);
  target.setSize({ width, height });
  target.setTopLeft({ x, y });
});

hotkey("Tile Window to Right", "]", ["cmd", "ctrl"], async () => {
  const target = Window.focused();
  const screen = target.screen();
  const frame = screen.flippedFrame();

  const { x, y, width, height } = LAYOUT.right.computeCoords(frame);
  target.setSize({ width, height });
  target.setTopLeft({ x, y });
});

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

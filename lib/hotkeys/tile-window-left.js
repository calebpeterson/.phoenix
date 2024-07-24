hotkey("Tile Window to Left", "[", ["cmd", "ctrl"], async () => {
  const target = Window.focused();
  const screen = target.screen();
  const frame = screen.flippedFrame();

  const { x, y, width, height } = LAYOUT.left.computeCoords(frame);
  target.setSize({ width, height });
  target.setTopLeft({ x, y });
});

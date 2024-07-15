const moveToScreen = (window, screen) => {
  if (!window) return;
  if (!screen) return;

  const frame = window.frame();
  const oldScreenRect = window.screen().visibleFrameInRectangle();
  const newScreenRect = screen.visibleFrameInRectangle();
  const xRatio = newScreenRect.width / oldScreenRect.width;
  const yRatio = newScreenRect.height / oldScreenRect.height;

  const mid_pos_x = frame.x + Math.round(0.5 * frame.width);
  const mid_pos_y = frame.y + Math.round(0.5 * frame.height);

  window.setFrame({
    x:
      (mid_pos_x - oldScreenRect.x) * xRatio +
      newScreenRect.x -
      0.5 * frame.width,
    y:
      (mid_pos_y - oldScreenRect.y) * yRatio +
      newScreenRect.y -
      0.5 * frame.height,
    width: frame.width,
    height: frame.height,
  });
};

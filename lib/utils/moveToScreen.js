const moveToScreen = (window, screen) => {
  if (!window) return;
  if (!screen) return;

  var frame = window.frame();
  var oldScreenRect = window.screen().visibleFrameInRectangle();
  var newScreenRect = screen.visibleFrameInRectangle();
  var xRatio = newScreenRect.width / oldScreenRect.width;
  var yRatio = newScreenRect.height / oldScreenRect.height;

  var mid_pos_x = frame.x + Math.round(0.5 * frame.width);
  var mid_pos_y = frame.y + Math.round(0.5 * frame.height);

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

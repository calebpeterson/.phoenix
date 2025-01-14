const LAYOUT = {
  up: {
    computeCoords: (rect) => ({
      x: rect.x,
      y: rect.y,
      width: rect.width,
      height: rect.height / 2,
    }),
  },
  down: {
    computeCoords: (rect) => ({
      x: rect.x,
      y: rect.height / 2,
      width: rect.width,
      height: rect.height / 2,
    }),
  },
  right: {
    computeCoords: (rect) => ({
      x: rect.x + rect.width / 2,
      y: rect.y,
      width: rect.width / 2,
      height: rect.height,
    }),
  },
  left: {
    computeCoords: (rect) => ({
      x: rect.x,
      y: rect.y,
      width: rect.width / 2,
      height: rect.height,
    }),
  },
};

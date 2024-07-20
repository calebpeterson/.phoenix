const createToast = (screen, options = {}) => {
  const frame = screen.flippedFrame();

  const modal = Modal.build({
    duration: options.duration ?? 0.5,
    animationDuration: 0.25,
    appearance: System.style,
    weight: 14,
    ...options,
    origin: (modalFrame) => ({
      x: frame.x + frame.width / 2 - modalFrame.width / 2,
      y: frame.y + frame.height * 0.925 - modalFrame.height / 2,
    }),
  });

  return modal;
};

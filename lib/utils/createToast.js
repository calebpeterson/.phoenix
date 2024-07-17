const createToast = async (screen, options = {}) => {
  const modal = Modal.build({
    duration: 0.5,
    animationDuration: 0.25,
    appearance: await getInterfaceMode(),
    weight: 16,
    ...options,
  });

  modal.origin = {
    x: screen.flippedVisibleFrame().width / 2 - modal.frame().width / 2,
    y: screen.flippedVisibleFrame().height * 0.925 - modal.frame().height / 2,
  };

  return modal;
};

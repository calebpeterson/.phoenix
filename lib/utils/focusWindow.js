const DEFAULT_OPTIONS = {
  showToast: true,
};

const focusWindow = async (target, options = DEFAULT_OPTIONS) => {
  const { showToast } = { ...DEFAULT_OPTIONS, ...options };

  target.app().focus();
  target.focus();

  Mouse.move({
    x: target.frame().x + target.frame().width / 2,
    y: target.frame().y + target.frame().height / 2,
  });

  if (showToast) {
    const modal = await createToast(target.screen(), {
      icon: target.app().icon(),
      text: `${target.title()}`,
    });

    modal.show();
  }
};

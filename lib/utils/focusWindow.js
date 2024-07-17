const focusWindow = async (target) => {
  target.app().focus();
  target.focus();

  Mouse.move({
    x: target.frame().x + target.frame().width / 2,
    y: target.frame().y + target.frame().height / 2,
  });

  const modal = await createToast(target.screen(), {
    icon: target.app().icon(),
    text: `${target.title()}`,
  });

  modal.show();
};

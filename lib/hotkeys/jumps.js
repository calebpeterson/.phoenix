const jumps = {
  f1: "Code",
  f2: "Brave Browser",
  f3: "iTerm2",
  f4: "Slack",
  f5: "Messages",
  f6: "zoom.us",
};

const focusTarget = (target) => {
  target.app().focus();
  target.focus();

  Mouse.move({
    x: target.frame().x + target.frame().width / 2,
    y: target.frame().y + target.frame().height / 2,
  });

  const modal = createToast(target.screen(), {
    icon: target.app().icon(),
    text: `${target.title()}`,
  });

  modal.show();
};

Object.keys(jumps).forEach((hotkey) => {
  const appName = jumps[hotkey];

  keys.push(
    new Key(hotkey, [], () => {
      const windows = Window.all({ visible: true });
      const targets = windows.filter(
        (window) => window.app().name() === appName
      );

      if (targets.length === 0) {
        const toast = createToast(Screen.main(), {
          text: `No ${appName} windows open`,
        });

        toast.show();
      } else if (targets.length === 1) {
        focusTarget(targets[0]);
      } else if (targets.length > 1) {
        if (targets[0].app().isActive()) {
          const target = targets[targets.length - 1];
          focusTarget(target);
        } else {
          focusTarget(targets[0]);
        }
      }
    })
  );
});

const jumps = {
  f1: "Code",
  f2: "Brave Browser",
  f3: "iTerm2",
  f4: "Slack",
  f5: "Fork",
  f6: "YouTube Music",
  f7: "Messages",
};

Object.keys(jumps).forEach((key) => {
  const appName = jumps[key];

  hotkey(`Jump to ${appName}`, key, [], () => {
    const targets = App.get(appName).windows({ visible: true });

    if (targets.length === 0) {
      const toast = createToast(Screen.main(), {
        text: `No ${appName} windows open`,
      });

      toast.show();
    } else if (targets.length === 1) {
      focusWindow(targets[0]);
    } else if (targets.length > 1) {
      if (targets[0].app().isActive()) {
        const target = targets[targets.length - 1];
        focusWindow(target);
      } else {
        focusWindow(targets[0]);
      }
    }
  });
});

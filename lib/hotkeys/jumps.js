const jumps = {
  f1: "Code",
  f2: "Brave Browser",
  f3: "iTerm2",
  f4: "Slack",
  f5: "Fork",
  f6: "YouTube Music",
  f7: "Messages",
  f8: "zoom.us",
};

Object.keys(jumps).forEach((key) => {
  const appName = jumps[key];

  hotkey({ name: `Jump to ${appName}`, key }, async () => {
    const targets = App.get(appName).windows({ visible: true });

    if (targets.length === 0) {
      const toast = await createToast(Screen.main(), {
        text: `No ${appName} windows open`,
      });

      toast.show();
    } else if (targets.length === 1) {
      await focusWindow(targets[0]);
    } else if (targets.length > 1) {
      if (targets[0].app().isActive()) {
        const target = targets[targets.length - 1];
        await focusWindow(target);
      } else {
        await focusWindow(targets[0]);
      }
    }
  });
});

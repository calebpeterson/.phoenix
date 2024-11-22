const JUMPS = [
  { key: "f1", appNames: ["Code", "Cursor"] },
  { key: "1", modifiers: ["cmd", "ctrl"], appNames: ["Code", "Cursor"] },

  // Browsers
  { key: "f2", appNames: ["Brave Browser", "Safari"] },
  {
    key: "2",
    modifiers: ["cmd", "ctrl"],
    appNames: ["Brave Browser", "Safari"],
  },

  { key: "f3", appName: "iTerm2" },
  { key: "3", modifiers: ["cmd", "ctrl"], appName: "iTerm2" },

  { key: "f4", appName: "Slack" },
  { key: "4", modifiers: ["cmd", "ctrl"], appName: "Slack" },

  { key: "f5", appName: "Fork" },
  { key: "5", modifiers: ["cmd", "ctrl"], appName: "Fork" },

  { key: "f6", appName: "YouTube Music" },
  { key: "6", modifiers: ["cmd", "ctrl"], appName: "YouTube Music" },

  { key: "f7", appName: "Messages" },
  { key: "7", modifiers: ["cmd", "ctrl"], appName: "Messages" },

  { key: "f8", appName: "zoom.us" },
  { key: "8", modifiers: ["cmd", "ctrl"], appName: "zoom.us" },
];

JUMPS.forEach(({ key, modifiers, appName, appNames }) => {
  const name = appNames ? appNames.join(" or ") : appName;

  hotkey({ name, group: "Jump to", key, modifiers }, async () => {
    const targets = appNames
      ? appNames.flatMap(
          (appName) => App.get(appName)?.windows({ visible: true }) ?? []
        )
      : App.get(appName).windows({ visible: true });

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

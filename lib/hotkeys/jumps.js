const JUMPS = [
  { key: "f1", appNames: ["Code", "Cursor", "Zed"] },
  { key: "1", modifiers: ["cmd", "ctrl"], appNames: ["Code", "Cursor", "Zed"] },

  // Browsers
  { key: "f2", appNames: ["Brave Browser", "Safari", "Google Chrome"] },
  {
    key: "2",
    modifiers: ["cmd", "ctrl"],
    appNames: ["Brave Browser", "Safari", "Google Chrome"],
  },

  { key: "f3", appNames: ["iTerm2", "Ghostty"] },
  { key: "3", modifiers: ["cmd", "ctrl"], appNames: ["iTerm2", "Ghostty"] },

  { key: "f4", appName: "Slack" },
  { key: "4", modifiers: ["cmd", "ctrl"], appName: "Slack" },

  { key: "f5", appName: "Fork" },
  { key: "5", modifiers: ["cmd", "ctrl"], appName: "Fork" },

  { key: "f6", appName: "YouTube Music" },
  { key: "6", modifiers: ["cmd", "ctrl"], appName: "YouTube Music" },

  { key: "f7", appNames: ["Messages", "Mail"] },
  { key: "7", modifiers: ["cmd", "ctrl"], appNames: ["Messages", "Mail"] },

  { key: "f8", appName: "Zoom" },
  { key: "8", modifiers: ["cmd", "ctrl"], appName: "Zoom" },
];

const APP_EXPOSURE_THRESHOLD = 3;

JUMPS.forEach(({ key, modifiers, appName, appNames }) => {
  const name = appNames ? appNames.join(" or ") : appName;

  hotkey({ name, group: "Jump to", key, modifiers }, async () => {
    const targets = appNames
      ? appNames.flatMap(
          (appName) => App.get(appName)?.windows({ visible: true }) ?? [],
        )
      : App.get(appName).windows({ visible: true });

    if (targets.length === 0) {
      const toast = await createToast(Screen.main(), {
        text: `No ${name} windows open`,
      });

      toast.show();
    } else if (targets.length === 1) {
      await focusWindow(targets[0]);
    } else if (targets.length > APP_EXPOSURE_THRESHOLD) {
      await focusWindow(targets[0], { showToast: false });
      await task("/usr/bin/osascript", [
        "-e",
        `tell application "System Events" to key code 125 using {control down}`,
      ]);
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

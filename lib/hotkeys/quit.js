const DOUBLE_KEY_INTERVAL = 1000;

let lastQuitTimestamp = 0;

hotkey(
  {
    name: "Double-tap to quit",
    group: "Window Management",
    key: "q",
    modifiers: ["cmd"],
  },
  async () => {
    const timestamp = Date.now();

    if (timestamp - lastQuitTimestamp <= DOUBLE_KEY_INTERVAL) {
      lastQuitTimestamp = 0;

      const app = App.focused();

      if (app) {
        app.terminate();
      }
    } else {
      lastQuitTimestamp = timestamp;

      const modal = await createToast(Screen.main(), {
        text: "Press ⌘Q again to quit",
      });

      modal.show();
    }
  }
);

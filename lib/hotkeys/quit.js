const DOUBLE_KEY_INTERVAL = 1000;

let lastQuitTimestamp = 0;

hotkey("q", ["cmd"], () => {
  const timestamp = Date.now();

  if (timestamp - lastQuitTimestamp <= DOUBLE_KEY_INTERVAL) {
    lastQuitTimestamp = 0;

    const app = App.focused();

    if (app) {
      app.terminate();
    }
  } else {
    lastQuitTimestamp = timestamp;

    const modal = createToast(Screen.main(), {
      text: "Press ⌘Q again to quit",
    });

    modal.show();
  }
});

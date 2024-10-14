// Development helper - F10 to dump a list of all window titles + app names to the logs
hotkey({ name: "List windows", key: "f10" }, () => {
  const screens = Screen.all();
  screens.forEach((screen) => {
    log("SCREEN", screen.identifier(), screen.frame());
  });

  const windows = Window.all({ visible: true });
  windows.forEach((window) => {
    log(window.title(), window.app().name(), window.hash(), window.frame());
  });
});

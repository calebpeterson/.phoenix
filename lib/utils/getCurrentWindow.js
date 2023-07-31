const getCurrentWindow = () => {
  let window = Window.focused();
  if (window === undefined) {
    window = App.focused().mainWindow();
  }
  if (window === undefined) {
    return;
  }
  return window;
};

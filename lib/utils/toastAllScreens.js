const toastAllScreens = (options = {}) => {
  for (const screen of Screen.all()) {
    console.log(
      screen.identifier(),
      JSON.stringify(screen.frame()),
      JSON.stringify(screen.flippedFrame())
    );
  }

  const toasts = Screen.all().map((screen) => createToast(screen, options));

  return {
    show: () =>
      toasts.forEach((toast) => {
        toast.show();
      }),

    close: () =>
      toasts.forEach((toast) => {
        toast.close();
      }),
  };
};

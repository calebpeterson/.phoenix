const onAutoMaximize = (window) => {
  try {
    const size = window.size();
    const screenFrame = window.screen().frame();

    const fraction = 0.8;

    if (
      size.width > screenFrame.width * fraction &&
      size.height > screenFrame.height * fraction
    ) {
      window.maximise();
    }
  } catch (e) {
    console.error(`Failed to auto-maximize window`, e);
  }
};

Event.on("windowDidMove", debounce(onAutoMaximize));
Event.on("windowDidResize", debounce(onAutoMaximize));

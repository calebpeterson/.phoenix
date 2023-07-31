// Automatic window positioning on app launch
Event.on("appDidLaunch", async (app) => {
  const windows = app.windows();

  // Auto-position Playwright Inspector
  if (app.name() === "Chromium") {
    await timeout(250);

    const inspector = windows.find(
      (window) => window.title() === "Playwright Inspector"
    );

    const screenFrame = inspector.screen().flippedVisibleFrame();
    const windowFrame = inspector.frame();

    const topLeft = {
      x: screenFrame.width - windowFrame.width,
      y: screenFrame.height - windowFrame.height,
    };

    inspector.setTopLeft(topLeft);
  }
});

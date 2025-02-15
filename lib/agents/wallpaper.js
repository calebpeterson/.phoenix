const ensureWallpaper = async () => {
  await task("/usr/bin/osascript", [
    "-e",
    `"tell application 'System Events' to set picture of every desktop to '${WALLPAPER}'"`,
  ]);
};

Event.on("screensDidChange", ensureWallpaper);

ensureWallpaper();

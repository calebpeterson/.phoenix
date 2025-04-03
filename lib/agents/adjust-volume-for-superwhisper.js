const onSuperWhisperActivated = (window) => {
  const app = window.app();
  if (app.name() === "superwhisper") {
    task("/usr/bin/osascript", ["-e", `set volume output volume 5`]);
  }
};

const onSuperWhisperDone = (window) => {
  const app = window.app();
  if (app.name() === "superwhisper") {
    task("/usr/bin/osascript", ["-e", `set volume output volume 15`]);
  }
};

Event.on("windowDidOpen", onSuperWhisperActivated);
Event.on("windowDidClose", onSuperWhisperDone);

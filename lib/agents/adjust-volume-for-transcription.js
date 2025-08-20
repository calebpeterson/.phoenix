const DEFAULT_VOLUME = 15;

let currentVolume = DEFAULT_VOLUME;

const onTranscriptionActivated = async (window) => {
  const app = window.app();
  if (app.name() === "superwhisper" || app.name() === "VoiceInk") {
    const { output: volume } = await task(APPLE_SCRIPT_PATH, [
      "-e",
      `output volume of (get volume settings)`,
    ]);

    currentVolume = parseInt(volume, 10) ?? DEFAULT_VOLUME;
    log(`Current volume: ${currentVolume}`);

    task(APPLE_SCRIPT_PATH, ["-e", `set volume output volume 5`]);
  }
};

const onTranscriptionDone = (window) => {
  const app = window.app();
  if (app.name() === "superwhisper" || app.name() === "VoiceInk") {
    const volume = currentVolume ?? DEFAULT_VOLUME;
    task(APPLE_SCRIPT_PATH, ["-e", `set volume output volume ${volume}`]);
  }
};

Event.on("windowDidOpen", onTranscriptionActivated);
Event.on("windowDidClose", onTranscriptionDone);

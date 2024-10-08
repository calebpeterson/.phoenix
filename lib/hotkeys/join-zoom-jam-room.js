// Open the team Jam Room in Zoom
hotkey(
  { name: "Join Jam Room", key: "j", modifiers: ["cmd", "ctrl"] },
  async () => {
    await alert("Connecting to Jam Room...");

    Task.run("/usr/bin/open", [ZOOM_MEETING_URI.trim()], async (task) => {
      if (task.status > 0) {
        await alert("Failed to open Zoom");
        log(task.error);
      }
    });
  }
);

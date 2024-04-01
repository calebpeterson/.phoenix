// Open the team Jam Room in Zoom
hotkey("Join Jam Room", "j", ["cmd", "shift"], async () => {
  alert("Connecting to Jam Room...");

  Task.run("/usr/bin/open", [ZOOM_MEETING_URI.trim()], (task) => {
    if (task.status > 0) {
      alert("Failed to open Zoom");
      log(task.error);
    }
  });
});

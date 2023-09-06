// Open the team Jam Room in Zoom
keys.push(
  new Key("j", ["cmd", "shift"], async () => {
    alert("Connecting to Jam Room...");

    Task.run("/usr/bin/open", [ZOOM_MEETING_URI.trim()], (task) => {
      if (task.status > 0) {
        alert("Failed to open Zoom");
        log(task.error);
      }
    });
  })
);

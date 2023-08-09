// Open the team Jam Room in Zoom
keys.push(
  new Key("j", ["cmd", "shift"], async () => {
    const STORAGE_KEY = "zoom-jam-room-url";
    let url = Storage.get(STORAGE_KEY);

    if (!url) {
      url = await prompt("Please enter the Jam Room URL");
      Storage.set(STORAGE_KEY, url);
    }

    alert("Connecting to Jam Room...");

    Task.run("/usr/bin/open", [url.trim()], (task) => {
      if (task.status > 0) {
        Storage.remove(STORAGE_KEY);
        alert("Failed to open Zoom");
        log(task.error);
      }
    });
  })
);

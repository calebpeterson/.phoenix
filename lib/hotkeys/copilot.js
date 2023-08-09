// Inject a prompt into Copilot
keys.push(
  new Key("p", ["cmd"], async () => {
    const query = await prompt({ placeholder: "▶ Copilot" });

    if (query) {
      Task.run(
        "/usr/local/bin/node",
        ["/Users/caleb/Workspace/copilot/src/inject.mjs", query],
        (task) => {
          if (task.status > 0) {
            alert(task.error);
          }
        }
      );
    }
  })
);

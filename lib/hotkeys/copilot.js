// Inject a prompt into Copilot
hotkey("Copilot", "p", ["cmd"], async () => {
  const query = await prompt({ placeholder: "▶ Copilot" });

  if (query === null && query.length === 0) {
    return;
  }

  await task("/usr/local/bin/node", [
    "/Users/caleb/Workspace/copilot/src/inject.mjs",
    query,
  ]);

  const copilotWindow = getWindowByTitle("Copilot - iTerm");

  if (copilotWindow) {
    copilotWindow.focus();
  }
});

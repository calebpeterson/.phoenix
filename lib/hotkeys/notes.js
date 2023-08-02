const NEW_NOTE_SCRIPT = `
tell application "System Events" to tell process "Notes" to ¬
click menu item "New Note" of menu 1 of ¬
  menu bar item "File" of menu bar 1`.trim();

keys.push(
  new Key("n", ["cmd"], async () => {
    const notes = App.launch("Notes");
    notes.focus();

    osascript(NEW_NOTE_SCRIPT, (r) => {
      if (r.error) {
        log(`Note creation failed ${r.status} ${r.error}`);
      }
    });
  })
);

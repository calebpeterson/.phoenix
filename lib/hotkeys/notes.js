const NEW_NOTE_SCRIPT = `
tell application "System Events" to tell process "Notes" to ¬
click menu item "New Note" of menu 1 of ¬
  menu bar item "File" of menu bar 1`.trim();

hotkey("n", ["cmd"], async () => {
  const notes = App.launch("Notes");
  notes.focus();

  osascript(NEW_NOTE_SCRIPT, (r) => {
    if (r.error) {
      log(`Note creation failed ${r.status} ${r.error}`);
    }
  });
});

hotkey("n", ["cmd", "shift"], async () => {
  const query = await prompt({ placeholder: "folder/filename" });

  if (query !== null) {
    const basename = query.length > 0 ? query : `scratch/${getTimestamp()}`;
    const filename = basename.includes(".") ? basename : basename + ".md";
    const fullname = `${NOTES_DIR}/${filename}`
      .replace(/\/\//g, "/")
      .replace(/ /g, " ");

    const pathname = getPathname(fullname);

    await task(`/bin/mkdir`, ["-p", pathname]);
    await task(`/usr/bin/touch`, [fullname]);
    await task(`/usr/local/bin/code`, [fullname]);
  }
});

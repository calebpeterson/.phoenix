hotkey("Create a note", "n", ["cmd"], async () => {
  const query = await prompt({ placeholder: "Create note (folder/filename)" });

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

// Open a new iTerm2 window with the "ai" command
hotkey(
  { name: "Calculator Session", key: "e", modifiers: ["cmd"] },
  async () => {
    // Run the "ai" command in a new iTerm2 window and exit when it's done
    await task("/Users/caleb/.bin/it2", ["cd ~/.bin ; calc ; exit"]);
  }
);

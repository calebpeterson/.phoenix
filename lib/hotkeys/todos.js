hotkey(
  {
    name: "Create a todo",
    group: "Task Management",
    key: "t",
    modifiers: ["cmd", "ctrl"],
  },
  async () => {
    const query = await prompt({ placeholder: "What needs to be done?" });

    if (query !== null) {
      await task(`/usr/bin/curl`, [
        "-X",
        "POST",
        TODO_WEBHOOK_URL,
        "-H",
        '"Content-Type: application/json"',
        "-d",
        `${JSON.stringify({ task: query })}`,
      ]);
    }
  }
);

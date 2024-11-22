hotkey(
  {
    name: "Record a completed task",
    group: "Task Management",
    key: "d",
    modifiers: ["cmd", "ctrl"],
  },
  async () => {
    const query = await prompt({ placeholder: "What has been done?" });

    if (query !== null) {
      await task(`/usr/bin/curl`, [
        "-X",
        "POST",
        TASK_COMPLETED_WEBHOOK_URL,
        "-H",
        '"Content-Type: application/json"',
        "-d",
        `${JSON.stringify({ task: query })}`,
      ]);
    }
  }
);

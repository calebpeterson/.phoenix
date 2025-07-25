// Development helper - F10 to dump a list of all window titles + app names to the logs
hotkey(
  { name: "List windows", key: "0", modifiers: ["cmd", "ctrl"] },
  async () => {
    let content = "";

    const windows = Window.recent({ visible: true });
    windows.forEach((window) => {
      content +=
        [window.app().name().padEnd(20), window.title()].join(" ") + "\n";
    });

    await alert(content, { weight: 14, font: "monospace", duration: 10 });
  }
);

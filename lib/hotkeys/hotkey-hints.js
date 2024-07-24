hotkey(
  { name: "Hotkey hints", key: "/", modifiers: ["cmd", "ctrl"] },
  async () => {
    const SYMBOLS = {
      cmd: "⌘",
      shift: "⇧",
      ctrl: "⌃",
      alt: "⌥",
    };

    // Controlled/provided by other applications, added here for usability
    const OTHER_HINTS = [
      { name: "Toggle Notifications", key: "\\", modifiers: ["cmd", "ctrl"] },
      { name: "Show Hidden Files", key: ".", modifiers: ["cmd", "shift"] },
    ];

    const formatModifiers = (modifiers) =>
      modifiers.map((modifier) => SYMBOLS[modifier] ?? modifier);

    const formatKey = (key) => (key === "space" ? "⎵" : key);

    const hints = [...HOTKEY_HINTS, ...OTHER_HINTS]
      .map(
        ({ name, key, modifiers }) =>
          name.padEnd(30) +
          "  " +
          [...formatModifiers(modifiers), formatKey(key)]
            .join(" ")
            .toUpperCase()
            .padEnd(5)
      )
      .sort()
      .join("\n");

    await alert(hints, { duration: 10, weight: 14, font: "monospace" });
  }
);

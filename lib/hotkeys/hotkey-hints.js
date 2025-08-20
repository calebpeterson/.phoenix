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
      { name: "Toggle notifications", key: "\\", modifiers: ["cmd", "ctrl"] },
      { name: "Show hidden files", key: ".", modifiers: ["cmd", "shift"] },
      { name: "Superwhisper mode (F18)", key: "F8", modifiers: ["ctrl"] },
      { name: "Superwhisper (F19)", key: "F9", modifiers: ["ctrl"] },
      { name: "Superwhisper commit (F20)", key: "F10", modifiers: ["ctrl"] },
    ];

    const formatKey = (key) => (key === "space" ? "⎵" : key);

    const formatModifiers = (modifiers) =>
      modifiers.map((modifier) => SYMBOLS[modifier] ?? modifier);

    const formatHotkeyGroup = (group, hints) =>
      group +
      "\n" +
      "⋯".repeat(40) +
      "\n" +
      hints
        .map(
          ({ name, key, modifiers }) =>
            "  " +
            name.padEnd(30) +
            "  " +
            [...formatModifiers(modifiers), formatKey(key)]
              .join(" ")
              .toUpperCase()
              .padEnd(5)
        )
        .join("\n") +
      "\n";

    const hintGroups = groupBy(
      [...HOTKEY_HINTS, ...OTHER_HINTS],
      ({ group }) => group ?? "Hotkeys"
    );

    const text = [...Object.entries(hintGroups)]
      .map(([group, hints]) => formatHotkeyGroup(group, hints))
      .join("\n");

    await alert(text, { duration: 10, weight: 12, font: "monospace" });
  }
);

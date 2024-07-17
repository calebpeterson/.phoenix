hotkey("Hotkey hints", "/", ["alt"], async () => {
  const SYMBOLS = {
    cmd: "⌘",
    shift: "⇧",
    ctrl: "⌃",
    alt: "⌥",
  };

  // Controlled/provided by other applications, added here for usability
  const OTHER_HINTS = [
    { name: "Toggle Notifications", key: "n", modifiers: ["alt"] },
  ];

  const formatModifiers = (modifiers) =>
    modifiers.map((modifier) => SYMBOLS[modifier] ?? modifier);

  const hints = [...HOTKEY_HINTS, ...OTHER_HINTS]
    .map(
      ({ name, key, modifiers }) =>
        [...formatModifiers(modifiers), key].join("").toUpperCase().padEnd(5) +
        name
    )
    .sort()
    .join("\n");

  await alert(hints, { duration: 10, weight: 16, font: "monospace" });
});

hotkey("Hotkey hints", "/", ["alt"], () => {
  const SYMBOLS = {
    cmd: "⌘",
    shift: "⇧",
    ctrl: "⌃",
    alt: "⌥",
  };

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

  alert(hints, { duration: 5, weight: 16, font: "monospace" });
});

hotkey("Hotkey hints", "/", ["cmd", "shift"], () => {
  const SYMBOLS = {
    cmd: "⌘",
    shift: "⇧",
    ctrl: "⌃",
    alt: "⌥",
  };

  const formatModifiers = (modifiers) =>
    modifiers.map((modifier) => SYMBOLS[modifier] ?? modifier);

  const hints = HOTKEY_HINTS.map(
    ({ name, key, modifiers }) =>
      [...formatModifiers(modifiers), key].join("").toUpperCase() + " → " + name
  )
    .sort()
    .join("\n");

  alert(hints);
});

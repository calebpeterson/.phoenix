hotkey("/", ["cmd", "shift"], () => {
  const SYMBOLS = {
    cmd: "⌘",
    shift: "⇧",
    ctrl: "⌃",
    alt: "⌥",
  };

  const formatModifiers = (modifiers) =>
    modifiers.map((modifier) => SYMBOLS[modifier] ?? modifier);

  const hints = HOTKEY_HINTS.map(({ key, modifiers }) =>
    [...formatModifiers(modifiers), key].join("").toUpperCase()
  ).join("\n");

  alert(hints);
});

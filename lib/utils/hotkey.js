const HOTKEY_HINTS = [];

const hotkey = (key, modifiers, handler) => {
  HOTKEY_HINTS.push({ key, modifiers });

  keys.push(new Key(key, modifiers, handler));
};

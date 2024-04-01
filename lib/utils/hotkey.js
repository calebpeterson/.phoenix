const HOTKEY_HINTS = [];

const hotkey = (name, key, modifiers, handler) => {
  HOTKEY_HINTS.push({ name, key, modifiers });

  keys.push(new Key(key, modifiers, handler));
};

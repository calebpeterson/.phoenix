// Documentation: https://kasper.github.io/phoenix/api/key

const keys = [];

const HOTKEY_HINTS = [];

const hotkey = ({ name, key, group, modifiers = [] }, handler) => {
  HOTKEY_HINTS.push({ name, key, group, modifiers });

  keys.push(new Key(key, modifiers, handler));
};

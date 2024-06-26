// Source: https://github.com/kasper/phoenix
// Documentation: https://kasper.github.io/phoenix/
// Wiki: https://github.com/kasper/phoenix/wiki

// Tail logs: log stream --process Phoenix

require("env.js");

require("lib/utils/alert.js");
require("lib/utils/createToast.js");
require("lib/utils/prompt.js");
require("lib/utils/getCurrentWindow.js");
require("lib/utils/getTimestamp.js");
require("lib/utils/getPathname.js");
require("lib/utils/getWindowByTitle.js");
require("lib/utils/splitPathnameFilename.js");
require("lib/utils/moveToScreen.js");
require("lib/utils/task.js");
require("lib/utils/debounce.js");
require("lib/utils/timeout.js");
require("lib/utils/hotkey.js");

const NUDGE_PX = 44;

const log = (...things) => {
  Phoenix.log(things.map((thing) => JSON.stringify(thing)));
};

const OSASCRIPT_PATH = "/usr/bin/osascript";

const osascript = (script, callback = _.noop) =>
  Task.run(OSASCRIPT_PATH, ["-e", script], callback);

const screenRectFor = (window) => {
  return window.screen().flippedFrame();
};

const positionWindow = ({ name, getRect, computeCoords }) => {
  const window = Window.focused();
  const rect = getRect(window);
  const { x, y, width, height } = computeCoords(rect);
  log(`Positioning window via ${name}`, rect);
  window.setSize({ width, height });
  window.setTopLeft({ x, y });
};

const configs = {
  up: {
    nudgeCoords: (rect) => ({
      x: rect.x,
      y: rect.y,
      width: rect.width,
      height: rect.height - NUDGE_PX,
    }),
    computeCoords: (rect) => ({
      x: rect.x,
      y: rect.y,
      width: rect.width,
      height: rect.height,
    }),
  },
  down: {
    nudgeCoords: (rect) => ({
      x: rect.x,
      y: rect.y,
      width: rect.width,
      height: rect.height + NUDGE_PX,
    }),
    computeCoords: (rect) => ({
      x: rect.x,
      y: rect.height / 2,
      width: rect.width,
      height: rect.height / 2,
    }),
  },
  right: {
    nudgeCoords: (rect) => ({
      x: rect.x,
      y: rect.y,
      width: rect.width + NUDGE_PX,
      height: rect.height,
    }),
    computeCoords: (rect) => ({
      x: rect.x + rect.width / 2,
      y: rect.y,
      width: rect.width / 2,
      height: rect.height,
    }),
  },
  left: {
    nudgeCoords: (rect) => ({
      x: rect.x,
      y: rect.y,
      width: rect.width - NUDGE_PX,
      height: rect.height,
    }),
    computeCoords: (rect) => ({
      x: rect.x,
      y: rect.y,
      width: rect.width / 2,
      height: rect.height,
    }),
  },
  space: {
    nudgeCoords: (rect) => rect,
    computeCoords: (rect) => rect,
  },
};

const keys = Object.keys(configs).map((key) => {
  const { computeCoords, nudgeCoords } = configs[key];
  const currentScreen = new Key(key, ["cmd", "ctrl", "alt"], () =>
    positionWindow({
      name: "currentScreen",
      computeCoords,
      getRect: screenRectFor,
    })
  );
  const nudgeScreen = new Key(key, ["ctrl", "alt"], () =>
    positionWindow({
      name: "nudgeScreen",
      computeCoords: nudgeCoords,
      getRect: (window) => window.frame(),
    })
  );
  return { currentScreen, nudgeScreen };
});

// Move Current Window to Next Screen
keys.push(
  new Key("left", ["cmd", "alt"], function () {
    const window = getCurrentWindow();
    if (window === undefined) {
      return;
    }
    if (window.screen() === window.screen().next()) return;
    moveToScreen(window, window.screen().next());
    window.focus();
  })
);

// Move Current Window to Previous Screen
keys.push(
  new Key("right", ["cmd", "alt"], function () {
    const window = getCurrentWindow();
    if (window === undefined) {
      return;
    }
    if (window.screen() === window.screen().next()) return;
    moveToScreen(window, window.screen().previous());
    window.focus();
  })
);

require("lib/agents/auto-maximize.js");
require("lib/agents/wallpaper.js");
require("lib/agents/zoom-status.js");

require("lib/layout/playwright.js");

require("lib/hotkeys/copilot.js");
// require("lib/hotkeys/jump-to.js");
require("lib/hotkeys/join-zoom-jam-room.js");
require("lib/hotkeys/jumps.js");
require("lib/hotkeys/maximize.js");
require("lib/hotkeys/todos.js");
require("lib/hotkeys/list-windows.js");
require("lib/hotkeys/quit.js");
require("lib/hotkeys/disabled.js");
require("lib/hotkeys/hotkey-hints.js");

// Show a toast when configuration changes are loaded.
const onReady = () => {
  const modal = createToast(Screen.main(), {
    text: "🐦‍🔥 Phoenix configuration loaded",
    duration: 2,
  });

  modal.show();
};

onReady();

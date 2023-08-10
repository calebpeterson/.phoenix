// Based on @stevenhauser's Phoenix config
// https://gist.github.com/stevenhauser/5e3bda2c6d603b712b1e757472eb56e6

// Source: https://github.com/kasper/phoenix
// Wiki: https://github.com/kasper/phoenix/wiki

// Tail logs: log stream --process Phoenix

require("lib/utils/alert.js");
require("lib/utils/createToast.js");
require("lib/utils/getCurrentWindow.js");
require("lib/utils/prompt.js");
require("lib/utils/timeout.js");

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

function moveToScreen(window, screen) {
  if (!window) return;
  if (!screen) return;

  var frame = window.frame();
  var oldScreenRect = window.screen().visibleFrameInRectangle();
  var newScreenRect = screen.visibleFrameInRectangle();
  var xRatio = newScreenRect.width / oldScreenRect.width;
  var yRatio = newScreenRect.height / oldScreenRect.height;

  var mid_pos_x = frame.x + Math.round(0.5 * frame.width);
  var mid_pos_y = frame.y + Math.round(0.5 * frame.height);

  window.setFrame({
    x:
      (mid_pos_x - oldScreenRect.x) * xRatio +
      newScreenRect.x -
      0.5 * frame.width,
    y:
      (mid_pos_y - oldScreenRect.y) * yRatio +
      newScreenRect.y -
      0.5 * frame.height,
    width: frame.width,
    height: frame.height,
  });
}

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

require("lib/agents/zoom-status.js");

require("lib/layout/playwright.js");

require("lib/hotkeys/copilot.js");
// require("lib/hotkeys/jump-to.js");
require("lib/hotkeys/join-zoom-jam-room.js");
require("lib/hotkeys/jumps.js");
require("lib/hotkeys/maximize.js");
require("lib/hotkeys/notes.js");
require("lib/hotkeys/list-windows.js");

Phoenix.notify("Configuration loaded");

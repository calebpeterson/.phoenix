// Phoenix configuration entry point.
// Source: https://github.com/kasper/phoenix
// Documentation: https://kasper.github.io/phoenix/
// Wiki: https://github.com/kasper/phoenix/wiki

// Tail logs: log stream --process Phoenix

require("env.js");

// Utils
require("lib/utils/EventEmitter.js");
require("lib/utils/alert.js");
require("lib/utils/createToast.js");
require("lib/utils/debounce.js");
require("lib/utils/focusWindow.js");
require("lib/utils/getCurrentWindow.js");
require("lib/utils/getInterfaceMode.js");
require("lib/utils/getPathname.js");
require("lib/utils/getTimestamp.js");
require("lib/utils/getWindowByTitle.js");
require("lib/utils/groupBy.js");
require("lib/utils/hotkey.js");
require("lib/utils/isPrimitive.js");
require("lib/utils/logger.js");
require("lib/utils/moveToScreen.js");
require("lib/utils/prompt.js");
require("lib/utils/splitPathnameFilename.js");
require("lib/utils/task.js");
require("lib/utils/timeout.js");
require("lib/utils/toastAllScreens.js");

// Layout
require("lib/layout/helpers.js");

// Agents
require("lib/agents/auto-maximize.js");
require("lib/agents/wallpaper.js");
require("lib/agents/zoom-status.js");

// Hotkeys
require("lib/hotkeys/copilot.js");
require("lib/hotkeys/disabled.js");
require("lib/hotkeys/hotkey-hints.js");
require("lib/hotkeys/join-zoom-jam-room.js");
require("lib/hotkeys/jumps.js");
require("lib/hotkeys/list-windows.js");
require("lib/hotkeys/maximize.js");
require("lib/hotkeys/quick-eval.js");
require("lib/hotkeys/quit.js");
require("lib/hotkeys/tile-window-left.js");
require("lib/hotkeys/tile-window-right.js");
require("lib/hotkeys/todos.js");
require("lib/hotkeys/window-to-screen.js");

// Auto-layouts
require("lib/layout/playwright.js");

// Modes
require("lib/modes/Mode.js");
require("lib/modes/window-layout.js");

// Show a toast when configuration changes are loaded.
const onReady = async () => {
  const toast = await toastAllScreens({
    text: "🐦‍🔥 Phoenix configuration loaded",
    duration: 2,
  });

  toast.show();
};

onReady();

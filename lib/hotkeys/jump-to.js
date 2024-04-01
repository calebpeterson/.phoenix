// Jump Between Open Windows
hotkey("Jump to", "j", ["cmd"], function () {
  const windows = Window.all({ visible: true });
  const titles = windows.map((window) => window.title()).join("\n");

  osascript(
    `do shell script "echo '${titles}' | /usr/local/bin/choose -c 202020 -n ${windows.length} -s 18 -m"`,
    (r) => {
      if (r.error) {
        log(`Choose failed ${r.status} ${r.error}`);
      } else {
        const selection = r.output.trim();
        const target = windows.find((window) => window.title() === selection);
        if (target) {
          log(`Focusing ${target.title()}`);
          target.app().focus();
          target.focus();
        }
      }
    }
  );
});

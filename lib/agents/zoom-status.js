const blink1 = (args) =>
  Task.run("/usr/local/bin/blink1-tool", args, (task) => {
    console.log(`Running Blink1`, args);
    console.log(`Blink1 returned ${task.status}`);
    console.log(task.output);
    console.log(task.error);
  });

const onAir = (showAlert) => {
  if (showAlert) {
    alert("ON AIR");
  }

  blink1(["--rgb=#ff8800"]);
};

const offAir = (showAlert) => {
  if (showAlert) {
    alert("OFF AIR");
  }
  blink1(["--rgb=#0088ff"]);
};

if (App.all().find((app) => app.name() === "zoom.us")) {
  onAir();
} else {
  offAir();
}

Event.on("appDidLaunch", async (app) => {
  if (app.name() === "zoom.us") {
    onAir(true);
  }
});

Event.on("appDidTerminate", async (app) => {
  if (app.name() === "zoom.us") {
    offAir(true);
  }
});

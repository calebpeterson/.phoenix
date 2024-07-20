const System = {
  style: "light",
};

Timer.every(60, async () => {
  System.style = await getInterfaceMode();
});

const getInterfaceMode = async () => {
  const { output, error } = await task("/bin/sh", [
    "-c",
    "defaults read -g AppleInterfaceStyle",
  ]);

  if (output?.trim() === "Dark") {
    return "dark";
  }

  return "light";
};

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

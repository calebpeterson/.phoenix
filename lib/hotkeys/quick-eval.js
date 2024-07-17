// Inject a prompt into Copilot
hotkey("Quick Eval", "e", ["cmd"], async () => {
  const code = await prompt({ placeholder: "▶ Eval" });

  if (code === null && code.length === 0) {
    return;
  }

  try {
    const result = eval(code);
    const resultAsString = isPrimitive(result)
      ? String(result).trim()
      : JSON.stringify(result, null, 2);

    await alert(resultAsString, { duration: 10 });

    await task("/bin/sh", ["-c", `echo "${resultAsString}" | pbcopy`]);
  } catch (error) {
    alert("🛑 " + error.message, { duration: 10 });
  }
});

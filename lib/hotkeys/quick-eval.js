// Inject a prompt into Copilot
hotkey("Quick Eval", "e", ["cmd"], async () => {
  const code = await prompt({ placeholder: "▶ Eval" });

  if (code === null && code.length === 0) {
    return;
  }

  try {
    const result = eval(code);
    const resultAsString = isPrimitive(result)
      ? result
      : JSON.stringify(result, null, 2);

    alert(resultAsString, { duration: 10 });
  } catch (error) {
    alert("🛑 " + error.message, { duration: 10 });
  }
});

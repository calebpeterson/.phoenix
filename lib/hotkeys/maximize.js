keys.push(
  new Key("m", ["cmd"], async () => {
    const window = Window.focused();
    window.maximize();
  })
);

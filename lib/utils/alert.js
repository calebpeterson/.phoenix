// Documentation: https://kasper.github.io/phoenix/api/modal

const alert = async (message, { duration = 1, weight, font } = {}) => {
  const rectangle = Screen.main().visibleFrame();
  const modal = Modal.build({
    text: message.trim(),
    font: font === "monospace" ? "Monaco" : font,
    weight,
    duration,
    appearance: await getInterfaceMode(),
    origin: function (frame) {
      return {
        x: rectangle.x + rectangle.width / 2 - frame.width / 2,
        y: rectangle.y + rectangle.height / 2 - frame.height / 2,
      };
    },
  });

  const close = () => {
    modal.close();
  };

  Key.once("escape", [], () => {
    close();
  });

  modal.show();
};

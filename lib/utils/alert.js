const alert = (message) => {
  const rectangle = Screen.main().visibleFrame();
  const modal = Modal.build({
    text: message,
    duration: 1,
    origin: function (frame) {
      return {
        x: rectangle.x + rectangle.width / 2 - frame.width / 2,
        y: rectangle.y + rectangle.height / 2 - frame.height / 2,
      };
    },
  });
  modal.show();
};

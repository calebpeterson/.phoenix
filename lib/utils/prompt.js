const prompt = ({ placeholder = "" } = {}) =>
  new Promise((resolve, reject) => {
    const screenFrame = Screen.main().flippedVisibleFrame();
    const modal = new Modal();

    modal.isInput = true;
    modal.inputPlaceholder = placeholder;

    modal.origin = {
      x: screenFrame.width / 2 - modal.frame().width / 2,
      y: screenFrame.height / 2 - modal.frame().height / 2,
    };

    modal.textDidCommit = (value, action) => {
      modal.close();
      resolve(value);
    };

    modal.show();
  });

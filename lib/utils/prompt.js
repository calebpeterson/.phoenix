// Documentation: https://kasper.github.io/phoenix/api/modal

// Will resolve to the user-provided string or null if ESCAPE is pressed
const prompt = ({ placeholder = "" } = {}) =>
  new Promise(async (resolve, reject) => {
    const screenFrame = Screen.main().flippedVisibleFrame();
    const modal = new Modal();

    modal.isInput = true;
    modal.inputPlaceholder = placeholder;
    modal.appearance = await getInterfaceMode();

    modal.origin = {
      x: screenFrame.width / 2 - modal.frame().width / 2,
      y: screenFrame.height / 2 - modal.frame().height / 2,
    };

    modal.textDidCommit = (value, action) => {
      modal.close();
      resolve(value);
    };

    Key.once("escape", [], () => {
      modal.close();
      resolve(null);
    });

    modal.show();
  });

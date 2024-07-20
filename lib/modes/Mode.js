const MODE_TIMEOUT = 5;

class Mode extends EventEmitter {
  constructor(name, handlers) {
    super();
    this.name = name;
    this.isActive = false;
    this.bindings = [];
    this.handlers = handlers;
  }

  async start() {
    if (this.isActive) {
      return;
    }

    this.isActive = true;

    const that = this;

    this.bindings = [
      // Exit the mode
      Key.on("escape", [], async () => that.stop()),

      // Mode-specific key handlers
      ...this.handlers.map((handler) =>
        Key.on(handler.key, handler.modifiers ?? [], async () => {
          try {
            await handler.handle();

            await alert(`🐦‍🔥 ${this.name} / ${handler.label}`, {
              weight: 12,
            });
          } catch (error) {
            console.error(error);
          } finally {
            await that.stop();
          }
        })
      ),
    ];

    this.emit("start");

    this.toast = await toastAllScreens({
      text: `🐦‍🔥 ${this.name}`,
      duration: 0,
    });
    this.toast.show();

    // Automatically exit the mode after 1 second
    Timer.after(MODE_TIMEOUT, () => {
      that.stop();
    });
  }

  async stop() {
    if (!this.isActive) {
      return;
    }

    this.isActive = false;

    this.toast.close();
    this.toast = undefined;

    this.bindings.forEach((binding) => Key.off(binding));
    this.bindings = [];

    this.emit("stop");
  }
}

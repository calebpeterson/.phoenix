const getWindowByTitle = (query) =>
  Window.all().find((window) => window.title() === query);

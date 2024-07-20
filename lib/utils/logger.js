const log = (...things) => {
  Phoenix.log(things.map((thing) => JSON.stringify(thing)));
};

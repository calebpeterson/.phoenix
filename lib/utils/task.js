const task = (...args) =>
  new Promise((resolve) => {
    Task.run(...args, (task) => {
      log(`Running: `, args[0], args[1]);

      if (task.status > 0) {
        alert(task.error);
        log(task.error);
      } else {
        log(task.output);
      }

      resolve(task);
    });
  });

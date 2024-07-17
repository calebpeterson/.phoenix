// Documentation: https://kasper.github.io/phoenix/api/task

const task = (...args) =>
  new Promise((resolve) => {
    Task.run(...args, (task) => {
      log(`Running: `, args[0], args[1]);

      if (task.status > 0) {
        log(task.error);
      } else {
        log(task.output);
      }

      resolve(task);
    });
  });

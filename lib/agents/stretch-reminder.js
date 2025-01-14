const showStretchReminder = () => {
  const now = new Date();

  // Only show the reminder at the top of every hour.
  if (now.getMinutes() !== 0) {
    return;
  }

  const toast = toastAllScreens({
    text: "STRETCH",
    weight: 24,
    duration: 10,
  });

  toast.show();
};

Timer.every(60, showStretchReminder);

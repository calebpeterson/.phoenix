const getTimestamp = () => {
  const now = new Date();

  const year = now.getFullYear();
  const month = ("0" + (now.getMonth() + 1)).slice(-2); // Months are zero based
  const day = ("0" + now.getDate()).slice(-2);
  const hour = ("0" + now.getHours()).slice(-2);
  const minute = ("0" + now.getMinutes()).slice(-2);

  const formattedNow =
    year + "-" + month + "-" + day + " " + hour + ":" + minute;

  return formattedNow;
};

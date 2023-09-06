const splitPathnameFilename = (fullpath) => {
  const parts = fullpath.split("/");
  const fileName = parts.pop() ?? "";
  const pathname = parts.join("/");

  return [pathname, fileName];
};

const isPrimitive = (value) =>
  value === null ||
  typeof value === "boolean" ||
  typeof value === "number" ||
  typeof value === "string" ||
  typeof value === "symbol" ||
  typeof value === "undefined" ||
  typeof value === "bigint";

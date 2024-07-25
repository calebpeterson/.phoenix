const groupBy = (array, keyFn) =>
  array.reduce((result, currentValue) => {
    // Get the value to group by
    const groupKey = keyFn(currentValue);

    // If the group doesn't exist, create it
    if (!result[groupKey]) {
      result[groupKey] = [];
    }

    // Add the current value to the group
    result[groupKey].push(currentValue);

    return result;
  }, {});

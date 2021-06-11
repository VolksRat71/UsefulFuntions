const manipulateNodes = (obj) => {
  for (const key in obj) {
    if (typeof obj[key] === "object") {
      manipulateNodes(obj[key]);
    } else {
      // whatever value is, the nodes will be
      const value = {
        value: obj[key],
        incomingValue: obj[key],
        edited: false,
        disabled: true,
      };
      obj[key] = value;
    }
  }
  return obj;
};

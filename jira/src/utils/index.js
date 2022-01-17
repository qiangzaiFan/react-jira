export const isFalsy = (value) => (value === 0 ? false : !value);

export const clearObject = (object) => {
  // Object.assign({},object)
  const result = { ...object };
  Object.keys(object).forEach((key) => {
    const value = result[key];
    if (isFalsy(value)) {
      delete result[key];
    }
  });
};

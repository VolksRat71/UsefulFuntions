const findAndUpdateObject = (o, [p, ...ps], v) =>
  p == undefined
    ? v
    : Object.assign(Array.isArray(o) || Number.isInteger(p) ? [] : {}, {
        ...o,
        [p]: findAndUpdateObject((o || {})[p], ps, v),
      });

const findAndUpdateArray = (arr, upd_arr, val) => {
  let obj = { ...arr };

  const findAndUpdateObject = (o, [p, ...ps], v) =>
    p == undefined
      ? v
      : Object.assign(Array.isArray(o) || Number.isInteger(p) ? [] : {}, {
          ...o,
          [p]: findAndUpdateObject((o || {})[p], ps, v),
        });

  const temp_obj = findAndUpdateObject(obj, upd_arr, val);

  return arr.map((_, i) => {
    return { ...temp_obj[i] };
  });
};

import dot from "dot-object";

const compared = (flatArray) => {
  const returnedArray = JSON.parse(JSON.stringify(flatArray));

  flatArray.forEach((account, i) => {
    const otherIndexes = flatArray
      .map((_, index) => index)
      .filter((index) => index !== i);

    for (const key in account) {
      returnedArray[i][key] = {
        value: flatArray[i][key],
        duplicate: otherIndexes
          .map((otherIndex) => flatArray[otherIndex][key] === flatArray[i][key])
          .some((i) => i),
      };
    }

    returnedArray[i]["id"] = i + 1;
  });

  return returnedArray;
};

export const testEquality = (stateArray) => {
  console.log(stateArray);
  let flattened = stateArray.map((item) => {
    let target = {};
    dot.dot(item, target);
    return target;
  });

  flattened = compared(flattened);

  return flattened.map((item) => dot.object(item));
};

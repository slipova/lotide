const flatten = function(array) {
  let newArr = [];
  array.forEach((element) => {
    if (Array.isArray(element)) {
      element.forEach((elementOfElement) => {
        newArr.push(elementOfElement);
      });
    } else {
      newArr.push(element);
    }
  });
  return newArr;
};

//---------TEST-------------

const assertArraysEqual = function(array1, array2) {
  for (let i of array1) {
    if (array1[i] !== array2[i] || array1.length !== array2.length) {
      console.log(`❌❌❌Assertion Failed: ${array1} and ${array2} are not equal.`);
      return;
    }
  }
  console.log(`✅✅✅ Assertion Passed: ${array1} and ${array2} are equal.`);
};

assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]); // => PASSED
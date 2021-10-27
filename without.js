//compare two arrays and return a message

const assertArraysEqual = function(array1, array2) {
  for (let i of array1) {
    if (array1[i] !== array2[i]) {
      console.log(`❌❌❌Assertion Failed: ${array1} and ${array2} are not equal.`);
      return;
    }
  }
  console.log(`✅✅✅ Assertion Passed: ${array1} and ${array2} are equal.`);
};


assertArraysEqual([1, 2, 3], [1, 2, 3]); // => should PASS


//compare two arrays
const eqArrays = function(array1, array2) {
  for (let i of array1) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};
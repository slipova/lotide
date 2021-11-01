// const assertArraysEqual = function(array1, array2) {
//   for (let i of array1) {
//     if (array1[i] !== array2[i] || array1.length !== array2.length) {
//       console.log(`❌❌❌Assertion Failed: ${array1} and ${array2} are not equal.`);
//       return;
//     }
//   }
//   console.log(`✅✅✅ Assertion Passed: ${array1} and ${array2} are equal.`);
// };

// assertArraysEqual([1, 2, 3], [1, 2, 3]); // => should PASS


// const assertEqual = function(actual, expected) {
//   if (actual === expected) {
//     console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
//   } else {
//     console.log(`❌❌❌Assertion Failed: ${actual} !== ${expected}`);
//   }
// };

// const eqArrays = function(array1, array2) {
//   for (let i of array1) {
//     if (array1[i] !== array2[i]) {
//       return false;
//     }
//   }
//   return true;
// };

// assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS


/*
1.! receive an array into a function
2.! determine its length
3.! if the length is even, return **** index of length/2 and length/2-1 *** AND PASS IT THROUGH ARRAY AS INDEX
4.! if the length is odd, return index of length/2, floored. ex length = 5; 5/2 = 2.5; [2] is the middle element
5. if array is less than 2 elements long, return empty array
*/

const middle = function(array) {
  let arrayLength = array.length;
  let arrayMiddle = [];
  if (arrayLength <= 2) {
    return [];
  }

  //if it's even
  if (arrayLength % 2 === 0) {
    arrayMiddle.push(array[arrayLength / 2 - 1]);
    arrayMiddle.push(array[arrayLength / 2]);
  } else {
    arrayMiddle.push(array[Math.floor(arrayLength / 2)]);
  }
  return arrayMiddle;
};

module.exports = middle;

console.log(middle([1, 2, 5, 6]));



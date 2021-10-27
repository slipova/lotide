// test cases
// verify that originalArr is not modified
// without([1, 2, 3], [1]) // => [2, 3]
// without(["1", "2", "3"], [1, 2, "3"]) // => ["1", "2"]

// const words = ["hello", "world", "lighthouse"];
// without(words, ["lighthouse"]); // no need to capture return value for this test case
// // Make sure the original array was not altered by the without function
// assertArraysEqual(words, ["hello", "world", "lighthouse"]);



// const without = function(originalArr, unwantedArr) {
//   let badArr = [];
//   for (let i in originalArr) {
//     for (let j in unwantedArr) {
//       if (originalArr[i] === unwantedArr[j]) {
//         badArr.push(i);
//         //console.log(badArr);
//       }

//     }
//   }
//   console.log(badArr);
// };


const without = function(originalArr, unwantedArr) {
  let goodArr = originalArr;
  for (let i = goodArr.length - 1; i >= 0; i--) {
    for (let j in unwantedArr) {
      if (goodArr[i] === unwantedArr[j]) {
        goodArr.splice(i, 1);
      }

    }
  }
  return goodArr;
};


console.log(without([1, 2, 3], [1]));
console.log(without(["1", "2", "3"], [1, 2, "3"]));

//compare two arrays and return a message

// const assertArraysEqual = function(array1, array2) {
//   for (let i of array1) {
//     if (array1[i] !== array2[i]) {
//       console.log(`❌❌❌Assertion Failed: ${array1} and ${array2} are not equal.`);
//       return;
//     }
//   }
//   console.log(`✅✅✅ Assertion Passed: ${array1} and ${array2} are equal.`);
// };


//compare two arrays

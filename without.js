const assertArraysEqual = function(array1, array2) {
  for (let i of array1) {
    if (array1[i] !== array2[i] || array1.length !== array2.length) {
      console.log(`❌❌❌Assertion Failed: ${array1} and ${array2} are not equal.`);
      return;
    }
  }
  console.log(`✅✅✅ Assertion Passed: ${array1} and ${array2} are equal.`);
};

const without = function(originalArr, unwantedArr) {
  let placeholderArr = [];
  let goodArr = placeholderArr.concat(originalArr);
  for (let i = goodArr.length - 1; i >= 0; i--) {
    goodArr.concat(originalArr);
    for (let j in unwantedArr) {
      if (goodArr[i] === unwantedArr[j]) {
        goodArr = goodArr.splice(i, 1);
      }
    }
  }
  return goodArr;
};


console.log(without([1, 2, 3], [1]));
console.log(without(["1", "2", "3"], [1, 2, "3"]));

// const words = ["hello", "world", "lighthouse"];
// without(words, ["lighthouse"]); // no need to capture return value for this test case
// // Make sure the original array was not altered by the without function
// console.log(assertArraysEqual(words, ["hello", "world", "lighthouse"]));
// console.log(words);



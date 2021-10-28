//FOR VERIFICATION PURPOSES
const assertArraysEqual = function(array1, array2) {
  for (let i of array1) {
    if (array1[i] !== array2[i] || array1.length !== array2.length) {
      console.log(`❌❌❌Assertion Failed: ${array1} and ${array2} are not equal.`);
      return;
    }
  }
  console.log(`✅✅✅ Assertion Passed: ${array1} and ${array2} are equal.`);
};

//CODE STARTS HERE-----------------------------

const takeUntil = function(array, callback) {
  let newArr = [];
  array.forEach((element, index) => {
    if (callback(element)) {
      newArr = array.slice(0, index)
    }
  });
  return newArr;
};
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

//console.log(assertArraysEqual(results1, [1, 2, 5, 7, 2])); //PASSED

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

//console.log(assertArraysEqual(results2, ["I've", "been", "to", "Hollywood"])); //PASSED
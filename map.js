const assertArraysEqual = function(array1, array2) {
  for (let i of array1) {
    if (array1[i] !== array2[i] || array1.length !== array2.length) {
      console.log(`❌❌❌Assertion Failed: ${array1} and ${array2} are not equal.`);
      return;
    }
  }
  console.log(`✅✅✅ Assertion Passed: ${array1} and ${array2} are equal.`);
};

const words = ["all", "cows", "eat", "grass"];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}
const results1 = map(words, word => word[0]);
console.log(results1);

console.log(assertArraysEqual(results1, ['a', 'c', 'e', 'g']));

/* USING forEach
const map = function(array) {
 array.forEach(word => word[0])
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

console.log(map(words));
*/
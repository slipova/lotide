//TEST
const assertEqual = function(func) {
  if (func === true) {
    console.log(`✅✅✅ Assertion Passed: ${array1} === ${array2}`);
  } else {
    console.log(`❌❌❌Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function(array1, array2) {
  for (let i of array1) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};


// const eqArrays = function(array1, array2) {
//   array1.forEach(element1 => {
//     array2.forEach(element2 => (element1 !== element2) false;
//       })
//   })
// return true;
// };


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

console.log(assertEqual(eqArrays(results1, ['a', 'c', 'e', 'g'])));

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
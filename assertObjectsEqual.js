const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
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




const eqObjects = function(object1, object2) {
  const inspect = require('util').inspect;
  if (Array.isArray(object1)) {
    eqArrays(object1, object2);
    if (true) {
      console.log(`✅✅✅ Assertion Passed: ${inspect(object1)} === ${inspect(object2)}`);
    }
  }
  if (object1 === object2) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(object1)} === ${inspect(object2)}`);
  } else {
    console.log(`❌❌❌Assertion Failed: ${inspect(object1)} !== ${inspect(object2)}`);
  }
}


const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
console.log(eqObjects(ab, ba));

// const abc = { a: "1", b: "2", c: "3" };
// console.log(assertEqual(eqObjects(ab, abc), false));
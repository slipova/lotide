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


console.log(assertEqual([1, 2, 3], [1, 2, 3]));

const eqObjects = function(object1, object2) {
  if (Array.isArray(object1)) {
    eqArrays(object1, object2);
    if (true) {
      console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
    }
  }
}

// const ab = { a: "1", b: "2" };
// const ba = { b: "2", a: "1" };
// console.log(assertEqual(eqObjects(ab, ba), true));

// const abc = { a: "1", b: "2", c: "3" };
// console.log(assertEqual(eqObjects(ab, abc), false));
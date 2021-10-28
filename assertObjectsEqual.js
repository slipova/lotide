//console logs the message
const assertObjectsEqual = function(actual, expected) {
  if (eqObjects(actual, expected)) {
    console.log('yes');
  } else {
    console.log('no');
  }
};

//checks if an object is an array
const eqArrays = function(array1, array2) {
  for (let i of array1) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};

//console.log(assertEqual([1, 2, 3], [1, 2, 3]));

const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }
  for (let key1 in object1) {
    console.log(object1[key1], object2[key1]);
    if (Array.isArray(object1[key1]) && Array.isArray(object2[key1])) {
      if (!eqArrays(object1[key1], object2[key1])) {
        return false;
      }
    } else if (object1[key1] !== object2[key1]) {
      return false;
    }
  }
  return true;
}


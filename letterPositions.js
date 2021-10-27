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

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);


const letterPositions = function(sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    let letter = sentence[i];
    if (results[letter]) {
      results[letter].push(i);
    } else if (letter !== ' ') {
      results[letter] = [i];
    }
  }
  return results;
};

console.log(letterPositions("check check"))

// expected result:
// { c: [0, 3, 6, 9], h: [1, 7], e: [2, 8], k: [4, 10] };

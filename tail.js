const assertEqual = function(actual, expected) {
  if (actual.length === 0) {
    return undefined;
  }
  let i = 0;
  while (i < actual.length) {
    if (actual[i] !== expected[i]) {
      console.log(`❌❌❌Assertion Failed: ${actual} !== ${expected}`);
      return false;
    }
    i++;
  }
  console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
};

const tail = (array) => array.slice(1);

const result = tail(["Hello", "Lighhouse", "Labs"]);
assertEqual(result, ["Lighthouse", "Labs"]);
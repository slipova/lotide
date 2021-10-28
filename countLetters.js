// const assertEqual = function(actual, expected) {
//   if (actual === expected) {
//     console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
//   } else {
//     console.log(`❌❌❌Assertion Failed: ${actual} !== ${expected}`);
//   }
// };


const countLetters = function(mystring) {
  let newString = mystring.split(" ").join("");
  const letterObj = {};
  for (let letter of newString) {
    if (!letterObj[letter]) {
      letterObj[letter] = 1;
    } else {
      letterObj[letter] += 1;
    }
  }
  return letterObj;
};

countLetters("lighthouse in the house");
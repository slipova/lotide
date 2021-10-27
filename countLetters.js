const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(mystring) {
  let newString = mystring.split(" ").join("");
  const letterObj = {};
  console.log(newString);
  for (let letter of newString) {
    console.log(letter);
  }
}

console.log(countLetters("lighthouse in the house"));

/*
1.! receive a string in a function
2a.! remove spaces
2b.! declare an object that will collect answers
3. loop through the resulting string
4. each time a character appears, it creates a key in the object
*/
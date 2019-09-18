// Assert Equals
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(` \u2764\uFE0F Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(` \u2620 Assertion Failed: "${actual}" !== "${expected}"`);
  }
};

//count Letters

const countLetters = function (stringCounted) {
  const letters = {};

  for (let letter of stringCounted) {
      if (letters[letter]) {
        letters[letter] += 1;
      } else {
        letters[letter] = 1;
      }
  } return letters;
}
 

const newResult = countLetters("The world is going to end")

assertEqual(newResult["T"], 1);
assertEqual(newResult["a"], undefined);
assertEqual(newResult["e"], 2)
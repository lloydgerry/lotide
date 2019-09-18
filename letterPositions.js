//eqArray checker
const eqArrays = function(array1, array2) {
  if (JSON.stringify(array1) === JSON.stringify(array2)) {
    return true;
  } 
  return false;
}

// print out if arrays are equal or not.
const assertArraysEqual = function(array1, array2) {
  if (JSON.stringify(array1) === JSON.stringify(array2)) {
    console.log("Both arrays are equal!");
  } else {
    console.log("Both arrays are NOT equal...");
  }
};


const getIndexes = function(sentence, letter) {
  indexArr = [];
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] == letter)
      indexArr.push(i)
  }

  return indexArr;
}

//Count the letter positions as an index

const letterPositions = function(sentence) {
  const results = {}; 
  for (let letter of sentence) {
    const findIndexOfString = getIndexes(sentence, letter);
    if (letter !== ' ')
      results[letter] = findIndexOfString;
  } 
  console.log(results);
  return results;
};

//input a string => object with each letter and an array to show each location of the letter
// new object
// loop through the string
// check and add each index as we loop through into a new or existing array for that letter

const exampleString = letterPositions("lighthouse in the house");

// assertArraysEqual(letterPositions("hello").h, [0]);
// assertArraysEqual(letterPositions("hello").l, [2,3]);
// assertArraysEqual(letterPositions("hello").a, undefined);
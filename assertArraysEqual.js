// print out if arrays are equal or not.
const assertArraysEqual = function(array1, array2) {
  if (JSON.stringify(array1) === JSON.stringify(array2)) {
    console.log("Both arrays are equal!");
  } else if (JSON.stringify(array1) !== JSON.stringify(array2)) {
    console.log("Both arrays are NOT equal...");
  }
};
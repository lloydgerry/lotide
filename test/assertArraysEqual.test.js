
//add dependencies

const assertArraysEqual = require('../assertArraysEqual');
const eqArrays = require('../eqArrays');

//test cases
assertArraysEqual([1, 2, 3], [1, 2, 3], "Both arrays are equal!")
assertArraysEqual([1, 2, 3], [3, 2, 1], "Both arrays are NOT equal...")
assertArraysEqual(["1", "2", "3"], ["1", "2", "3"], "Both arrays are equal!")
assertArraysEqual(["1", "2", "3"], ["1", "2", 3], "Both arrays are NOT equal...")
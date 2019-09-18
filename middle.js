const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(` \u2764\uFE0F Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(` \u2620 Assertion Failed: "${actual}" !== "${expected}"`);
  }
};

const eqArrays = function(compareArray1, compareArray2) {
  if (JSON.stringify(compareArray1) === JSON.stringify(compareArray2)) {
    console.log("Both arrays are equal!");
    return true;
  } else {
    console.log("Both arrays are NOT equal...");
    return false;
  }
};

const middle = function(arrayMid) {
  const middleIndex = Math.floor(arrayMid.length / 2);
  if (arrayMid.length <= 2) {
    return [];
  } else if (arrayMid.length % 2 === 1) {
    return [arrayMid[middleIndex]];
  } else {
    return [arrayMid[middleIndex - 1], arrayMid[middleIndex]];
  }
};
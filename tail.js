// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(` \u2764\uFE0F Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(` \u2620 Assertion Failed: "${actual}" !== "${expected}"`);
  }
};

function tail(array) {
  newArray = array.splice(0);
}

// TEST CODE
// assertEqual(1, 2, 3);
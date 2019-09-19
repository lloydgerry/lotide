// AssertEqual
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(` \u2764\uFE0F Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(` \u2620 Assertion Failed: "${actual}" !== "${expected}"`);
  }
};

const findKeyByValue = function(objectSearched, findValue) {
  let result = {};
  let allObjectValues = Object.keys(objectSearched);
  console.log(allObjectValues);
  for (let key of allObjectValues) {
    console.log(objectSearched[key])
     if (findValue === objectSearched[key]) {  
      result = key;
      console.log(result);
    } else {
      result = undefined;
    }
  }
  return result;
}


const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

//Tests
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
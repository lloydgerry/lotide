//AssertEqual
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(` \u2764\uFE0F Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(` \u2620 Assertion Failed: "${actual}" !== "${expected}"`);
  }
};

// Equal Array Checker
const eqArrays = function(array1, array2) {
  if (JSON.stringify(array1) === JSON.stringify(array2)) {
    return true;
  } 
  return false;
}

// Check two objects and return true if exact match

const eqObjects = function(object1, object2) {
  let result;
  let length1 = Object.keys(object1).length;
  let length2 = Object.keys(object2).length;
  if (length1 === length2) {
    result = true;
  } else {
    result = false;
    return result;
  }
  object2keys = Object.keys(object2);
    let secondResult;
    for (let key in object1) {
      if (object2keys.includes(key)) {
        secondResult = true;
        let isArray1 = Array.isArray(key);
        let isArray2 = Array.isArray(object2keys.includes(key));
        console.log("isArray1=", isArray1, "isArray2=", isArray2);
        if ((isArray1 === true) && (isArray2 === true)) {
          eqArrays(key, object2keys.includes(key))
        }
      } else {
        return secondResult = false;
      }
  } 
  return secondResult;
}


// const ab = { a: "1", b: "2" };
// const ba = { b: "2", a: "1" };
// assertEqual(eqObjects(ab, ba), true); // => true

// const abc = { a: "1", b: "2", c: "3" };
// assertEqual(eqObjects(ab, abc), false); // => false

// const cd = { c: "1", d: ["2", 3] };
// const dc = { d: ["2", 3], c: "1" };
// assertEqual(eqObjects(cd, dc), true); // => true

// const cd2 = { c: "1", d: ["2", 3, 4] };

//objects are equal when they have the same number of keys, 
//the value for each key is same in both objects


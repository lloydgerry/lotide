// eqObjects Checker

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
      //check for arrays
      let isArray1 = Array.isArray(key);
      let isArray2 = Array.isArray(object2keys.includes(key));
      if ((isArray1 === true) && (isArray2 === true)) {
        eqArrays(key, object2keys.includes(key));
      }
    } else {
      return secondResult = false;
    }
  }
  return secondResult;
};

const assertObjectsEqual = function(checkObject1, checkObject2) {
  eqobjects(checkObject1, checkObject2)
  if (eqObjectsResult === true) {
    console.log("The objects are equal.");
  } else {
    console.log("The objects are NOT equal.");
  }
};
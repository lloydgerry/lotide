// FUNCTION IMPLEMENTATION


const eqArrays = function(array1, array2) {
  if (JSON.stringify(array1) === JSON.stringify(array2)) {
    return true;
  } 
  return false;
};

module.exports = eqArrays;

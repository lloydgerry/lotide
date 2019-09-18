
const eqArrays = function(array1, array2) {
  if (JSON.stringify(array1) === JSON.stringify(array2)) {
    console.log("Both arrays are equal!");
    return true;
  } else if (JSON.stringify(array1) !== JSON.stringify(array2)) {
    console.log("Both arrays are NOT equal...");
    return false;
  }
}
eqArrays([1, 2, 3], [1, 2,])

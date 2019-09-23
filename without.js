

const without = function(sourceArr, removeItemsArr) {
  const cleanArr = [];
  console.log("cleanArr before splice: ", cleanArr)
  for (let i = 0; i < sourceArr.length; i++) {
    if (sourceArr[i] !== removeItemsArr[i]) {
      console.log(sourceArr[i]);
      cleanArr.push(sourceArr[i])
    } 
  }
  console.log("cleanArr after splice: ", cleanArr);
  return cleanArr;
}

const removeItems = function(arr) {
  for (let item of arr) {
    return item;
  }
}

without([1, 2, 3], [1]) // => [2, 3]
without(["1", "2", "3"], [1, 2, "3"]) // => ["1", "2"]

module.exports = without;
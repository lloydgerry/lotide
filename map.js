// inputs:
//        an array
//        callback function
// outputs:
//         return new array based on callback

const words = ["Paris", "Rome", "New York", "Montreal"];

const map = function(array, callback) {
  const results = [];

  for (let item of array) {
    console.log('item BEFORE: ', item);
    results.push(callback(item))
    console.log('item AFTER: ',  callback(item));
  }

  return results;
}

const results1 = map(words, word => word);
console.log(results1);

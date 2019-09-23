// input(s):
//          array 
//          callback
//output(s):
//         slice of OG array until it reaches callback

const takeUntil = function(array, callback) {
  const results = []
  //console.log("arraybefore: ", array);
  for (let element of array) {
    if (!callback(element)) {
      results.push(element);
    } else {
      break;
    }
  }
  return results;
};

const countries = ["Greenland", "Canada", "England", "Spain", "Germany", "Argentina"];

const data1 = [1, 2, 3, 4]

const results1 = takeUntil(data1, stop => stop > 3)

console.log(results1);

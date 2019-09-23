
const findKey = function(object, callback) {
  let allObjectValues = Object.keys(object)
  for (let key of allObjectValues) {
    if (callback(object[key]))  {
      return key;
    } 
    }
      return undefined;
}

const result1 = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => {
  console.log("x: ", x);
  return x.stars === 2;
}) // => "noma"

console.log(result1);



function tail(array) {
  let newArray = array.splice(1);
  return newArray;
}
console.log(tail([0, 1, 2]))

// TEST CODE
// assertEqual(1, 2, 3);

module.exports = tail;
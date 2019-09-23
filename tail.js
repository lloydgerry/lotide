
//creates array from OG after the first index

function tail(array) {
  let newArray = array.splice(1);
  return newArray;
}

// TEST CODE
// assertEqual(1, 2, 3);

module.exports = tail;
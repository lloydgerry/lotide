// FUNCTION IMPLEMENTATION
const assertEqual = require('./assertEqual');

function head(array) {
  print = array;
  return print[0];
}

// TEST CODE
//assertEqual(head([5,6,7]), 5);
//assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");

module.exports = head;
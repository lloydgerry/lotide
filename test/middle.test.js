
//add dependancies
const assert = require('chai').assert;
const middle = require('../middle')

//test cases

// assertArraysEqual(middle([1,2,3]), [2]);
// assertArraysEqual(middle([1,2,3,4]), [2,3]);
// assertArraysEqual(middle([1,2,]), []);
// assertArraysEqual(middle([1]), []);


describe("#middle", () => {
  it("should return middle index of 2 from array of 1,2,3", () => {
    assert.deepEqual(middle([1,2,3]), [2]);
  });
  it("should return middle two indexs of 2,3, from array of 1,2,3,4", () => {
    assert.deepEqual(middle([1,2,3,4]), [2,3])
  });
  it("should return middle two indexs of 2,3, from array of 1,2,3,4", () => {
    assert.deepEqual(middle([1,2]), [])
  });  
  it("should return middle two indexs of 2,3, from array of 1,2,3,4", () => {
    assert.deepEqual(middle([1]), [])
  });
});
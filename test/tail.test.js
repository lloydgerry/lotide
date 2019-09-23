
// add assert equals
const assert = require('chai').assert;
const tail = require('../tail.js');


// TEST CODE
// assertArraysEqual(tail([1, 2, 3]), [2, 3]);

describe("#tail", () => {
  it("should return tail of 2,3, from array of 1,2,3", () => {
    assert.deepEqual(tail([1,2,3]), [2,3]);
  });
  it("should return tail two indexs of 2,3, from array of 1,2,3,4", () => {
    assert.deepEqual(tail([1,2,3,4]), [2,3,4])
  });
  it("should return tail two indexs of 2,3, from array of 1,2,3,4", () => {
    assert.deepEqual(tail([1,2]), [2])
  });  
  it("should return tail two indexs of 2,3, from array of 1,2,3,4", () => {
    assert.deepEqual(tail([1]), [])
  });
});
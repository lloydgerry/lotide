

const assert = require('chai').assert;
const head   = require('../head');

describe("#head", () => {
  it("returns 1 for [1, 2, 3]", () => {
    assert.strictEqual(head([1, 2, 3]), 1);
  });
  it("returns first string from array of strings", () => {
    assert.strictEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello")
  });
});

const middle = require('../middle');
const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays');
const { assert } = require('chai');


describe("#middle", () => {
  it("returns [2, 5] for [1, 2, 5, 6]", () => {
    assert.deepEqual(assertEqual(eqArrays(middle([1, 2, 5, 6]), [2, 5]), true));
  });
});
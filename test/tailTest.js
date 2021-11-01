const { assert } = require('chai');
const assertEqual = require('../assertEqualTail');
const tail = require('../tail')


describe("#tail", () => {
  it("returns ['Lighthouse', 'Labs'] for ['Hello', 'Lighthouse','Labs']", () => {
    assert.deepEqual(tail(['Hello', 'Lighthouse', 'Labs']), ["Lighthouse", "Labs"]);
  });
  it("returns [5] for ['6', '5']", () => {
    assert.deepEqual(tail(['6', '5']), ['5']);
  });
});


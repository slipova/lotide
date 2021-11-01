const assertEqual = require('../assertEqualTail');
const tail = require('../tail')

const result = tail(["Hello", "Lighhouse", "Labs"]);
assertEqual(result, ["Lighthouse", "Labs"]);
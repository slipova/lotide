const middle = require('../middle');
const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays');


assertEqual(eqArrays(middle([1, 2, 5, 6]), [2, 5]), true);

# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @username/lotide`

**Require it:**

`const _ = require('@slipova/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:


* `assertArraysEqual`: compares two arrays and returns a message;
* `assertEqual`: compares primitive values and returns a message;
* `assertEqualTail`: compares arrays and returns a message;
* `assertObjectsEqual`: compares two objects and returns a message;
* `countLetters`: takes a string and returns an object of individual letters as keys and letter count as values(spaces excluded);
* `countOnly`: takes an object of items and an array of items to count, then returns an object with specified items counted;
* `eqArrays`: compares arrays and returns true or false;
* `eqObjects`: verifies if two objects are arrays, compares those that are not and returns true or false;
* `findKey`: takes a callback function and an object, and returns the first key that matches the function requirement;
* `findKeyByValue`: takes an object and a value, then returns the first key in the object that matches the value;
* `flatten`: takes an array with array values and returns a new array with the same values unpacked from array brackets(works on one level only);
* `head`: returns the first value of an array;
* `letterPositions`: takes a string and returns an object of letters with an array of indices where they occured(spaces excluded);
* `map`: takes a callback function and a string, and returns an array of first letters of the string;
* `middle`: takes an array and returns a new array with the middle array value(s);
* `tail`: takes an array and returns the array without the first value;
* `takeUntil`: takes an array and a callback function and returns a new array cut at the requested value;
* `without`: takes an array of items to examine and an array of items to remove, then returns a new array with the values that pass the test.
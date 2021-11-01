
const assertEqual = require('../assertEqualTail');

assertEqual(["Lighthouse", "Labs"], ["Lighthouse", "Labs"]); //true
assertEqual(["Lighthouse", "yogurt"], ["Lighthouse", "berries"]); //false
assertEqual(["gingerbread", "lilies"], ["ginger", "clementines"]); //false

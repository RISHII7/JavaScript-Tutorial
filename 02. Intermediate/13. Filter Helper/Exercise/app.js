// 1. Iterate over "ages" array
// 2. Print only adults, those whos age is greater then 18

let ages = [2, 4, 5, 31, 12, 34, 56, 11, 43, 1];
let newArr = ages.filter((age) => age > 18)
console.log(newArr);
// ---------------------

// ---------------------
// 1. Iterate Over "words" array
// 2. Print only those words which length is greater then 6
const words = [
    "spray",
    "limit",
    "elite",
    "exuberant",
    "destruction",
    "present",
];

let newArr1 = words.filter((word) => word.length > 6)
console.log(newArr1);


// ---------------------
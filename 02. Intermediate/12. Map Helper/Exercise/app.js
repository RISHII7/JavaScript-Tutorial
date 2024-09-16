// 1. Create array with random numbers.
// 2. Map over each item in that array, & multiply each item by 10

let arr = [12, 43, 54, 56, 678, 342];

let newArr = arr.map((num) => {
    return num * 10;
});

console.log(newArr);
// push() -> Add item at the end of the array
// pop() -> Remove item at the end of the array
// shift() -> Remove from the start
// unshift() -> Add to start
// concat() -> combining arrays
// join - creates string from array
// reverse - reverse an array
// slice - copy portion of an array
// sort - sorts an array

const fruits = ["apples", "pomegranate", "mango", "strawberries", "pineapple", "grapefruit"];
const fruits2 = ["watermelon", "blueberry", "raspberry", "blackberry"]
const numbers = [1, 2, 3, 4, 56, 4, 423];

fruits.push("oranges");
fruits.pop();
fruits.shift();
fruits.unshift("kiwi");
let totalFruits = fruits.concat(fruits2)
    // console.log(totalFruits.join("-"));
console.log(numbers.reverse())
console.log(numbers.slice(1, 4)) // start at index 1 and end at index
console.log(numbers.sort((a, b) => a - b)) // sort in ascending order
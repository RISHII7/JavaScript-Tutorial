// 1. Make a clone of "arr, arr2" by using spread operator
// 2. Make a clone of "user" object using spread operator

let arr = [1, 2, 3, 4, 5];
let arr2 = [6, 7, 8, 9, 0];

let clonedArr = [...arr, ...arr2];
console.log(clonedArr.sort());

user = {
    name: "Rishikesh",
    age: 23,
    occupation: "Unemployed"
};

let cloneUser = {...user, gender: "male" };
console.log(cloneUser);
// 1. Create function name (myFunction)
// 2. This function will take 2 parameters
// 3. Any number we pass as argument it will multiply that number.
// 4. As argument pass your favorite numbers.
// 5. log the value.

function myFunction(x, y) {
    return x * y;
};

let x = 17;
let y = 5;
let res = myFunction(x, y);
console.log(res);
console.log(myFunction(2, 4)); // Output: 8


function myFunction(x, y) {
    let res = x * y;
    console.log(res);
};

let a = 52;
let b = 12;
myFunction(a, b); // Output: 624
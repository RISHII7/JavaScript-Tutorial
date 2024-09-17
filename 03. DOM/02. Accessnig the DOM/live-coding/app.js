// ************ DOM SELECTORS ************
// 1. getElementsByTagName
let tag1 = document.getElementsByTagName('h1')
let tag2 = document.getElementsByTagName('h1').length
console.log(tag1);
console.log(tag2);

// 2. getElementById
let id = document.getElementById('main')
console.log(id);

// 3. getElementsByClassName
let class1 = document.getElementsByClassName('cls');
console.log(class1);

// 4. querySelector
let qry = document.querySelector('#id-1')
console.log(qry);

// 5. querySelectorAll
let li = document.querySelectorAll('li')
console.log(li);


// ---------------------------------------
// Storing data in variables

const h1 = document.querySelector("h1");
console.log(h1);
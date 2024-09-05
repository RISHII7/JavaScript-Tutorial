// Enhanced object literals, introduced in ECMAScript 6 (ES6), are a set of enhancements to the syntax for defining objects in JavaScript. These enhancements make it more convenient and concise to define object properties and methods


function user(name, age, work) {
    return {
        name: name,
        age: age,
        work: work,
        intro: function() {
            console.log(`My name is ${name}, I am ${age} years old,`);
        }
    };
}

const str = user('Rishi', 23, 'Student')
console.log(str);

str.intro();
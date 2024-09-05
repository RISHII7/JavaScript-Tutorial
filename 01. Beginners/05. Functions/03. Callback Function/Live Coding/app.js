// -------------------------------
// When we provide function as an (argument) to other function/argument that function is known as callback function.

// callback(function() {...})
// -------------------------------

function showCallFunc(fn) {
    const value = 10;
    fn(value)
};

showCallFunc(function(value) {
    console.log(value);
});
// -------------------------------

// function
function greet(name, cb) {
    console.log(`Hello ${name}`);
    cb();
}

function cb() {
    console.log('Callback Function');
}

greet('Rishikesh', cb)
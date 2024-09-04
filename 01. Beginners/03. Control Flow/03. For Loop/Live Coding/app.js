// for (initialExpression; condition; incrementExpression) {}

for (let i = 0; i <= 5; i++) {
    console.log("Hello World", i);
}


for (let i = 0; i < 3; i++) {
    console.log('Outer Loop', i);
    for (let j = 0; j < 5; j++) {
        console.log('Inner Loop', j);
    }
}
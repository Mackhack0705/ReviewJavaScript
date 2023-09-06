function example() {
    // var x = 10; // global scope
    // const x = 10; // block scope
    let x = 10; // block scope
    if(true) {
        // var y = 20;
        // const y = 20;
        let y = 20;
    }
    console.log(x);
    console.log(y);
}

example();

// console.log(x);
// console.log(y);
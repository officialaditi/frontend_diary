// declaring the variable
let username = 'James';
console.log(username);

// hoisting:- accessing the value before assigning;
console.log(age);
let age = 22;

// show an error:- 
// ReferenceError: Cannot access 'age' before initialization
//The variable age is hoisted but remains in the Temporal Dead Zone (TDZ) until it is initialized. 
// This means we cannot access it before its declaration, leading to a ReferenceError."

//scope declaration, reassigment,

function example() {
    let x = 'hello'; // Declares `x` in the function scope.
    if(true){
        let x = 'Hey';  // Declares a new `x` inside this block.
        console.log(x); // Output: 'Hey' (this refers to the block-scoped `x`)

    }
    console.log(x); // original functional scope value output=> hello
}

example();

// output:-

// we will get the 2 different output like :- hey, hello

// how???
// let x = 'Hey'; creates a new block-scoped variable x that only exists inside the {} block.
//The x inside the if block is a separate variable from the x in the function scope.
// This is why you get two different outputs: 'Hey' inside the block and 'hello' outside.
// declare variable:-
var name = 'aditi';
console.log(name);


// scope:- function scope
function example() {
    var x = 10;
    if(true){
        var x = 'hello' // same x varibale, but changing the value
        console.log(x);
    }
    console.log(x); // now the main value x=10 will be replace with the new value, as var does not respect block scoope
}
example();

// output:-

// hello
// hello


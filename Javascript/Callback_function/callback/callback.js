function sum(a, b) {
  console.log(a + b);
}

// sumCallback => its an descriptive name we have provided, we can simply write callback .
function calculator(a, b, sumCallback) {
  sumCallback(a, b);
}
calculator(1, 2, sum); // sum is an callback function as its passed as argument
// always give reference of callback not with parentheses.

// passing sum as reference,
// when we pass the function in argument never use parenthese(); in arugment statement
// when we apply parentheses means we want to execute the sum function directly rather than
//  wait for the other function to run


// returning the value instead of logging 

function multiply (a,b) {
  return (a*b)
}
function mulCalculator(a,b, mulCallback){
   return mulCallback(a,b)
}
const result = mulCalculator(2,2, multiply);
console.log(result)

// understanding with setTimeout();

const hello = () => {
    console.log('Say Hello')
}

setTimeout(hello, 3000);

// setTimeout function takes an callback which is here is hello.
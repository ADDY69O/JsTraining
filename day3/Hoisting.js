//Hoisting

//Hoisting is a concept which enables us to extract values of variables and functions even before initialising/assigning value without getting error and this is happening due to the 1st phase (memory creation phase) of the Execution Context.

//:Example 1
// getName();
// console.log(x); // undefined
// var x = 7;
// function getName() {
//   console.log("function");
// }

b = 100;
console.log(b);
let b;

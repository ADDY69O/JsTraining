//Functions
// It is a block of code designed to perform particular task.
// It encapsulates the set of instructions that can be reused through a program.

// function declarations
function functionName(parameters /* funtion parameters  */) {
  // function expression

  return parameters;
}

// simple function
// use this while using the object
function addToCart(...products) {
  return products;
}

// console.log(addToCart("phone", "laptop", "watch"));

// arrow function
// can't use this -> refers to the current context
Max = (n, m) => {
  return n > m ? n : m;
};

// closures
// It refers to the functions bundled together
function first() {
  const fName = "Aditya";

  function second() {
    var lName = "Kumar";

    console.log(fName);
  }

  second();

  console.log(lName);
}

// first();

// Closures
// function are bundled together
// inner function have the scope of the outer function

function Outer(name) {
  function displayName() {
    console.log(name);
    return "Kumar";
  }

  return displayName;
}

const result = Outer("Aditya");

console.log(result());

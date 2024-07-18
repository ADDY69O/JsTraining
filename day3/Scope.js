// //: Example 1
// function abc() {
//   var b = 10; // variable is function scope
// }
// abc();
// console.log(b);

function outer() {
  let username = "aditya";
  () => {
    var username2 = "neha";
    console.log("Outer value" + username);
  };

  function inner2() {
    console.log(username2);
  }

  inner2();
}

outer();

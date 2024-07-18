// for each loop
// It takes the parameter as the callback funtion
// there are mainly three parameters
// element, index, array

const products = ["phone", "laptop", "watch", "Keyboard", "mouse"];

const cart = [
  {
    id: 1,
    name: "phone",
    price: 10000,
  },
  {
    id: 2,
    name: "laptop",
    price: 100000,
  },
  {
    id: 3,
    name: "watch",
    price: 2000,
  },
  {
    id: 4,
    name: "keyboard",
    price: 1000,
  },
];

// products.forEach(function ( index, products) {
//   console.log("At index : " + index);
// //   console.log(value);
//   console.log(products);
// });

// for in loop
// it shows the index value

// for (let product in products) {
//   console.log(product);
// }

for (let product in cart) {
  console.log(cart[product].name);
}

// for (let product of cart) {
//   console.log(product);
// }

// const myValues = [1, 2, 4, 5, 6, 7];
// const initialValue = 0;

// const result = myValues.reduce((accumulator, currentVaue) => {
//   return accumulator + currentVaue;
// }, initialValue);

// console.log(result);

const cart = [
  {
    name: "Mobile",
    price: 10000,
  },
  {
    name: "laptop",
    price: 100000,
  },
  {
    name: "watch",
    price: 1000,
  },
];

const initialPrice = 0;

const totalPrice = cart.reduce((acc, curr) => {
  console.log(acc);
  console.log(curr);
  return acc + curr.price;
}, initialPrice);

console.log(totalPrice);

const circleLogic = (radius) => {
  return Math.PI * radius * radius;
};

const squareLogic = (side) => {
  return side * side;
};

const rectangleLogic = (ele) => {
  let width = ele[0];
  let length = ele[1];
  return width * length;
};

const triangleLogic = (ele) => {
  let base = ele[0];
  let height = ele[1];
  return (base * height) / 2;
};

const calculate = (listOFvalues, logic) => {
  for (let ele of listOFvalues) {
    console.log(logic(ele));
  }
};

const listOfRadius = [23, 54, 21];
const listOfSides = [20, 10, 5];
const listOfBaseHeight = [
  [2, 5],
  [12, 20],
  [15, 30],
];
const listOfWidthLength = [
  [2, 10],
  [12, 18],
  [15, 25],
];
console.log("Circle Area");
calculate(listOfRadius, circleLogic);
console.log("Square Area");
calculate(listOfSides, squareLogic);
console.log("Triangle Area");
calculate(listOfBaseHeight, triangleLogic);
console.log("Rectangle Area");
calculate(listOfWidthLength, rectangleLogic);

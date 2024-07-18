const array = [1, [2, [3, 4, [5, 6]]], 5];

const calculateSum = (inputArray) => {
  let totalSum = 0;
  for (let ele of inputArray) {
    typeof ele == "object"
      ? (totalSum += calculateSum(ele))
      : (totalSum += ele);
  }

  return totalSum;
};

console.log(calculateSum(array));

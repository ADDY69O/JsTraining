let arr = [-1, 9, 8, -3, 4];
let targetSum = 5;

const noOfWays = (arr, targetSum, index, currentSum) => {
  console.log(currentSum);
  if (currentSum > targetSum) return 0;
  if (index >= arr.length) {
    return 0;
  }
  if (currentSum == targetSum) {
    return 1;
  }

  let sum = noOfWays(arr, targetSum, index + currentSum + arr[index]);

  let sub = noOfWays(arr, targetSum, index + 1, currentSum - arr[index]);

  let leave = noOfWays(arr, targetSum, index + 1, currentSum);

  return sum + sub + leave;
};

let result = noOfWays(arr, targetSum, 0, 0);

console.log(result);

const solve = (arr, targetSum, currentSum, index) => {
  if (index == arr.length) {
    if (currentSum == targetSum) {
      return 1;
    }
  }

  let ans = 0;

  let addingValue = solve(arr, ta);
};

const numberOfWays = (arr, targetSum) => {
  return solve(arr, targetSum, 0, 0);
};

const arr = [-1, 9, 8, -3, 4];
let sum = 5;

const ways = numberOfWays(arr, sum);

console.log("No. of ways " + ways);

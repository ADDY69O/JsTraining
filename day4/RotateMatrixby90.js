const inputArray = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

const inputArray2 = [
  [5, 1, 9, 11],
  [2, 4, 8, 10],
  [13, 3, 6, 7],
  [15, 14, 12, 16],
];

const transpose = (inputArray) => {
  for (let i = 0; i <= inputArray.length - 1; i++) {
    for (let j = i + 1; j < inputArray[i].length; j++) {
      [inputArray[i][j], inputArray[j][i]] = [
        inputArray[j][i],
        inputArray[i][j],
      ];
    }
  }

  return inputArray;
};

const reverseArray = (inputArray) => {
  for (let i = 0; i < inputArray.length; i++) {
    for (let j = 0; j < inputArray.length / 2; j++) {
      [inputArray[i][j], inputArray[i][inputArray.length - 1 - j]] = [
        inputArray[i][inputArray.length - 1 - j],
        inputArray[i][j],
      ];
    }
  }
  return inputArray;
};

const rotateMatrixBy90 = (inputArray) => {
  // Step 1 : transpose the array

  const transposedArray = transpose(inputArray);

  // step 2 : reverse the array
  return reverseArray(transposedArray);

  // return reverseArray(transposedArray);
};

console.log(rotateMatrixBy90(inputArray2));

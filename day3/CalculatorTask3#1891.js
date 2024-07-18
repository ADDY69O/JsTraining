// It is used for addition
/*takes the total sum and the current value */
const additionLogic = (total, current) => {
  return total + current;
};

// It is used for multiplication
/*takes the total multiplication and the current value */
const multiplicationLogic = (total, current) => {
  if (total == 0) return current;
  return total * current;
};

// It is used for Substraction
/*takes the total substraction and the current value */
const substractionLogic = (total, current) => {
  if (total > current) return total - current;
  return current - total;
};

// It is used for division
/*takes the total division and the current value */
const divisionLogic = (total, current) => {
  if (total == 0) return current;
  else if (total > current) return total / current;
  return current / total;
};

// It is used for calculating using different logics
// It take the argument as the logic and the numbers to perform
// values store the all of the argument after the logic as array
// it uses rest operator for encapsulating the values in the arguments
const Calculator = (logic, ...values) => {
  let total = 0;

  //It iterate over the values
  values.forEach((element) => {
    total = logic(total, element);
  });

  return total;
};

console.log("****Addition*****");
const result = Calculator(additionLogic, 1, 2, 3, 4, 5, 6);
console.log(result);
console.log("******************");

console.log("...Multiplication...");
console.log(Calculator(multiplicationLogic, 1, 2, 3, 4, 5, 6));
console.log("...................");

console.log("...Substraction...");
console.log(Calculator(substractionLogic, 1, 2, 3, 4, 5, 6));
console.log("...................");

console.log("...Division...");
console.log(Calculator(divisionLogic, 1, 2, 3, 4, 5, 6));
console.log("...................");

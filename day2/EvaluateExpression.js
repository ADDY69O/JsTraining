// this stack only stores the operator
let operatorStack = [];

// this stack only stores the operand
let operandStack = [];

const precedence = (operator1, operator2) => {
  const operatorMapping = {
    "+": 1,
    "-": 1,
    "*": 2,
    "/": 2,
    "^": 3,
    "(": 0,
  };
  return operatorMapping[operator1] >= operatorMapping[operator2];
};

const doOperation = (operatorStack, operandStack) => {
  // get the top operator
  let operator = operatorStack.pop();

  // get the first opeand on the top
  let firstOperand = operandStack.pop();

  // get the second operand on the top
  let secondOperand = operandStack.pop();

  if (operator == "+") {
    operandStack.push(firstOperand + secondOperand);
  } else if (operator == "-") {
    operandStack.push(secondOperand - firstOperand);
  } else if (operator == "*") {
    operandStack.push(firstOperand * secondOperand);
  } else if (operator == "^") {
    operandStack.push(secondOperand ** firstOperand);
  } else if (operator == "/") {
    operandStack.push(secondOperand / firstOperand);
  } else {
    console.log("Invalid Operator " + operator);
    return;
  }
};

// It is used for calculating the expression
// DESC:
const calculateExpression = (expression, operatorStack, operandStack) => {
  // Loop through the expression
  for (let index = 0; index <= expression.length - 1; index++) {
    let item = expression[index];

    const singleEle = Number(item);

    if (!isNaN(singleEle)) {
      let number = singleEle;
      let innerIndex = index + 1;
      for (innerIndex; innerIndex <= expression.length - 1; innerIndex++) {
        let innerItem = expression[innerIndex];
        let innerInteger = Number(innerItem);
        if (!isNaN(innerInteger)) {
          number = number * 10 + innerInteger;
        } else {
          break;
        }
      }

      index = innerIndex - 1;

      operandStack.push(number);
    } else if (item == "(") {
      operatorStack.push(item);
    } else if (item == ")") {
      // you got the close bracket
      // It means pop out one operator and 2 operands uniil you got the (

      //this is while comment
      while (operatorStack[operatorStack.length - 1] != "(") {
        doOperation(operatorStack, operandStack);
      }
      operatorStack.pop();
    } else if (
      operatorStack.length > 0 &&
      precedence(item, operatorStack[operatorStack.length - 1])
    ) {
      // push the operator
      operatorStack.push(item);
    } else if (
      operatorStack.length > 0 &&
      !precedence(item, operatorStack[operatorStack.length - 1])
    ) {
      // pop out the operator and push the new operator
      while (
        operatorStack.length > 0 &&
        !precedence(item, operatorStack[operatorStack.length - 1])
      ) {
        doOperation(operatorStack, operandStack);
      }
      operatorStack.push(item);
    } else {
      operatorStack.push(item);
    }
  }
  while (operandStack.length != 1) {
    doOperation(operatorStack, operandStack);
  }

  return operandStack.pop();
};

const result = calculateExpression("2++2", operatorStack, operandStack);

console.log(result);

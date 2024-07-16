function precedence(operator1, operator2) {
  if (operator2 == "+" || operator2 == "-" || operator2 == "(") {
    return true;
  } else if (operator1 == "^" && operator2 == "^") {
    return true;
  } else if (
    (operator1 == "/" || operator1 == "*") &&
    (operator2 == "/" || operator2 == "*")
  ) {
    return true;
  } else {
    return false;
  }
}

doOperation = (operandStack, operatorStack) => {
  // get the top operator
  let operator = operatorStack[operatorStack.length - 1];
  operatorStack.pop();

  // get the first opeand on the top
  let firstOperand = operandStack[operandStack.length - 1];
  operandStack.pop();

  // get the second operand on the top
  let secondOperand = operandStack[operandStack.length - 1];
  operandStack.pop();

  if (operator == "+") {
    operandStack.push(firstOperand + secondOperand);
  } else if (operator == "-") {
    operandStack.push(firstOperand - secondOperand);
  } else if (operator == "*") {
    operandStack.push(firstOperand * secondOperand);
  } else if (operator == "/") {
    operandStack.push(firstOperand / secondOperand);
  } else {
    console.log("Invalid Operator " + operator);
    return;
  }
};

// It is used for calculating the expression
calculateExpression = (expression, operatorStack, operandStack) => {
  for (let index = 0; index <= expression.length - 1; index++) {
    let item = expression[index];
    console.log(item);
    const singleEle = Number(item);

    if (isNaN(singleEle)) {
      if (
        operatorStack.length == 0 ||
        precedence(item, operatorStack[operatorStack.length - 1] || item == "(")
      ) {
        operatorStack.push(item);
      } else if (item == ")") {
        // you got the close bracket
        // It means pop out one operator and 2 operands uniil you got the (

        while (operatorStack[operandStack.length - 1] != "(") {
          doOperation(operatorStack, operandStack);
        }
        operandStack.pop();
      } else if (!precedence(item, operatorStack[operatorStack.length - 1])) {
        while (!precedence(item, operatorStack[operatorStack.length - 1])) {
          doOperation(operatorStack, operandStack);
        }
        operandStack.push(item);
      }
    } else {
      operandStack.push(singleEle);
    }
  }
};

// this stack only stores the operator
let operatorStack = [];

// this stack only stores the operand
let operandStack = [];

calculateExpression("2*(5*(3+6))/15-2", operatorStack, operandStack);

console.log(operatorStack[operatorStack.length - 1]);

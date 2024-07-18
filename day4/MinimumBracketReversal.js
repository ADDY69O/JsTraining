const expression1 = "{{{";
const expression2 = "{{{}}";
const expression3 = "{{{{}}";
const expression4 = "{{{{";

const minimumBracketReversal = (expression) => {
  let openBrackets = 0;
  let closeBrackets = 0;

  for (let index = 0; index < expression.length; index++) {
    if (expression[index] == "{") {
      openBrackets++;
    } else {
      closeBrackets++;
    }
  }

  const resultantBracket = Math.abs(openBrackets - closeBrackets);
  if (resultantBracket % 2 == 0) {
    return resultantBracket / 2;
  } else {
    return -1;
  }
};

console.log("Expression 1 : Result " + minimumBracketReversal(expression1));
console.log("Expression 2 : Result " + minimumBracketReversal(expression2));
console.log("Expression 3 : Result " + minimumBracketReversal(expression3));
console.log("Expression 4 : Result " + minimumBracketReversal(expression4));

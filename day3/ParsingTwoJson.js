const assertObjectsEqual = (obj1, obj2, condition) => {
  let found = true;

  // logic 1 : check for the key value pair
  for (let ele in obj1) {
    if (obj2[ele] && obj2[ele] === obj1[ele]) {
      continue;
    } else {
      found = false;
      break;
    }
  }

  //   //logic 2 : this logic fails when we change the position of keys
  //   let ob2 = JSON.stringify(obj1);
  //   let ob1 = JSON.stringify(obj2);
  //   if (ob1 != ob2) {
  //     found = false;
  //   }
  let failedResult = "";

  // It require only for the false condition
  if (!found) {
    failedResult = "{";
    for (let ele in obj1) {
      failedResult += "“" + ele + "”" + ":" + obj1[ele] + ",";
    }
    failedResult = failedResult.slice(0, failedResult.length - 1);
    failedResult += "}, but got {";

    for (let ele in obj2) {
      failedResult += "“" + ele + "”" + ":" + obj2[ele] + ",";
    }
    failedResult = failedResult.slice(0, failedResult.length - 1);
    failedResult += "}";
  }

  // check if the object is same or not
  return found ? "Passed" : "Failed expected " + failedResult;
};
// try it for nesting
var expected = {
  foo: 4,
  bar: 6,
  hello: { foo: 4, bar: 6, bigoh: { foo: 4, bar: 6 } },
};
var actual = { bar: 6, foo: 7 };
var condition = "‘detects that two objects are equal’";
console.log(assertObjectsEqual(expected, actual, condition));

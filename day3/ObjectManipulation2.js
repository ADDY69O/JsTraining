const inputJson = {
  keyOne: "value One",
  keyTwo: "value Two",
  keyThree: "value Three",
  keyFour: {
    keyA: true,
    keyB: false,
    keyC: {
      keyCOne: "key C one value",
      keyCTwo: "key C two value",
      keyCThree: 1234,
      key4: {
        keyCOne: "key C one value",
        keyCTwo: "key C two value",
        keyCThree: 1234,
        keyFour: {
          keyA: true,
          keyB: false,
          keyC: {
            keyCOne: "key C one value",
            keyCTwo: "key C two value",
            keyCThree: 1234,
            key4: {
              keyCOne: "key C one value",
              keyCTwo: "key C two value",
              keyCThree: 1234,
            },
          },
          keyDD: {
            keyCOne: "key C one value",
            keyCTwo: "key C two value",
            keyCThree: 1234,
            key4: {
              keyCOne: "key C one value",
              keyCTwo: "key C two value",
              keyCThree: 1234,
            },
          },
          keyEE: {
            keyCOne: "key C one value",
            keyCTwo: "key C two value",
            keyCThree: 1234,
            key4: {
              keyCOne: "key C one value",
              keyCTwo: "key C two value",
              keyCThree: 1234,
            },
          },
        },
      },
    },
  },
};

const objectInnerChildManipulation = (prevKeyName, obj) => {
  let newJson = {};

  for (let element in obj) {
    if (
      typeof obj[element] == "object" &&
      Object.keys(obj[element]).length > 1
    ) {
      let newObjKeyName = prevKeyName + "." + element;
      let data = objectInnerChildManipulation(newObjKeyName, obj[element]);

      for (let singleData in data) {
        newJson[singleData] = data[singleData];
      }
    } else {
      newJson[prevKeyName + "." + element] = obj[element];
    }
  }
  return newJson;
};

// it is used for returning the main nesting of the array
const ObjectManipulation = (inputJson) => {
  // It stores the resultantant json
  let resultJson = {};

  // traverse the single element in the json
  for (let element in inputJson) {
    // object length is greater than 1 than required to show the nesting
    if (
      typeof inputJson[element] == "object" &&
      Object.keys(inputJson[element]).length > 1
    ) {
      // It gets the resultant json after nesting mapping
      let data = objectInnerChildManipulation(element, inputJson[element]);

      // traverse the json
      for (let singleData in data) {
        // append the json key with the value
        resultJson[singleData] = data[singleData];
      }
    } else {
      // directly append the key value pair
      resultJson[element] = inputJson[element];
    }
  }
  return resultJson;
};

const result = ObjectManipulation(inputJson);
console.log(result);

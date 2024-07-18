const sourceJson = [
  {
    batch_id: "123",
    name: "Tony",
    contact: "9872276210",
    phoneNumber: 123456789,
  },
  {
    batch_id: "231",
    name: "Steve",
    contact: "7876543210",
  },
  {
    batch_id: "123",
    name: "Bruce",
    contact: "6776543210",
  },
  {
    batch_id: "321",
    name: "Clint",
    contact: "8954643210",
  },
  {
    batch_id: "123",
    name: "Peter",
    contact: "7666543210",
  },
  {
    batch_id: "231",
    name: "Phil",
    contact: "8896543210",
  },
  {
    batch_id: "321",
    name: "Nick",
    contact: "9876521210",
  },
];

// const resultJson = [
//   {
//     123: [
//       {
//         name: "Tony",
//         contact: "9872276210",
//       },
//       {
//         name: "Bruce",
//         contact: "6776543210",
//       },
//       {
//         name: "Peter",
//         contact: "7666543210",
//       },
//     ],
//   },
//   {
//     231: [
//       {
//         name: "Steve",
//         contact: "7876543210",
//       },
//       {
//         name: "Phil",
//         contact: "8896543210",
//       },
//     ],
//   },
//   {
//     321: [
//       {
//         name: "Nick",
//         contact: "9876521210",
//       },
//       {
//         name: "Clint",
//         contact: "8954643210",
//       },
//     ],
//   },
// ];

// It is used for object manipulation for bundling the batch_id data
const objectManipulation = (sourceJson, map) => {
  // It stores the resulted data
  const resultData = [];

  for (let ele of sourceJson) {
    // check it map has already value it means data already fetched
    if (map.get(ele.batch_id) == undefined) {
      const batch_id = ele.batch_id;

      // here we get all the data with particulat id
      const filterResult = sourceJson.filter(
        (data) => data.batch_id === ele.batch_id
      );

      const particularBatchData = [];

      // here we add the data with batch id
      for (let innerEle of filterResult) {
        let newObj = new Object();

        // get all value except batchID
        for (let singleValue in innerEle) {
          if (singleValue != "batch_id") {
            newObj[singleValue] = innerEle[singleValue];
          }
        }

        particularBatchData.push(newObj);
      }

      // storing the data with the batch_id
      let newObj = new Object();
      newObj[batch_id] = particularBatchData;
      resultData.push(newObj);

      // marking true in map that we already fetched the data
      map.set(ele.batch_id, true);
    }
  }

  return resultData;
};

// Storing the batch id is used or not
const map = new Map();

const result = objectManipulation(sourceJson, map);

// It shows the resulted Object
for (let ele of result) {
  for (let innerEle in ele) {
    console.log("");
    console.log(innerEle + " : [");

    for (let innerEleArray of ele[innerEle]) {
      console.log(innerEleArray);
    }

    console.log(" ]");
  }
}

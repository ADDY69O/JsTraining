const data = {
  products: [
    { productName: "Laptop", price: "100000", rating: 4.0 },
    { productName: "Watch", price: "10000", rating: 3.5 },
    { productName: "phone", price: "15000", rating: 3.0 },
    { productName: "tablet", price: "30000", rating: 2.5 },
    { productName: "monitor", price: "13000", rating: 4.5 },
  ],
  name: "Aditya",
  age: 20,
  address: "Delhi",
  email: "aditya@gmail.com",
  phone: 1234567890,
  gender: "male",
  address: {
    add1: [
      {
        name: "",
        emgContact: [{ name: "", phone: "" }],
      },
    ],
  },
  phoneNumber: [1, 2, 3, 5, 6, { name: "nhipta" }],
};

const deepClone = (data) => {
  let deepCloneObj = {};

  for (let key in data) {
    if (
      !Array.isArray(data[key]) &&
      typeof data[key] == "object" &&
      data[key] !== null
    ) {
      deepCloneObj[key] = deepClone(data[key]);
    } else if (Array.isArray(data[key])) {
      deepCloneObj[key] = data[key].map((item) =>
        typeof item == "object" && !Array.isArray(item) ? deepClone(item) : item
      );
    } else {
      deepCloneObj[key] = data[key];
    }
  }

  return deepCloneObj;
};

const result = deepClone(data);
result.name = "Yash";
result.products[0].productName = "newProductName";
result.phoneNumber[5].name = "Aditya";
console.log(result);
console.log(data);

// const generateQuery = (queryParams, url) => {
//   return queryParams.reducer((acc, curr) => {
//     console.log(curr);
//     return acc + curr;
//   }, url + "?");
// };
// can't do with reducer because reducer work with array

const generateQuery = (queryParams, url) => {
  url = url + "?";

  for (query in queryParams) {
    // first append the key of the object
    url += query + "=";

    // Than add the value of the key
    url += queryParams[query] + "&";
  }
  return url.slice(0, url.length - 1);
};

const input = {
  keyOne: "Value One",
  keyTwo: "Value Two",
  keyThree: "Value Three",
};

const url = "https://localhost:400";
console.log("");
const result = generateQuery(input, url);
console.log("");

console.log(result);

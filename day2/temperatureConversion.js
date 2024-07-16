const fahrenheitToCelcius = (farhenheit) => {
  return ((farhenheit - 32) * 5) / 9;
};

const celciusToFarenheit = (celcius) => {
  return celcius * (9 / 5) + 32;
};

const conversion = (values, logic) => {
  for (let value of values) {
    console.log(value);
    console.log(logic(value));
  }
};

const celcius = [32, 37, 39];

const fahrenheit = [40, 55, 66];

conversion(celcius, celciusToFarenheit);

conversion(fahrenheit, fahrenheitToCelcius);

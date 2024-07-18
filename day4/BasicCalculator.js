class Calculator {
  constructor(value) {
    this.value = value;
  }

  add(...values) {
    console.log(values);
    // where is validator..
    this.value = values.reduce((acc, curr) => acc + curr, this.value);
  }

  subtract(...values) {
    console.log(values);
    this.value = values.reduce((acc, curr) => acc - curr, this.value);
  }

  division(...values) {
    console.log(values);
    this.value = values.reduce((acc, curr) => acc / curr, this.value);
  }
  multiplication(...values) {
    console.log(values);
    this.value = values.reduce((acc, curr) => acc * curr, this.value);
  }

  getValue() {
    console.log(this.value);
  }
}

let c1 = new Calculator(10);
delete (c1 = new Calculator("a" - "b")); // read about this
c1.getValue();
c1.add(1, 2, 3, 4);
c1.getValue();

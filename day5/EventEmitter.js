class EventEmitter {
  constructor() {
    this.events = {};
  }

  on(event, method) {
    if (typeof method !== "function") {
      console.log("required Function type methods");
    } else {
      if (!this.events[event]) {
        this.events[event] = [];
      }
      this.events[event].push(method);
    }
  }

  emit(event, ...args) {
    console.log(this.events[event]);
    if (this.events[event]) {
      console.log("event Found");
      this.events[event].forEach((eventMethod) => {
        setTimeout(() => {
          eventMethod(...args);
        }, Math.random() * 5 + 1000);
      });

      console.log("Successfully called all the methods");
    } else {
      console.log("No event handler for " + event);
    }
  }

  off(event, method) {
    if (this.events[event]) {
      this.events[event] = this.events[event].filter(
        (eventMethod) => eventMethod !== method
      );
      console.log("Event " + event + " removed Successfully");
    } else {
      console.log("No event handler for " + event);
    }
  }
}

//here new event is initialize with events={}
let MathOperations = new EventEmitter();

// here we created the function
let add = (...args) => {
  console.log(args);
  let totalSum = 0;
  for (let ele of args) {
    if (typeof ele == "number") {
      totalSum += ele;
    } else {
      console.log("Please enter only numbers");
      return;
    }
  }
  console.log(totalSum + " Result after addition");
};

let sub = (...args) => {
  let totalSub = 0;
  for (let ele of args) {
    if (typeof ele == "number") {
      totalSub -= ele;
    } else {
      console.log("Please enter only numbers");
      return;
    }
  }
  console.log(totalSub + " Result after substraction");
};

//here we add the function to the event
MathOperations.on("basicFunctions", add);
MathOperations.on("basicFunctions", sub);

// emit the added functions
MathOperations.emit("basicFunctions", 1, 2, 1);

MathOperations.off("basicFunctions");

MathOperations.emit("basicFunctions", 1, 2, 1);

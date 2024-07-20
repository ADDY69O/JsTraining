class MyPromise {
  constructor(executor) {
    this.status = "pending";
    this.value = null;
    this.onFulfilledCb = [];
    this.onRejectedCb = [];
  }

  then(onFulfilled, onRejected) {
    if (this.status == "fullfiled") {
      this.resolve(onFulfilled(this.value));
    } else if (this.status == "rejected") {
      this.resolve(onRejected(this.value));
    } else {
      this.resolve(onFulfilled);
      this.resolve(onRejected);
    }
  }

  catch(onRejected) {
    // Your code here
  }

  resolve(value) {
    this.status = "fullfiled";
    this.value = value;
    this.onFulfilledCb.forEach((cb) => cb(value));
  }

  reject(reason) {
    this.status = "rejected";
    this.value = reason;
    this.onRejectedCb.forEach((cb) => cb(reason));
  }
}

const promise = new MyPromise((resolve, reject) => {
  setTimeout(() => resolve("Resolved!"), 1000);
});

promise.then((value) => console.log(value));

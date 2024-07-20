class Lru {
  constructor(capacity) {
    this.capacity = capacity;
    this.cache = new Array();
  }

  get(key) {
    const result = this.cache.filter((file) => file.key == key);

    if (result.length > 0) {
      this.cache.splice(this.cache.indexOf(result[0]), 1);
      this.cache.unshift(result[0]);
      return result[0].value;
    } else {
      return -1;
    }
  }

  put(key, value) {
    const result = this.cache.filter((file) => file.key == key);
    if (result.length > 0) {
      this.cache.splice(this.cache.indexOf(result[0]), 1);
      this.cache.unshift({ key: key, value: value });
    } else {
      if (this.cache.length >= this.capacity) {
        this.cache.pop();
      }
      this.cache.unshift({ key: key, value: value });
    }
  }

  showArray() {
    console.log("[");
    for (let ele of this.cache) {
      console.log(ele);
    }
    console.log("]");
  }
}

let lruEle = new Lru(3);

lruEle.put(1, 1);
lruEle.put(2, 2);
lruEle.showArray();
console.log("*************");
console.log(lruEle.get(1));
lruEle.showArray();
console.log("*************");
lruEle.put(3, 3);
console.log(lruEle.get(2));
lruEle.showArray();
console.log("*************");
lruEle.put(4, 4);
lruEle.showArray();
console.log("*************");
lruEle.get(3);
lruEle.showArray();
console.log("*************");

// naming converntion
// ===
//ternary operator
//comment

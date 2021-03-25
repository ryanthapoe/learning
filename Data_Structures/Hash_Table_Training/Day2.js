class HashTable {
  constructor(size = 50) {
    this.data = new Array(50);
  }

  set(key, value) {
    const hashAddr = this._hash(key);
    if (!this.data[hashAddr]) this.data[hashAddr] = [];
    this.data[hashAddr].push([key, value]);
    return hashAddr;
  }

  get(key) {
    const hashAddr = this._hash(key);
    const dataArr = this.data[hashAddr];
    let result;
    dataArr.forEach((data) => {
      if (data[0] === key) result = data[1];
    });
    return result;
  }

  keys() {
    const keys = [];
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i]) {
        this.data[i].forEach((data) => keys.push(data[0]));
      }
    }
    return keys.join(",");
  }

  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i)) % this.data.length;
    }
    return hash;
  }
}

const tester = new HashTable();
console.log(tester.set("grapes", 1000));
console.log(tester.set("apples", 1));
console.log(tester.set("orange", 1));
console.log(tester.set("watermelon", 31));
console.log(tester.set("mango", 0));
console.log(tester.set("pineApple", 32));
console.log(tester.set("Nanas", 33));
console.log(tester);
console.log(tester.get("grapes"));
console.log(tester.get("watermelon"));
console.log(tester.get("pineApple"));
console.log(tester.get("Nanas"));
console.log(tester.keys());

class HashTable {
  constructor(size = 50) {
    this.data = new Array(size);
  }

  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i)) % key.length;
    }
    return hash;
  }

  print() {
    const data = [];
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i]) {
        for (let j = 0; j < this.data[i].length; j++) {
          data.push(this.data[i][j][1]);
        }
      }
    }
    return data;
  }

  set(key, value) {
    const address = this._hash(key);
    if (!this.data[address]) this.data[address] = [];
    this.data[address].push([key, value]);
    return this.print();
  }

  get(key) {
    const address = this._hash(key);
    const bucket = this.data[address];
    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === key) return bucket[i][1];
    }
  }

  keys() {
    const keys = [];
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i]) {
        for (let j = 0; j < this.data[i].length; j++) {
          keys.push(this.data[i][j][0]);
        }
      }
    }
    return keys;
  }
}
const tester = new HashTable();
console.log(tester.set("grapes", 1000));
console.log(tester.set("apples", 1));
console.log(tester.set("orange", 2));
console.log(tester.set("watermelon", 31));
console.log(tester.set("mango", 0));
console.log(tester.set("pineApple", 32));
console.log(tester.set("Nanas", 33));
console.log(tester.get("grapes"));
console.log(tester.get("watermelon"));
console.log(tester.get("pineApple"));
console.log(tester.get("Nanas"));
console.log(tester.keys());

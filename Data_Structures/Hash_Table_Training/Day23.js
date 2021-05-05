class HashTable {
  constructor(size) {
    this.data = new Array(size);
  }

  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i)) % key.length;
    }
    return hash;
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
    if (bucket) {
      for (let i = 0; i < bucket.length; i++) {
        if (bucket[i][0] === key) return bucket[i][1];
      }
    }
    return undefined;
  }

  print() {
    return this.getArr(1);
  }

  keys() {
    return this.getArr(0);
  }

  getArr(index) {
    const data = [];
    for (let i = 0; i < this.data.length; i++) {
      const bucket = this.data[i];
      if (bucket) {
        for (let j = 0; j < bucket.length; j++) {
          if (bucket[j][index] !== undefined) data.push(bucket[j][index]);
        }
      }
    }
    return data;
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

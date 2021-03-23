class HashTable {
  constructor(size) {
    this.data = new Array(size);
  }

  set(key, value) {
    const address = this._hash(key);
    if (!this.data[address]) {
      this.data[address] = [];
    }
    this.data[address].push([key, value]);
    return address; // 0(1)
  }

  get(key) {
    const bucket = this.data[this._hash(key)];
    if (bucket) {
      for (let i = 0; i < bucket.length; i++) {
        if (bucket[i][0] === key) return bucket[i][1];
      }
    }
    return undefined; // 0(1) if no collision
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

  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }
}

const testHash = new HashTable(50);
console.log(testHash.set("grapes", 1000));
console.log(testHash.get("grapes"));
console.log(testHash.set("apple", 500));
console.log(testHash.get("apple"));
console.log(testHash.get("orange"));
console.log(testHash.set("orange", 100));
console.log(testHash.keys());

const hash = {
  grapes: 1000,
};

console.log(hash.grapes);

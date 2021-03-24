class HashTable {
  constructor(size) {
    this.data = new Array(size);
  }

  get(key) {
    const hashAddr = this._hash(key);
    const bucket = this.data[hashAddr];
    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === key) return bucket[i][1];
    }
    return undefined;
  }

  set(key, value) {
    const hashAddr = this._hash(key);
    if (!this.data[hashAddr]) this.data[hashAddr] = [];
    this.data[hashAddr].push([key, value]);
    return hashAddr;
  }

  keys() {
    const keys = [];
    this.data.forEach((d) => {
      if (typeof d === "object") {
        d.forEach((v) => {
          keys.push(v[0]);
        });
      }
    });
    return keys;
  }

  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % key.length;
    }
    return hash;
  }
}

const testing = new HashTable(10);
console.log(testing.set("grapes", 1000));
console.log(testing.set("apples", 1));
console.log(testing.set("orange", 1));
console.log(testing.set("watermelon", 31));
console.log(testing.set("mango", 0));
console.log(testing.set("pineApple", 32));
console.log(testing.set("Nanas", 33));
console.log(testing);
console.log(testing.get("grapes"));
console.log(testing.get("watermelon"));
console.log(testing.get("pineApple"));
console.log(testing.get("Nanas"));
console.log(testing.keys());

class HashTable {
  constructor(size) {
    this.data = new Array(size);
  }

  set(key, value) {
    if (this.data[this._hash(key)]) {
      this.data[this._hash(key)].push([key, value]);
    } else {
      this.data[this._hash(key)] = [[key, value]];
    }
    return this._hash(key);
  }

  get(key) {
    const arr = this.data[this._hash(key)];
    const data = arr.filter((d) => d[0] === key);
    return data[0][1];
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

const hash = {
  grapes: 1000,
};

console.log(hash.grapes);

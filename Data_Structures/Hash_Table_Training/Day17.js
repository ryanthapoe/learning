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
    return this.traverseTable(1);
  }

  keys() {
    return this.traverseTable(0);
  }

  traverseTable(index) {
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

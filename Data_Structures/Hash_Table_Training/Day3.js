class Hash_Table {
  constructor(size = 50) {
    this.data = new Array(size);
  }

  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash * key.codeCharAt(i)) % key.length;
    }
    return hash;
  }

  set(key, value) {
    const address = this._hash(key);
    if (!this.data[address]) this.data[address] = [];
    this.data[address].push([key, value]);
    return address;
  }

  get(key) {
    const address = this._hash(key);
    const arrData = this.data[address];
    for (let i = 0; i < arrData.length; i++) {
      if (arrData[i][0] === key) return arrData[i][1];
    }
    return undefined;
  }

  keys() {
    const keys = [];
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i]) {
        for (let j = 0; j < this.data[i].length; i++) {
          keys.push(this.data[i][j][0]);
        }
      }
    }
    return keys.toString();
  }
}

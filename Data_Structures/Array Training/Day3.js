class NewArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  get(index) {
    return this.data[index];
  }

  push(data) {
    this.data[this.length] = data;
    this.length += 1;
    return this.length;
  }

  pop() {
    const deleted = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length -= 1;
    return deleted;
  }

  // add(index, value) is a bad method to have except to add item in the first index of array
  add(value) {
    this.unshift(0);
    this.data[0] = value;
    return this.length;
  }

  unshift(index) {
    let nextVal = this.data[index];
    for (let i = index; i < this.length; i++) {
      let saved;
      this.data[i + 1] ? (saved = this.data[i + 1]) : (saved = 0);
      this.data[i + 1] = nextVal;
      nextVal = saved;
    }
    this.length += 1;
  }

  remove(index) {
    const deleted = this.data[index];
    this.shift(index);
    delete this.data[this.length - 1];
    this.length -= 1;
    return deleted;
  }

  shift(index) {
    for (let i = index; i < this.length; i++) {
      this.data[i] = this.data[i + 1];
    }
  }
}
const testArray = new NewArray();
console.log(testArray);
console.log(testArray.push("Hello"));
console.log(testArray.push("World"));
console.log(testArray.push("Good"));
console.log(testArray.push("Morning"));
console.log(testArray.add("the"));
console.log(testArray);

console.log(testArray.pop());
console.log(testArray.pop());

console.log(testArray.remove(0));

console.log(testArray);

console.log(testArray.add("Ada"));
console.log(testArray.push("asdad"));
console.log(testArray);

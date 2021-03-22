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
    this.length++;
    return this.length;
  }

  pop() {
    const deleted = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return deleted;
  }

  remove(index) {
    const removed = this.data[index];
    this.shift(index);
    delete this.data[this.length - 1];
    this.length--;
    return removed;
  }

  shift(index) {
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
  }
}

const newArray = new NewArray();
console.log(newArray);
console.log(newArray.push("tester"));
console.log(newArray.push("kedua"));
console.log(newArray);
console.log(newArray.push("dipop"));
console.log(newArray.pop());
console.log(newArray.remove(0));
console.log(newArray);

class NewArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  get(index) {
    return this.data[index];
  }

  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.length;
  }

  pop() {
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastItem;
  }

  delete(index) {
    const item = this.data[index];
    this.shiftItems(index);
    return item;
  }

  shiftItems(index) {
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
    this.pop();
  }
}

const testArray = new NewArray();
console.log(testArray);
console.log(testArray.push("Tester"));
console.log(testArray.get(0));
console.log(testArray.push("deleted"));
console.log(testArray.get(1));
console.log(testArray.push("third"));
console.log(testArray.delete(0));
// console.log(testArray.pop());
// console.log(testArray.pop());
console.log(testArray);

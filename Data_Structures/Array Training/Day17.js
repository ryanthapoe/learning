class NewArray {
  constructor() {
    this.data = {};
    this.length = 0;
  }

  print() {
    return this.data;
  }

  push(data) {
    this.data[this.length] = data;
    this.length++;
    return this.print();
  }

  pop() {
    delete this.data[this.length - 1];
    this.length--;
    return this.print();
  }

  insert(index, data) {
    this.length++;
    this.shiftFromEnd(index);
    this.data[index] = data;
    return this.print();
  }

  shiftFromEnd(index) {
    for (let i = this.length - 1; i > index; i--) {
      this.data[i] = this.data[i - 1];
    }
  }

  remove(index) {
    this.shiftToIndex(index);
    return this.pop();
  }

  shiftToIndex(index) {
    for (let i = index; i < this.length; i++) {
      this.data[i] = this.data[i + 1];
    }
  }

  lookup(index) {
    return this.data[index];
  }
}

const tester = new NewArray();
console.log(tester.push("pertama"));
console.log(tester.push("kedua"));
console.log(tester.push("ketiga"));
console.log(tester.push("keempat"));
console.log(tester.push("kelima"));
console.log(tester.pop());
console.log(tester.remove(0));
console.log(tester.insert(0, "index 0"));
console.log(tester.insert(0, "pertama"));
console.log(tester.insert(3, "paling pertama"));
console.log(tester.remove(3, "paling pertama"));
console.log(tester.lookup(0));
console.log(tester.insert(0, "new"));

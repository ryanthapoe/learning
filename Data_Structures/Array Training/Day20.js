class NewArray {
  constructor() {
    this.data = [];
    this.length = 0;
  }

  push(data) {
    this.data[this.length] = data;
    this.length++;
    return this.print();
  }

  print() {
    return this.data;
  }

  pop() {
    delete this.data[this.length - 1];
    this.length--;
    return this.print();
  }

  insert(index, data) {
    this.length++;
    this.shift(index, true);
    this.data[index] = data;
    return this.print();
  }

  remove(index) {
    this.shift(index);
    return this.pop();
  }

  lookup(index) {
    return this.data[index];
  }

  shift(index, toEnd) {
    if (toEnd) {
      for (let i = this.length - 1; i >= index; i--) {
        this.data[i] = this.data[i - 1];
      }
    } else {
      for (let i = index; i < this.length; i++) {
        this.data[i] = this.data[i + 1];
      }
    }
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
console.log(tester.pop(1));

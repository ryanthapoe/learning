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
    this.shiftToEnd(index);
    this.data[index] = data;
    return this.print();
  }

  lookup(index) {
    return this.data[index];
  }

  shiftToEnd(index) {
    let p1 = this.data[index],
      p2;
    for (let i = 1; i < this.length; i++) {
      p2 = this.data[i];
      this.data[i] = p1;
      p1 = p2;
    }
  }

  remove(index) {
    this.shiftToStart(index);
    return this.pop();
  }

  shiftToStart(index) {
    for (let i = index; i < this.length; i++) {
      this.data[i] = this.data[i + 1];
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
console.log(tester.insert(0, "paling pertama"));
console.log(tester.lookup(0));
console.log(tester.insert(0, "new"));

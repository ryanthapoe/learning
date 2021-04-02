class NewArray {
  constructor() {
    this.length = 0;
    this.data = {};
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

  lookup(index) {
    return this.data[index];
  }

  insert(index, data) {
    let temp1 = this.data[index],
      temp2;
    this.length++;
    for (let i = index + 1; i < this.length; i++) {
      temp2 = this.data[i];
      this.data[i] = temp1;
      temp1 = temp2;
    }
    this.data[index] = data;
    return this.print();
  }

  remove(index) {
    for (let i = index; i < this.length; i++) {
      this.data[index] = this.data[index + 1];
    }
    return this.pop();
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

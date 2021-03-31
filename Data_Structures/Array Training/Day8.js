class NewArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  printList() {
    return this.data;
  }

  push(data) {
    this.data[this.length] = data;
    this.length++;
    return this.printList();
  }

  pop() {
    delete this.data[this.length - 1];
    this.length--;
    return this.printList();
  }

  remove(index) {
    this.shift(index);
    return this.pop();
  }

  shift(index) {
    for (let i = index; i < this.length; i++) {
      this.data[i] = this.data[i + 1];
    }
  }

  unshift(data) {
    let stored = this.data[0],
      temp;
    this.length++;
    for (let i = 1; i < this.length; i++) {
      temp = this.data[i];
      this.data[i] = stored;
      stored = temp;
    }
    this.data[0] = data;
    return this.printList();
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
console.log(tester.unshift("index 0"));
console.log(tester.unshift("pertama"));
console.log(tester.unshift("paling pertama"));

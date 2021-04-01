class NewArray {
  constructor() {
    this.data = {};
    this.length = 0;
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

  lookup(index) {
    return this.data[index];
  }

  unshift(data) {
    let p1 = this.data[0],
      p2;
    this.length++;
    for (let i = 1; i < this.length; i++) {
      p2 = this.data[i];
      this.data[i] = p1;
      p1 = p2;
    }
    this.data[0] = data;
    return this.printList();
  }

  insert(index, data) {
    let p1 = this.data[index],
      p2;
    this.length++;
    for (let i = index + 1; i < this.length; i++) {
      p2 = this.data[i];
      this.data[i] = p1;
      p1 = p2;
    }
    this.data[index] = data;
    return this.printList();
  }

  remove(index) {
    for (let i = index; i < this.length; i++) {
      this.data[i] = this.data[i + 1];
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
console.log(tester.unshift("index 0"));
console.log(tester.unshift("pertama"));
console.log(tester.unshift("paling pertama"));

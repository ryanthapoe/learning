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
    const removed = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return removed;
  }

  delete(index) {
    const removed = this.data[index];
    this.shift(index);
    delete this.data[this.length - 1];
    this.length--;
    return removed;
  }

  shift(index) {
    for (let i = index; i < this.length; i++) {
      this.data[i] = this.data[i + 1];
    }
  }

  unshift(data) {
    let p1 = this.length[0];
    let p2;
    this.length++;
    for (let i = 0; i < this.length; i++) {
      p2 = this.data[i];
      this.data[i] = p1;
      p1 = p2;
    }
    this.data[0] = data;
    return this.length;
  }
}

const tester = new NewArray();
console.log(tester);
console.log(tester.push("pertama"));
console.log(tester.push("kedua"));
console.log(tester.push("ketiga"));
console.log(tester.push("keempat"));
console.log(tester.push("kelima"));
console.log(tester);
console.log(tester.pop());
console.log(tester.delete(0));
console.log(tester);
console.log(tester.unshift("index 0"));
console.log(tester);
console.log(tester.unshift("pertama"));
console.log(tester.unshift("paling pertama"));
console.log(tester);

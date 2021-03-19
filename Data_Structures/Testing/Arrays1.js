class Array1 {
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

  remove(index) {
    const removed = this.data[index];
    this.shift(index);
    return removed;
  }

  shift(index) {
    for (let i = index; i < this.length; i++) {
      console.log(i);
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
  }
}

const tester = new Array1();

console.log(tester);
console.log(tester.push("Good"));
console.log(tester.push("Day"));
console.log(tester.push("Mr."));
console.log(tester.push("Array"));
console.log(tester.pop());
console.log(tester.remove(1));
console.log(tester.get(0));
console.log(tester);

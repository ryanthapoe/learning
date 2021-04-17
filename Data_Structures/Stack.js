class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    this.head = new Node(value);
    this.tail = this.head;
    this.length = 1;
  }

  print() {
    const data = [];
    let current = this.head;
    while (current != null) {
      data.push(current.value);
      current = current.next;
    }
    return data;
  }

  append(value) {
    const newNode = new Node(value);
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this.print();
  }

  prepend(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this.print();
  }

  lookup(index) {
    const data = this.traverseToIndex(index);
    return data.value;
  }

  insert(index, value) {
    if (index === 0) return this.prepend(value);
    if (index >= this.length) return this.append(value);
    const newNode = new Node(value);
    const leader = this.traverseToIndex(index - 1);
    const next = leader.next;
    leader.next = newNode;
    newNode.next = next;
    this.length++;
    return this.print();
  }

  remove(index) {
    const leader = this.traverseToIndex(index - 1);
    const removed = leader.next;
    leader.next = removed.next;
    this.length--;
    return this.print();
  }

  traverseToIndex(index) {
    let current = this.head;
    for (let i = 1; i <= index; i++) {
      current = current.next;
    }
    return current;
  }

  reverse() {
    if (!this.head.next) return this.head.value;
    let first = this.head;
    this.tail = this.head;
    let second = first.next;
    while (second) {
      const temp = second.next;
      second.next = first;
      first = second;
      second = temp;
    }
    this.head.next = null;
    this.head = first;
    return this.print();
  }
}

// With Array
class Stack {
  constructor() {
    this.data = [];
  }

  length() {
    return this.data.length;
  }

  push(data) {
    this.data.push(data);
    return this.peek();
  }

  pop() {
    return this.data.pop();
  }

  peek() {
    return this.data[this.length() - 1];
  }

  lookup(index) {
    return this.data[index - this.length()];
  }
}

// With LinkedList
class LinkedListStack {
  constructor(value) {
    this.data = new LinkedList(value);
  }

  push(value) {
    return this.data.append(value);
  }

  pop() {
    const data = this.data.lookup(this.length() - 1);
    this.data.remove(this.length() - 1);
    return data;
  }

  length() {
    return this.data.length;
  }

  peek() {
    return this.data.lookup(this.length() - 1);
  }

  lookup(index) {
    if (index >= this.length()) return undefined;
    const data = this.data.lookup(index);
    return data;
  }
}

const tester = new Stack();
console.log(tester.push(1));
console.log(tester.push(2));
console.log(tester.peek());
console.log(tester.push(3));
console.log(tester.peek());
console.log(tester.pop());
console.log(tester.peek());
console.log(tester.length());
console.log(tester.lookup(3));

const testLinked = new LinkedListStack(6);
console.log(testLinked.push(1));
console.log(testLinked.push(2));
console.log(testLinked.peek());
console.log(testLinked.push(3));
console.log(testLinked.peek());
console.log(testLinked.pop());
console.log(testLinked.peek());
console.log(testLinked.length());
console.log(testLinked.data.print());
// console.log(testLinked.print());
console.log(testLinked.lookup(2));

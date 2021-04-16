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

const tester = new LinkedList(10);
console.log(tester.append(5));
console.log(tester.append(16));
console.log(tester.prepend(12));
console.log(tester.lookup(2));
console.log(tester.insert(0, 8));
console.log(tester.insert(888, 555));
console.log(tester.insert(2, "deleted"));
console.log(tester.remove(2));
console.log(tester.remove(tester.length - 1));
console.log(tester.length);
console.log(tester.reverse());
console.log(tester.append("Last"));
console.log(tester.reverse());

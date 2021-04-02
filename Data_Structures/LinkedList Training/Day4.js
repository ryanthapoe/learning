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
    while (current.next !== null) {
      data.push(current.value);
      current = current.next;
    }
    data.push(current.value);
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
    return this.traverseToIndex(index).value;
  }

  traverseToIndex(index) {
    let current = this.head;
    for (let i = 1; i <= index; i++) {
      current = current.next;
    }
    return current;
  }

  insert(index, value) {
    if (index >= this.length) return this.prepend(value);
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
}

const tester = new LinkedList(10);
console.log(tester.append(5));
console.log(tester.append(16));
console.log(tester.prepend(12));
console.log(tester.lookup(2));
console.log(tester.insert(55, 8));
console.log(tester.insert(56, 555));
console.log(tester.remove(5));
console.log(tester.remove(tester.length - 1));

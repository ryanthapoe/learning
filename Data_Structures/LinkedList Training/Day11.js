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

  append(value) {
    const newValue = new Node(value);
    this.tail.next = newValue;
    this.tail = newValue;
    this.length++;
    return this.print();
  }

  prepend(value) {
    const newValue = new Node(value);
    newValue.next = this.head;
    this.head = newValue;
    this.length++;
    return this.print();
  }

  print() {
    let current = this.head;
    const data = [];
    while (current != null) {
      data.push(current.value);
      current = current.next;
    }
    return data;
  }

  lookup(index) {
    const data = this.traverseToIndex(index);
    return data.value;
  }

  insert(index, value) {
    if (index === 0) return this.prepend(value);
    if (index >= this.length) return this.append(value);
    const newValue = new Node(value);
    const leader = this.traverseToIndex(index - 1);
    const next = leader.next;
    leader.next = newValue;
    newValue.next = next;
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

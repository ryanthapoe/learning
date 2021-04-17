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

  print(value) {
    const data = [];
    let current = this.head;
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

  traverseToIndex(index) {
    let current = this.head;
    for (let i = 1; i <= index; i++) {
      current = current.next;
    }
    return current;
  }

  insert(index, value) {
    if (index >= this.length) return this.append(value);
    if (index === 0) return this.prepend(value);
    const newNode = new Node(value);
    const leader = this.traverseToIndex(index - 1);
    const next = leader.next;
    leader.next = newNode;
    newNode.next = next;
    this.length++;
    return this.print();
  }

  remove(index) {
    if (index === 0) return `Cannot remove Head Node`;
    if (index >= this.length) return undefined;
    const leader = this.traverseToIndex(index - 1);
    const removed = leader.next;
    leader.next = removed.next;
    this.length--;
    return this.print();
  }

  reverse() {
    let first = this.head,
      second = first.next;
    this.tail = this.head;
    while (second) {
      const third = second.next;
      second.next = first;
      first = second;
      second = third;
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

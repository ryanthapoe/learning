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

  print() {
    let current = this.head;
    const data = [];
    while (current) {
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
    if (index === 0) return this.prepend(value);
    if (index >= this.length) return this.append(value);
    const newNode = new Node(value);
    const leader = this.traverseToIndex(index - 1);
    const follower = leader.next;
    leader.next = newNode;
    newNode.next = follower;
    this.length++;
    return this.print();
  }

  remove(index) {
    if (index === 0) return `Cannot remove head`;
    if (index >= this.length) return `Index out of bound`;
    const leader = this.traverseToIndex(index - 1);
    const deleted = leader.next;
    const follower = deleted.next;
    leader.next = follower;
    this.length--;
    return this.print();
  }

  reverse() {
    let p1 = this.head,
      p2 = p1.next;
    this.tail = this.head;
    while (p2) {
      const p3 = p2.next;
      p2.next = p1;
      p1 = p2;
      p2 = p3;
    }
    this.head = p1;
    this.tail.next = null;
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

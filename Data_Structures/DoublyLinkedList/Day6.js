class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor(value) {
    this.head = new Node(value);
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const newNode = new Node(value);
    this.tail.next = newNode;
    newNode.prev = this.tail;
    this.tail = newNode;
    this.length++;
    return this.print();
  }

  prepend(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head.prev = newNode;
    this.head = newNode;
    this.length++;
    return this.print();
  }

  print() {
    const data = [];
    let current = this.head;
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
    const next = leader.next;
    leader.next = newNode;
    newNode.prev = leader;
    newNode.next = next;
    next.prev = newNode;
    this.length++;
    return this.print();
  }

  remove(index) {
    if (index === 0) return `Cannot delete head`;
    const leader = this.traverseToIndex(index - 1);
    const deleted = leader.next;
    const next = deleted.next;
    leader.next = next;
    next.prev = leader;
    this.length--;
    return this.print();
  }

  reverse() {
    let p1 = this.head,
      p2 = p1.next;
    this.tail = this.head;
    this.tail.next = null;
    while (p2) {
      const p3 = p2.next;
      p2.next = p1;
      p1 = p2;
      p2 = p3;
    }
    this.head = p1;
    return this.print();
  }
}

const tester = new DoublyLinkedList(1);
console.log(tester.append(2));
console.log(tester.prepend(0));
console.log(tester.lookup(2));
console.log(tester.insert(2, "Deleted"));
console.log(tester.insert(1, "FirstStuff"));
console.log(tester.insert(999, "LastStuff"));
console.log(tester.remove(3));
console.log(tester.print());
console.log(tester.reverse());

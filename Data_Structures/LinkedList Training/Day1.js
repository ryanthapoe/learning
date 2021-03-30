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
    this.length = 0;
  }

  printList() {
    const data = [];
    let current = this.head;
    while (current !== null) {
      data.push(current.value);
      current = current.next;
    }
    return data;
  }
  append(value) {
    const newNode = new Node(value);
    this.head.next = newNode;
    this.tail = newNode;
    this.length++;
    return this.printList();
  }
  prepend(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this.printList();
  }

  lookup(index) {
    if (index >= this.length) return undefined;
    const data = this.traverseToIndex(index);
    return data.value;
  }

  traverseToIndex(index) {
    let current = this.head;
    for (let i = 0; i < index; i++) {
      current = current.next;
    }
    return current;
  }

  insert(index, value) {
    const leader = this.traverseToIndex(index - 1);
    const afterLeader = leader.next;
    const newNode = new Node(value);
    newNode.next = afterLeader;
    leader.next = newNode;
    return this.printList();
  }

  remove(index) {
    const leader = this.traverseToIndex(index - 1);
    const deleted = leader.next;
    leader.next = deleted.next;
    return this.printList();
  }
}

const tester = new LinkedList(10);
console.log(tester.append(5));
console.log(tester.append(16));
console.log(tester.prepend(12));
console.log(tester.lookup(2));
console.log(tester.insert(2, 8));
console.log(tester.remove(1));
console.log(tester.remove(tester.length - 1));

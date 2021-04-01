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

  printList() {
    const data = [];
    let current = this.head;
    while (current !== null) {
      data.push(current.value);
      current = current.next;
    }
    return data;
  }

  lookup(index) {
    const data = this.traverseToIndex(index);
    return data.value;
  }

  append(value) {
    const newNode = new Node(value);
    this.tail.next = newNode;
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

  insert(index, value) {
    if (index >= this.length) return this.append(value);
    const newNode = new Node(value);
    const leader = this.traverseToIndex(index - 1);
    const next = leader.next;
    leader.next = newNode;
    newNode.next = next;
    this.length++;
    return this.printList();
  }

  remove(index) {
    if (index === 0) return "Cannot Delete Head";
    if (index >= this.length) return undefined;
    const leader = this.traverseToIndex(index - 1);
    const deleted = leader.next;
    leader.next = deleted.next;
    this.length--;
    return this.printList();
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
console.log(tester.insert(55, 8));
console.log(tester.insert(56, 555));
console.log(tester.remove(5));
console.log(tester.remove(tester.length - 1));

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
    let current = this.head;
    const data = [];
    while (current !== null) {
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
    const data = this.traverseToIndex(index);
    return data.value;
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
    return this.printList();
  }

  remove(index) {
    if (index === 0) return "Cannot remove head list";
    if (index > this.length) return undefined;
    const leader = this.traverseToIndex(index - 1);
    const deleted = leader.next;
    leader.next = deleted.next;
    this.length--;
    return this.printList();
  }

  traverseToIndex(index) {
    let current = this.head;
    let i = 0;
    while (i < index) {
      current = current.next;
      i++;
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
console.log(tester.remove(8));
console.log(tester.remove(tester.length - 1));

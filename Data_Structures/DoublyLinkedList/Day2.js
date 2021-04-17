class Node {
  constructor(value) {
    this.value = value;
    this.prev = null;
    this.next = null;
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
    newNode.prev = leader;
    leader.next = newNode;
    next.prev = newNode;
    newNode.next = next;
    this.length++;
    return this.print();
  }

  remove(index) {
    if (index === 0) return `Cannot remove Head Node`;
    if (index >= this.length) return undefined;
    const leader = this.traverseToIndex(index - 1);
    const removed = leader.next;
    removed.next.prev = leader;
    leader.next = removed.next;
    this.length--;
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
console.log(tester.print(true));

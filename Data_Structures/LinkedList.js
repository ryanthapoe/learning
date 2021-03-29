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
    this.tail = this.tail.next;
    this.length++;
    return this.length;
  }

  prepend(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this.length;
  }

  lookup(value) {
    let current = this.head;
    while (true) {
      if (current.value === value) {
        return current;
      }
      current = current.next;
    }
  }

  insert(index, value) {
    if (index === 0) return this.prepend(value);
    if (index >= this.length) return "Index undefined";
    const newNode = new Node(value);
    let current = this.head;
    for (let i = 1; i < index; i++) {
      current = current.next;
    }
    newNode.next = current.next;
    current.next = newNode;
    this.length++;
    return this.length;
  }

  delete(index) {
    if (index === 0) return "Cannot delete head index";
    if (index >= this.length) return undefined;
    let current = this.head,
      prev,
      next;
    for (let i = 0; i < index; i++) {
      prev = current;
      current = current.next;
      next = current.next;
    }
    prev.next = next;
    this.length--;
    return current.value;
  }

  printList() {
    const data = [];
    let current = this.head;
    while (current !== null) {
      data.push(current.value);
      current = current.next;
    }
    return data.toString();
  }
}

const tester = new LinkedList(10);
console.log(tester.printList());
console.log(tester.append(5));
console.log(tester.printList());
console.log(tester.append(16));
console.log(tester.printList());
console.log(tester.prepend(12));
console.log(tester.printList());
console.log(tester.lookup(10));
console.log(tester.insert(2, 8));
console.log(tester.printList());
console.log(tester.delete(1));
console.log(tester.printList());

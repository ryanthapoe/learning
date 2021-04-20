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
    const newValue = new Node(value);
    this.tail.next = newValue;
    newValue.prev = this.tail;
    this.tail = newValue;
    this.length++;
    return this.print();
  }

  prepend(value) {
    const newValue = new Node(value);
    newValue.next = this.head;
    this.head.prev = newValue;
    this.head = newValue;
    this.length++;
    return this.print();
  }

  print(reverse) {
    const data = [];
    if (reverse) {
      let current = this.tail;
      while (current != null) {
        data.push(current.value);
        current = current.prev;
      }
    } else {
      let current = this.head;
      while (current != null) {
        data.push(current.value);
        current = current.next;
      }
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
    newNode.prev = leader;
    newNode.next = next;
    next.prev = newNode;
    this.length++;
    return this.print();
  }

  remove(index, value) {
    if (index === 0) return `Cannot delete head`;
    const leader = this.traverseToIndex(index - 1);
    const removed = leader.next;
    leader.next = removed.next;
    removed.next.prev = leader;
    this.length--;
    return this.print();
  }
}

class LinkedList {
  constructor(value) {
    this.head = {
      value,
      next: null,
    };
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const newValue = {
      value,
      next: null,
    };
    this.tail.next = newValue;
    this.tail = this.tail.next;
    this.length++;
    return this.length;
  }

  prepend(value) {
    const newValue = {
      value,
      next: this.head,
    };
    this.head = newValue;
    this.length++;
    return this.length;
  }

  lookup(value) {
    let found = false;
    let current = this.head;
    while (!found) {
      if (current.value === value) {
        return current;
      }
      current = current.next;
    }
  }

  insert(index, value) {
    if (index === 0) return this.prepend(value);
    if (index >= this.length) return "Index undefined";
    let current = this.head;
    for (let i = 1; i < index; i++) {
      current = current.next;
    }
    const newValue = {
      value,
      next: current.next,
    };
    current.next = newValue;
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
}

const tester = new LinkedList(10);
console.log(tester);
console.log(tester.append(5));
console.log(tester);
console.log(tester.append(16));
console.log(tester);
console.log(tester.prepend(12));
console.log(tester);
console.log(tester.lookup(10));
console.log(tester.insert(2, 8));
console.log(tester.head);
console.log(tester.delete(1));
console.log(tester.head);

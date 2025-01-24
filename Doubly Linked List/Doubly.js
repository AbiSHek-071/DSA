class Node {
  constructor(data) {
    this.data = data;
    this.prev = null;
    this.next = null;
  }
}
class List {
  constructor() {
    this.head = null;
  }
  size() {
    let count = 0;
    let current = this.head;
    while (current) {
      count++;
      current = current.next;
    }
    return count;
  }

  print() {
    let current = this.head;
    while (current) {
      console.log("Node:", current.data);
      current = current.next;
    }
  }
  addTop(data) {
    const newNode = new Node(data);
    newNode.next = this.head;
    if (this.head) {
      this.head.prev = newNode;
    }
    this.head = newNode;
  }
  addLast(data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
      return;
    }
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    newNode.prev = current;
    current.next = newNode;
  }
  addAt(index, data) {
    if (index < 0 || index > this.size()) {
      console.log("invalid index; fuck you");
      return;
    }

    const newNode = new Node(data);

    if (index === 0) {
      const newNode = new Node(data);
      newNode.next = this.head;
      if (this.head) {
        this.head.prev = newNode;
      }
      this.head = newNode;
      return;
    }

    let current = this.head;
    for (let i = 0; i < index - 1; i++) {
      current = current.next;
    }
    newNode.prev = current;
    newNode.next = current.next;
    if (current.next) {
      current.next.prev = newNode;
    }
    current.next = newNode;
  }
  removeTop() {
    if (!this.head) {
      return;
    }
    this.head = this.head.next;
    if (this.head) {
      this.head.next.prev = null;
    }
  }
  removeLast() {
    let current = this.head;
    while (current.next.next) {
      current = current.next;
    }
    current.next = null;
  }
  removeAt(index) {
    if (index < 0 || index > this.size()) {
      console.log("Invalid Index");
      return;
    }
    if (index === 0) {
      this.head = this.head.next;
      if (this.head) {
        this.head.prev = null;
      }
    }
    let current = this.head;
    for (let i = 0; i < index - 1; i++) {
      current = current.next;
    }
    if (current.next) {
      current.next = current.next.next;
      if (current.next) {
        current.next.prev = current;
      }
    }
  }
}
const Double = new List();
Double.addTop(50);
Double.addLast(71);
Double.addAt(1, 55);
Double.print();
console.log("size:", Double.size());

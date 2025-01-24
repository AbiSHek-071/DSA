//Node
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

//linked List

class LinkedList {
  constructor() {
    this.head = null;
  }

  addFirst(data) {
    const newNode = new Node(data);
    newNode.next = this.head;
    this.head = newNode;
  }
  addLast(data) {
    const newNode = new Node(data);
    //if there is no nodes in head directly inser in this.head
    if (!this.head) {
      this.head = newNode;
      return;
    }
    let current = this.head;
    //if there is a current.next keep traversing untill current.next == null
    while (current.next) {
      current = current.next;
    }

    current.next = newNode;
  }
  size() {
    let count = 0;
    let current = this.head;

    while (current) {
      current = current.next;
      count++;
    }
    return count;
  }

  addAt(data, index) {
    if (index < 0 || index > this.size()) {
      console.error("invalid index");
      return;
    }
    const newNode = new Node(data);
    if (index === 0) {
      newNode.next = this.head;
      this.head = newNode;
      return;
    }
    let current = this.head;
    for (let i = 0; i < index - 1; i++) {
      current = current.next;
    }
    newNode.next = current.next;
    current.next = newNode;
  }
  removeTop() {
    if (!this.head) {
      return;
    }
    this.head = this.head.next;
  }
  removeLast() {
    if (!this.head) {
      return;
    }
    let current = this.head;
    while (current.next.next) {
      current = current.next;
    }
    current.next = null;
  }
  removeAt(index) {
    if (index < 0 || index > this.size()) {
      console.error("Invalid Index");
      return;
    }
    if (index === 0) {
      this.head = this.head.next;
      return;
    }
    let current = this.head;
    for (let i = 0; i < index - 1; i++) {
      current = current.next;
    }
    if (current.next) {
      current.next = current.next.next;
    }
  }
  print() {
    let current = this.head;
    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }
}

const linkedList = new LinkedList();
linkedList.addFirst(4);
linkedList.addFirst(7);
linkedList.addFirst(6);
linkedList.addLast(8);
linkedList.removeTop();
linkedList.removeAt(2);
linkedList.print();
console.log("The size", linkedList.size());

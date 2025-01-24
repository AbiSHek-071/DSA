class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
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
  addTop(data) {
    const newNode = new Node(data);
    newNode.next = this.head;
    this.head = newNode;
  }
  addEnd(data) {
    const newNode = new Node(data);
    if (!this.head) {
      newNode.next = this.head;
      this.head = newNode;
      return;
    }
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = newNode;
  }
  addMiddle(data) {
    const newNode = new Node(data);
    let slow = this.head;
    let fast = this.head;

    while (fast.next && fast.next.next) {
      fast = fast.next.next;
      slow = slow.next;
    }
    newNode.next = slow.next;
    slow.next = newNode;
  }
  print() {
    console.log("here is the Linked list");
    let current = this.head;
    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }
  revers() {
    let prev = null;
    let current = this.head;

    while (current) {
      const nextNode = current.next;
      current.next = prev;
      prev = current;
      current = nextNode;
    }
    this.head = prev;
  }
}

const list = new LinkedList();
list.addTop(5);
list.addTop(10);
list.addMiddle(2);
list.addEnd(11);
// list.revers();
list.print();

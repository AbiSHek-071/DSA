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
  /////////////////  //adding//  ///////////////
  addFirst(data) {
    const newNode = new Node(data);
    newNode.next = this.head;
    this.head = newNode;
  }
  addLast(data) {
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
  size() {
    if (!this.head) {
      return "First go make a list bro";
    }
    let current = this.head;
    let count = 0;
    while (current) {
      current = current.next;
      count++;
    }
    return count;
  }
  addAt(index, data) {
    if (index > this.size() || index < 0) {
      console.error("fuck you");
      return;
    }
    const newNode = new Node(data);
    if (index === 0) {
      newNode.next = this.head;
      this.head = newNode;
    }
    let current = this.head;
    for (let i = 0; i < index - 1; i++) {
      current = current.next;
    }
    newNode.next = current.next;
    current.next = newNode;
  }
  addMiddle(data) {
    const newNode = new Node(data);

    if (!this.head) {
      this.head = newNode;
      return;
    }

    let slow = this.head;
    let fast = this.head;

    while (fast.next && fast.next.next) {
      slow = slow.next;
      fast = fast.next.next;
    }

    newNode.next = slow.next;
    slow.next = newNode;
  }
  removeEnd() {
    if (!this.head) {
      return;
    }
    let current = this.head;
    while (current.next.next) {
      current = current.next;
    }
    current.next = null;
  }

  //////////////////// // removing // ////////////

  removeFirst() {
    this.head = this.head.next;
    return;
  }
  removeMiddle() {
    if (!this.head) {
      return;
    }
    let prv = null;
    let slow = this.head;
    let fast = this.head;

    while (fast.next && fast.next.next) {
      prv = slow;
      slow = slow.next;
      fast = fast.next.next;
    }
    prv.next = slow.next;
  }
  reverse() {
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

  print() {
    console.log("here is the Linked list");
    let current = this.head;
    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }
}

const thisList = new LinkedList();
thisList.addFirst(5);
thisList.addFirst(10);
thisList.addFirst(71);
thisList.addFirst(70);
thisList.addLast(22);
thisList.addLast(11);
// thisList.addAt(1, 55);
thisList.addMiddle(555);
// thisList.removeFirst();
// thisList.removeEnd();
// thisList.removeMiddle();
thisList.removeMiddle();
thisList.reverse();
thisList.print();

console.log("theSize:", thisList.size());

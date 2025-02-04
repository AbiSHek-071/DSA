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
  addTop(data) {
    const newNode = new Node(data);
    newNode.next = this.head;
    this.head = newNode;
  }
  addEnd(data) {
    const newNode = new Node(data);
    if (!this.head) {
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

    while (fast && fast.next) {
      fast = fast.next.next;
      slow = slow.next;
    }
    newNode.next = slow.next;
    slow.next = newNode;
  }
  addAt(index, data) {
    const newNode = new Node(data);
    if (index > this.size()) {
      console.log("Invalid index. Cannot add at this position.");
      return;
    }
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
      console.log("no nodes");
      return;
    }
    this.head = this.head.next;
  }
  removeEnd() {
    if (!this.head) {
      console.log("No nodes to remove.");
      return;
    }
    if (!this.head.next) {
      this.head = null;
      return;
    }

    let current = this.head;
    while (current.next.next) {
      current = current.next;
    }
    current.next = null;
  }
  removeMiddle() {
    let slow = this.head;
    let fast = this.head;
    while (fast && fast.next) {
      slow = slow.next;
      fast = fast.next.next;
    }
    slow.next = slow.next.next;
  }
  removeAt(index) {
    if (index === 0) {
      this.removeTop();
      return;
    }

    if (index >= this.size() || index < 0) {
      console.log("Invalid index. Cannot add at this position.");
      return;
    }
    let current = this.head;
    for (let i = 0; i < index - 1; i++) {
      current = current.next;
    }
    current.next = current.next.next;
  }

  printAll() {
    let current = this.head;
    let count = 0;
    while (current) {
      console.log("Node", count, " : ", current.data);
      current = current.next;
      count++;
    }
  }

  isEmpty() {
    return this.head === null;
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
}

console.log("Linked List 1");

const linkedList1 = new LinkedList();
linkedList1.addTop(7);
linkedList1.addTop(11);
linkedList1.addEnd(5);
linkedList1.addEnd(71);
linkedList1.addEnd(77);
linkedList1.addMiddle(505);
linkedList1.addAt(2, 333);
linkedList1.printAll();

// console.log(
//   ".................................................................."
// );

// console.log("Linked List 2");

// const linkedList2 = new LinkedList();
// linkedList2.addTop(5);
// linkedList2.addEnd(7);
// linkedList2.addEnd(1);
// linkedList2.addMiddle(505);
// linkedList2.addAt(2, 333);
// linkedList2.printAll();

// function mergeList(list1, list2) {
//   const dummyNode = new Node(-1);
//   let tail = dummyNode;

//   let current1 = list1.head;
//   let current2 = list2.head;

//   while (current1 && current2) {
//     if (current1.data <= current2.data) {
//       tail.next = current1;
//       current1 = current1.next;
//     } else {
//       tail.next = current2;
//       current2 = current2.next;
//     }
//     tail = tail.next;
//   }

//   if (current1) {
//     tail.next = current1;
//   }
//   if (current2) {
//     tail.next = current2;
//   }

//   const mergedList = new LinkedList();
//   mergedList.head = dummyNode.next;
//   return mergedList;
// }

// console.log(
//   ".................................................................."
// );

// console.log("Merged List");
// const mergedList = mergeList(linkedList1, linkedList2);
// mergedList.printAll();

function findMiddle(list1) {
  let slow = list1.head;
  let fast = list1.head;
  let prev = null;

  while (fast && fast.next) {
    prev = slow;
    slow = slow.next;
    fast = fast.next.next;
  }

  return prev;
}

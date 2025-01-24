class QueueNode {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }
  enqueue(data) {
    const newNode = new QueueNode(data);
    if (this.tail) {
      this.tail.next = newNode;
    }
    this.tail = newNode;
    if (!this.head) {
      this.head = newNode;
    }
    this.size++;
  }
  dequeue() {
    const enqueueValue = this.head.data;
    this.head = this.head.next;
    if (!this.head) {
      this.tail = null;
    }
    this.size--;
  }
  peek() {
    if (this.tail) {
      console.log("peekaboo:", this.head.data);
    } else {
      console.log("No elements in the list");
    }
  }
  printAll() {
    let current = this.head;
    while (current != null) {
      console.log(current.data);
      current = current.next;
    }
  }
  isEmpty() {
    return this.size === 0;
  }
}

const queue = new Queue();
queue.enqueue(5);
queue.enqueue(10);
queue.enqueue(71);
queue.printAll();

// queue.peek();

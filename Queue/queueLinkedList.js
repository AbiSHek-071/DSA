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
    if (this.isEmpty()) {
      return console.log("nothing doing");
    }
    const dequeueValue = this.head.data;
    this.head = this.head.next;
    if (!this.head) {
      this.tail.null;
    }
    this.size--;
    return dequeueValue;
  }
  printAll() {
    if (this.isEmpty()) {
      console.log("The queue is empty.");
      return;
    }

    let current = this.front;
    const elements = [];

    while (current !== null) {
      elements.push(current.data); // Collect data from each node
      current = current.next; // Move to the next node
    }

    console.log("Queue elements:", elements.join(" -> "));
  }
  peek() {
    if (this.isEmpty()) {
      return console.log("nothing doing");
    }
    return this.head.data;
  }
  isEmpty() {
    return this.size === 0;
  }
}

const queue = new Queue();
queue.enqueue(5);
queue.enqueue(10);
queue.enqueue(11);
queue.enqueue(16);
queue.dequeue();
console.log(queue.peek());

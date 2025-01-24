class MyQueue {
  constructor() {
    this.stack1 = [];
    this.stack2 = [];
  }
  enqueue(element) {
    return this.stack1.push(element);
  }
  dequeue() {
    if (this.stack1.length !== 0) {
      while (this.stack1.length > 0) {
        this.stack2.push(this.stack1.pop());
      }
    }
    this.stack2.pop();
  }
  peek() {
    if (this.stack1.length !== 0) {
      while (this.stack1.length > 0) {
        this.stack2.push(this.stack1.pop());
      }
    }
    return this.stack2[this.stack2.length - 1];
  }
  isEmpty() {
    return this.stack1.length === 0 && this.stack2.length === 0;
  }
}

const myQueue = new MyQueue();
myQueue.enqueue(5);
myQueue.enqueue(10);
console.log(myQueue.peek());

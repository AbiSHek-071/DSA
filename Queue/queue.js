class Queue {
  constructor() {
    this.items = [];
  }
  enqueue(element) {
    this.items.push(element);
  }
  dequeue() {
    if (this.isEmpty()) {
      return console.log("under flow");
    }
    this.items.shift();
  }
  size() {
    return this.items.length;
  }
  isEmpty() {
    return this.size() === 0;
  }
  fornt() {
    // or peak()
    if (this.isEmpty()) {
      return "under flow , no element in the array";
    }
    return this.items[0];
  }
  printAll() {
    for (let i = 0; i < this.size(); i++) {
      console.log(this.items[i]);
    }
    return this.items;
  }
}
const queue = new Queue();
queue.enqueue(5);
queue.enqueue(71);
queue.enqueue(7);
queue.dequeue();
console.log(queue.fornt());

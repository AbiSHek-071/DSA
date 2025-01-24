class stackNode {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.size = 0;
  }
  push(data) {
    const newNode = new stackNode(data);
    newNode.next = this.top;
    this.top = newNode;
    this.size++;
  }
  pop() {
    if (this.isEmpty()) {
      return console.log("ther is nothing to pop, Fuck You");
    }
    const popValue = this.top.data;
    this.top = this.top.next;
    this.size--;
    return popValue;
  }
  peek() {
    if (this.isEmpty()) {
      return console.log("ther is nothing to pop, Fuck You");
    }
    return this.top.data;
  }
  printAll() {
    c;
    if (this.isEmpty()) {
      console.log("The stack is empty.");
      return;
    }

    let current = this.top;
    const elements = [];

    while (current !== null) {
      elements.push(current.data);
      current = current.next;
    }

    console.log("Stack elements:", elements.join(" ::> "));
  }
  isEmpty() {
    return this.size === 0;
  }
}

const stack = new Stack();
stack.push(5);
stack.push(11);
stack.push(55);
console.log(stack.peek());
stack.printAll();

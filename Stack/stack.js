class Stack {
  constructor() {
    this.stack = [];
  }
  isEmpty() {
    if (this.size() === 0) {
      return true;
    } else {
      return false;
    }
  }
  size() {
    return this.stack.length;
  }
  push(element) {
    this.stack.push(element);
  }
  pop() {
    if (this.isEmpty()) {
      return console.log("stack is Empty");
    }
    return this.stack.pop();
  }
  peek() {
    if (this.isEmpty()) {
      return console.log("stack is Empty");
    }

    return this.stack[this.size() - 1];
  }
  printall() {
    if (this.isEmpty()) {
      return console.log("its empty my firend");
    }
    for (let i = 0; i < this.size(); i++) {
      console.log(this.stack[i]);
    }
  }
}
const stack = new Stack();
stack.push(10);
stack.push(69);
stack.push(71);
stack.printall();

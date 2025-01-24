class Mystack {
  constructor() {
    this.q1 = [];
    this.q2 = [];
  }
  push(element) {
    while (this.q1.length !== 0) {
      this.q2.push(this.q1.shift());
    }
    this.q1.push(element);
    while (this.q2.length !== 0) {
      this.q1.push(this.q2.shift());
    }
  }

  pop() {
    return this.q1.shift();
  }
  printAll() {
    let i = 0;
    while (i !== this.q1.length) {
      console.log(this.q1[i]);
      i++;
    }
  }
  peak() {
    return this.q1[0];
  }
  isEmpty() {
    return this.q1.length === 0;
  }
}

const stack = new Mystack();
stack.push(10);
stack.push(22);
stack.push(4);
stack.pop();
stack.printAll();
// console.log(stack.peak());

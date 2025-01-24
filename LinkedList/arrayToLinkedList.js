const arr = [1, 2, 3, 4, 5];

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
  arrayToList(arr) {
    if (arr.length <= 0) {
      console.log("fuck you");
    }
    for (let i = 0; i < arr.length; i++) {
      const newNode = new Node(arr[i]);
      newNode.next = this.head;
      this.head = newNode;
    }
  }
  print() {
    let current = this.head;
    while (current) {
      console.log("value :", current.data);

      current = current.next;
    }
  }
}

const list = new LinkedList();
list.arrayToList(arr);
list.print();

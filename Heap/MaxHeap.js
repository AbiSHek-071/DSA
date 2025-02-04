class MaxHeap {
  constructor() {
    this.heap = [];
  }

  // To swap 2 numbers if they are not in the right position
  swap(i, j) {
    [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
  }

  bubbleUp(i) {
    const parentIndex = Math.floor((i - 1) / 2);
    if (i > 0 && this.heap[i] > this.heap[parentIndex]) {
      this.swap(i, parentIndex);
      this.bubbleUp(parentIndex);
    }
  }

  bubbleDown(i) {
    const leftChild = 2 * i + 1;
    const rightChild = 2 * i + 2;
    let largest = i;

    if (
      leftChild < this.heap.length &&
      this.heap[leftChild] > this.heap[largest]
    ) {
      largest = leftChild;
    }

    if (
      rightChild < this.heap.length &&
      this.heap[rightChild] > this.heap[largest]
    ) {
      largest = rightChild;
    }

    if (largest !== i) {
      this.swap(i, largest);
      this.bubbleDown(largest);
    }
  }

  getHeap() {
    return this.heap;
  }

  insert(data) {
    this.heap.push(data);
    this.bubbleUp(this.heap.length - 1);
  }

  remove() {
    if (this.heap.length === 0) return null;
    if (this.heap.length === 1) return this.heap.pop();

    const max = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.bubbleDown(0);

    return max;
  }
}

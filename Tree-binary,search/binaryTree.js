class TreeNode {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  insert(data) {
    const newNode = new TreeNode(data);

    // when there is no root node insert the new Node there
    if (!this.root) {
      this.root = newNode;
      return;
    }

    //else create a queue to traverse through the nodes
    const queue = [this.root];
    while (queue.length) {
      // remove and assaign the element from the front of the queue to current
      let current = queue.shift();
      // that node doesn't have a left node assign the new node to the left
      if (!current.left) {
        current.left = newNode;
        return;
      } else {
        // if there is a left node push the left node to the queue in order to travers in the next iteration
        queue.push(current.left);
      }
      // then check if there is right node, if not assign the new node to the right .
      if (!current.right) {
        current.right = newNode;
        return;
      } else {
        // if there is it will push to the queue in order to traverse in the next iteration
        queue.push(current.right);
      }
    }
  }
  // Pre-Order Traversal (Root -> Left -> Right)
  preOrder(node = this.root) {
    //base case
    if (!node) return;
    console.log(node.data);
    //recursivly call the function to traverse through the left tree
    this.preOrder(node.left);
    //recursivly call the function to traverse through the right tree
    this.preOrder(node.right);
  }

  // Post-Order Traversal (Left -> Right -> Root)
  postOrder(node = this.root) {
    //base case
    if (!node) return;
    //recursivly call the function to traverse through the left tree
    this.postOrder(node.left);
    //recursivly call the function to traverse through the right tree
    this.postOrder(node.right);
    //and finally return the data
    console.log(node.data);
  }
  // in-Order Traversal (Left -> root -> Right)
  inOrder(node = this.root) {
    //base case
    if (!node) return;
    //recursivly call the function to traverse through the left tree
    this.inOrder(node.left);
    //Log the data in between
    console.log(node.data);
    //recursivly call the function to traverse through the right tree
    this.inOrder(node.right);
  }
}

const tree = new BinaryTree();
tree.insert("A");
tree.insert("B");
tree.insert("C");
tree.insert("D");
tree.insert("E");
tree.insert("F");
console.log("-------Pre Order--------");
tree.preOrder();
console.log("-------Post Order--------");
tree.postOrder();
console.log("-------In Order--------");
tree.inOrder();

class TreeNode {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  // To insert
  insert(data) {
    const newNode = new TreeNode(data);
    if (!this.root) {
      this.root = newNode;
      return;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  //To Insert a Node
  insertNode(node, newNode) {
    if (node.data > newNode.data) {
      if (!node.left) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else {
      if (!node.right) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  }
  // check if the tree contains a perticular value or not
  contains(data, node = this.root) {
    if (!node) return false;
    if (node.data === data) return true;
    if (node.data > data) {
      return this.contains(data, node.left);
    } else {
      return this.contains(data, node.right);
    }
  }

  // traverse through the BST
  preOrder(node = this.root, result = []) {
    if (!node) return result;
    result.push(node.data);
    this.preOrder(node.left, result);
    this.preOrder(node.right, result);
    return result;
  }
  postOrder(node = this.root, result = []) {
    if (!node) return result;
    this.postOrder(node.left, result);
    this.postOrder(node.right, result);
    result.push(node.data);

    return result;
  }
  inOrder(node = this.root, result = []) {
    if (!node) return result;
    this.inOrder(node.left, result);
    result.push(node.data);
    this.inOrder(node.right, result);

    return result;
  }

  findMin(node) {
    while (node.left) {
      node = node.left;
    }
    return node;
  }

  // deleting the node
  delete(data, node = this.root) {
    if (!node) return null;

    if (data < node.data) {
      node.left = this.delete(data, node.left);
    } else if (data > node.data) {
      node.right = this.delete(data, node.right);
    } else {
      if (!node.left && !node.right) return null;

      if (!node.left) return node.right;
      if (!node.right) return node.left;

      const minVal = this.findMin(node.right);
      node.data = minVal.data;
      node.right = this.delete(minVal.data, node.right);
    }
    return node;
  }

  // find if it is BST or NOT
  isBST(node = this.root, minVal = -Infinity, maxVal = Infinity) {
    if (!node) return true;
    if (node.data < minVal || node.data > maxVal) return false;
    return (
      this.isBST(node.left, minVal, node.data) &&
      this.isBST(node.right, node.data, maxVal)
    );
  }
  //is identical to check two trees are same or not
  isIdentical(tree1, tree2) {
    if (!tree1 && !tree2) {
      return true;
    }
    if (!tree1 || !tree2) {
      return false;
    }
    return (
      tree1.data === tree2.data &&
      this.isIdentical(tree1.left, tree2.left) &&
      this.isIdentical(tree1.right, tree2.right)
    );
  }

  //level vise traersing
  BFS() {
    if (!this.root) {
      return [];
    }
    const queue = [this.root];
    const result = [];

    while (queue.length > 0) {
      const current = queue.shift();
      result.push(current.data);
      if (current.left) {
        queue.push(current.left);
      }
      if (current.right) {
        queue.push(current.right);
      }
    }
    return result;
  }

  //find the height
  findHeight(node = this.root) {
    if (!node) {
      return -1;
    }
    const leftChild = this.findHeight(node.left);
    const rightChild = this.findHeight(node.right);

    return Math.max(leftChild, rightChild) + 1;
  }

  // to find a tree is balanced or not. the height difference between left and right tree could not be more than 1
  isBalanced(node = this.root) {
    if (!node) {
      return true;
    }
    const leftHeight = this.findHeight(node.left);
    const rightHeight = this.findHeight(node.right);

    const diff = Math.abs(leftHeight - rightHeight);

    if (diff <= 1) {
      return this.isBalanced(node.left) && this.isBalanced(node.right);
    } else {
      return false;
    }
  }

  // THE FUNCTIONS TO BUILD A BALANCED TREE FROM AN SORTED ARRAY
  balance() {
    const sortedArr = this.inOrder();
    this.root = this.buildBalancedTree(sortedArr);
  }
  buildBalancedTree(sortedArr) {
    if (sortedArr.length === 0) {
      return null;
    }
    const mid = Math.floor(sortedArr.length / 2);
    const newNode = new TreeNode(sortedArr[mid]);

    newNode.left = this.buildBalancedTree(sortedArr.slice(0, mid));
    newNode.right = this.buildBalancedTree(sortedArr.slice(mid + 1));

    return newNode;
  }
}

// Create a new Binary Search Tree instance
const tree = new BST();

// Insert values into the tree
tree.insert(10);
tree.insert(5);
tree.insert(20);
tree.insert(15);
tree.insert(25);
tree.insert(7);
tree.insert(3);

// 1. Test the contains method
console.log("Contains 10: ", tree.contains(10)); // Expected: true
console.log("Contains 8: ", tree.contains(8)); // Expected: false

// 2. Test preOrder traversal (Root, Left, Right)
console.log("PreOrder Traversal: ", tree.preOrder()); // Expected: [10, 5, 3, 7, 20, 15, 25]

// 3. Test inOrder traversal (Left, Root, Right)
console.log("InOrder Traversal: ", tree.inOrder()); // Expected: [3, 5, 7, 10, 15, 20, 25]

// 4. Test postOrder traversal (Left, Right, Root)
console.log("PostOrder Traversal: ", tree.postOrder()); // Expected: [3, 7, 5, 15, 25, 20, 10]

// 5. Test BFS (Level-order traversal)
console.log("BFS Traversal: ", tree.BFS()); // Expected: [10, 5, 20, 3, 7, 15, 25]

// 6. Test delete method
tree.delete(15); // Deleting node with value 15
console.log("InOrder Traversal after deleting 15: ", tree.inOrder()); // Expected: [3, 5, 7, 10, 20, 25]

tree.delete(10); // Deleting the root node (10)
console.log("InOrder Traversal after deleting 10: ", tree.inOrder()); // Expected: [3, 5, 7, 20, 25]

// 7. Test isBST method
console.log("Is the tree a valid BST? ", tree.isBST()); // Expected: true (if the tree is a BST)

// 8. Test isIdentical method (Create another tree and compare)
const tree2 = new BST();
tree2.insert(5);
tree2.insert(3);
tree2.insert(7);
tree2.insert(10);
tree2.insert(20);
tree2.insert(15);
tree2.insert(25);

console.log(
  "Are tree and tree2 identical? ",
  tree.isIdentical(tree.root, tree2.root)
); // Expected: false

// 9. Test findHeight method
console.log("Height of the tree: ", tree.findHeight()); // Expected: 2 (based on the current structure)

// 10. Test isBalanced method
console.log("Is the tree balanced? ", tree.isBalanced()); // Expected: true (if the tree is balanced)

// 11. Test balance method (Balance the tree)
tree.balance();
console.log("InOrder Traversal after balancing: ", tree.inOrder()); // Expected: [3, 5, 7, 10, 20, 25] (sorted tree)

// 12. Test isBalanced again after balancing
console.log("Is the tree balanced after balancing? ", tree.isBalanced()); // Expected: true

// 13. Test findMin method
const minNode = tree.findMin(tree.root);
console.log("Minimum value in the tree: ", minNode.data); // Expected: 3

// 14. Test delete method with node without children
tree.delete(25); // Deleting leaf node 25
console.log("InOrder Traversal after deleting 25: ", tree.inOrder()); // Expected: [3, 5, 7, 10, 20]

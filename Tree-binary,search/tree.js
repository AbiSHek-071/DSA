class TreeNode {
  constructor(data) {
    this.data = data;
    this.children = []; // The arra is used to store child nodes
  }
}

class Tree {
  constructor() {
    this.root = null;
  }

  insert(parentData, data) {
    const newNode = new TreeNode(data);
    if (this.root === null) {
      if (parentData === null) {
        this.root = newNode;
        return;
      }
    }

    const parent = this.findNode(this.root, parentData);
    if (parent) {
      parent.children.push(newNode);
    } else {
      console.log("Parent Not Found");
    }
  }

  // find a node in the tree
  findNode(node, data) {
    if (node === null) return null;
    if (node.data === data) return node;

    for (let child of node.children) {
      const found = this.findNode(child, data);
      if (found) return found;
    }
    return null;
  }

  ///Traverse through each nodes from the root
  preOrder(node = this.root) {
    if (!node) {
      return;
    }
    console.log("Data : ", node.data);

    for (let child of node.children) {
      this.preOrder(child);
    }
  }
}

const tree = new Tree();
tree.insert(null, "A");
tree.insert("A", "1");
tree.insert("A", "2");
tree.insert("A", "3");
tree.insert("1", "X");
tree.insert("X", "70");

tree.preOrder();

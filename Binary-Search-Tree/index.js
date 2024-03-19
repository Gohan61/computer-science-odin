class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class Tree {
  constructor(array) {
    this.array = array;
    this.root = null;
  }

  buildTree() {
    const sortedArray = [...new Set(this.array)].sort((a, b) => a - b);
    let start = 0;
    let end = sortedArray.length - 1;

    function sortedArrayToBst(array, start, end) {
      if (start > end) {
        return null;
      }

      let mid = parseInt((start + end) / 2);
      let node = new Node(array[mid]);

      node.left = sortedArrayToBst(array, start, mid - 1);
      node.right = sortedArrayToBst(array, mid + 1, end);
      return node;
    }

    return (this.root = sortedArrayToBst(sortedArray, start, end));
  }

  insert(num, root = this.root) {
    if (root === null) {
      root = new Node(num);
      return (this.root = root);
    }

    if (num < root.data) {
      root.left = this.insert(num, root.left);
    } else if (num > root.data) {
      root.right = this.insert(num, root.right);
    }

    return (this.root = root);
  }

  print(node = this.root) {
    const prettyPrint = (node, prefix = "", isLeft = true) => {
      if (node === null) {
        return;
      }
      if (node.right !== null) {
        prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
      }
      console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
      if (node.left !== null) {
        prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
      }
    };
    prettyPrint(node);
  }

  delete(num, root = this.root) {
    if (root === null) {
      return root;
    }

    if (root.data > num) {
      root.left = this.delete(num, root.left);
      return root;
    } else if (root.data < num) {
      root.right = this.delete(num, root.right);
      return root;
    }

    if (root.left === null) {
      let temp = root.right;
      delete root.data;
      return temp;
    } else if (root.right === null) {
      let temp = root.left;
      delete root.data;
      return temp;
    } else {
      let parent = root;

      let child = root.right;
      while (child.left !== null) {
        parent = child;
        child = child.left;
      }

      if (parent !== root) {
        parent.left = parent.right;
      } else {
        parent.right = child.right;
      }

      root.data = child.data;

      delete child.data;
      return (this.root = root);
    }
  }

  find(value, root = this.root) {
    if (root.data === value) {
      return root;
    } else if (value < root.data) {
      return this.find(value, root.left);
    } else if (value > root.data) {
      return this.find(value, root.right);
    }
  }

  levelOrder(callback = null) {
    const orderQueue = [];
    const treeValues = [];
    let currentNode = this.root;

    orderQueue.push(this.root);
    while (orderQueue.length !== 0) {
      treeValues.push(currentNode.data);
      if (currentNode.left !== null) {
        orderQueue.push(currentNode.left);
      }
      if (currentNode.right !== null) {
        orderQueue.push(currentNode.right);
      }
      currentNode = orderQueue[1];
      if (callback) callback(orderQueue[1]);
      orderQueue.shift();
    }
    return treeValues;
  }

  inOrder(root = this.root, treeValues = [], callback = null) {
    if (root) {
      this.inOrder(root.left, treeValues);

      treeValues.push(root.data);

      this.inOrder(root.right, treeValues);
    }

    if (callback) {
      treeValues.forEach((node) => callback(node));
    }
    return treeValues;
  }

  preOrder(root = this.root, treeValues = [], callback = null) {
    if (root) {
      treeValues.push(root.data);

      this.preOrder(root.left, treeValues);

      this.preOrder(root.right, treeValues);
    }
    if (callback) {
      treeValues.forEach((node) => callback(node));
    }
    return treeValues;
  }

  postOrder(root = this.root, treeValues = [], callback = null) {
    if (root) {
      this.postOrder(root.left, treeValues);

      this.postOrder(root.right, treeValues);

      treeValues.push(root.data);
    }

    if (callback) {
      treeValues.forEach((node) => callback(node));
    }
    return treeValues;
  }

  height(node = this.root) {
    if (!node) {
      return 0;
    }

    return 1 + Math.max(this.height(node.left), this.height(node.right));
  }

  depth(node, root = this.root, count = 0) {
    if (node.data === root.data) {
      return count;
    } else if (node.data < root.data) {
      if (root.left === null) {
        return null;
      } else {
        return this.depth(node, root.left, ++count);
      }
    } else {
      if (root.right === null) {
        return null;
      } else {
        return this.depth(node, root.right, ++count);
      }
    }
  }

  isBalanced(root = this.root) {
    if (root === null) {
      return true;
    }

    let leftHeight = this.height(root.left);
    let rightHeight = this.height(root.right);

    if (
      Math.abs(leftHeight - rightHeight) <= 1 &&
      this.isBalanced(root.left) === true &&
      this.isBalanced(root.right) === true
    ) {
      return true;
    }

    return false;
  }
}

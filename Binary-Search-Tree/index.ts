class NewNode {
  data: number;
  left: NewNode | null;
  right: NewNode | null;

  constructor(data: number) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class Tree {
  array: number[];
  root: NewNode | null;

  constructor(array: number[]) {
    this.array = array;
    this.root = null;
  }

  buildTree(array: number[] = this.array) {
    const sortedArray: number[] = [...new Set(array)].sort((a, b) => a - b);
    let start = 0;
    let end = sortedArray.length - 1;

    function sortedArrayToBst(array: number[], start: number, end: number) {
      if (start > end) {
        return null;
      }

      let mid: number = Math.floor((start + end) / 2);
      let node: NewNode = new NewNode(array[mid]);

      node.left = sortedArrayToBst(array, start, mid - 1);
      node.right = sortedArrayToBst(array, mid + 1, end);
      return node;
    }

    return (this.root = sortedArrayToBst(sortedArray, start, end));
  }

  insert(num: number, root: NewNode | null = this.root): NewNode {
    if (root === null) {
      return new NewNode(num);
    }

    if (num < root.data) {
      root.left = this.insert(num, root.left);
    } else if (num > root.data) {
      root.right = this.insert(num, root.right);
    }

    return (this.root = root);
  }

  print(node: NewNode | null = this.root) {
    const prettyPrint = (node: NewNode, prefix = "", isLeft = true) => {
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
    if (node) {
      prettyPrint(node);
    }
  }

  delete(num: number, root: NewNode | null = this.root): NewNode | null {
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
      return root.right;
    } else if (root.right === null) {
      return root.left;
    }

    let parent = root;
    let child = root.right;

    while (child?.left !== null) {
      parent = child;
      child = child.left;
    }

    if (parent !== root) {
      parent.left = parent.right;
    } else {
      parent.right = child.right;
    }

    root.data = child.data;

    return root;
  }

  find(value: number, root: NewNode | null = this.root) {
    if (root) {
      if (root.data === value) {
        return root;
      } else if (value < root.data) {
        return this.find(value, root.left);
      } else if (value > root.data) {
        return this.find(value, root.right);
      }
    }
  }

  levelOrder(callback: any = null) {
    const orderQueue: NewNode[] = [];
    const treeValues: number[] = [];
    let currentNode = this.root;

    if (currentNode) {
      orderQueue.push(currentNode);

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
    }
    return treeValues;
  }

  inOrder(
    root: NewNode | null = this.root,
    treeValues: number[] = [],
    callback: any = null
  ) {
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

  preOrder(
    root: NewNode | null = this.root,
    treeValues: number[] = [],
    callback: any = null
  ) {
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

  postOrder(
    root: NewNode | null = this.root,
    treeValues: number[] = [],
    callback: any = null
  ) {
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

  depth(node: NewNode, root: NewNode | null = this.root, count: number = 0) {
    if (root) {
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
  }

  isBalanced(root: NewNode | null = this.root): boolean {
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

  storeBSTNodes(root: NewNode | null = this.root, nodes: number[]) {
    if (root === null) {
      return;
    }

    this.storeBSTNodes(root.left, nodes), nodes.push(root.data);
    this.storeBSTNodes(root.right, nodes);
  }

  rebalance(root: NewNode | null = this.root) {
    const nodes: number[] = [];
    this.storeBSTNodes(root, nodes);

    return this.buildTree(nodes);
  }
}

function randomNumbers(): number[] {
  let i = 11;
  const numbersArray: number[] = [];
  while (i >= 0) {
    numbersArray.push(Math.floor(Math.random() * 100));
    i--;
  }
  return numbersArray;
}

// Driver Script

// Build tree with random numbers
const tree = new Tree(randomNumbers());
tree.buildTree();

// Check if tree is balanced and call in pre, post and inorder
console.log(tree.isBalanced());
console.log(tree.preOrder());
console.log(tree.postOrder());
console.log(tree.inOrder());

// Insert new numbers
tree.insert(101);
tree.insert(200);
tree.insert(304);

// Check if tree is balanced again and rebalance if not
console.log(tree.isBalanced());
tree.rebalance();

// Call in pre, post and inorder
console.log(tree.isBalanced());
console.log(tree.preOrder());
console.log(tree.postOrder());
console.log(tree.inOrder());

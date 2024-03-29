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
}

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
    this.root = buildTree;
  }
}

function buildTree(array) {
  const data = [...new Set(array)].sort((a, b) => a - b);
}

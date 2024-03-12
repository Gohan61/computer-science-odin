class LinkedList {
  constructor(head = null) {
    this.head = head;
  }

  append(value) {
    if (this.head === null) {
      this.head = value;
    } else {
      let lastNode = this.head;
      while (lastNode.nextNode !== null) {
        lastNode = lastNode.nextNode;
      }
      if (lastNode.nextNode === null) {
        lastNode.nextNode = value;
      }
    }
  }

  prepend(value) {
    if (this.head === null) {
      this.head = value;
    } else {
      let oldHead = this.head;
      this.head = value;
      this.head.nextNode = oldHead;
    }
  }

  size() {
    let count = 0;
    let node = this.head;
    while (node) {
      count++;
      node = node.nextNode;
    }
    return count;
  }

  headFirst() {
    return this.head.value;
  }

  tail() {
    let lastNode = this.head;
    while (lastNode.nextNode !== null) {
      lastNode = lastNode.nextNode;
    }
    return lastNode.value;
  }

  at(index) {
    let currentNode = this.head;
    let count = 0;

    while (currentNode) {
      if (count === index) {
        return currentNode.value;
      }
      count++;
      currentNode = currentNode.nextNode;
    }
  }

  pop() {
    if (!this.head) {
      return null;
    }

    if (!this.head.nextNode) {
      this.head = null;
      return;
    }

    let previous = this.head;
    let tail = this.head.nextNode;

    while (tail.nextNode !== null) {
      previous = tail;
      tail = tail.nextNode;
    }

    previous.nextNode = null;
  }
}

class Node {
  constructor(value = null) {
    this.value = value;
    this.nextNode = null;
  }
}

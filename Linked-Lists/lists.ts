class LinkedList<T> {
  head: NodeType<T> | null;

  constructor(head = null) {
    this.head = head;
  }

  append(value: NodeType<T> | null) {
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

  prepend(value: NodeType<T> | null) {
    if (this.head === null) {
      this.head = value;
    } else {
      let oldHead = this.head;
      this.head = value;
      this.head!.nextNode = oldHead;
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
    if (this.head === null) {
      return null;
    } else {
      return this.head.value;
    }
  }

  tail() {
    let lastNode = this.head;
    if (lastNode) {
      while (lastNode.nextNode !== null) {
        lastNode = lastNode.nextNode;
      }
      return lastNode.value;
    } else {
      return null;
    }
  }

  at(index: number | null) {
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

  contains(inputValue: string | null) {
    let currentNode = this.head;

    if (currentNode) {
      if (currentNode.value === inputValue) {
        return true;
      }
      currentNode = currentNode.nextNode;

      while (currentNode?.value && currentNode.value !== inputValue) {
        currentNode = currentNode.nextNode;
        if (currentNode === null) {
          return false;
        }
      }
      if (currentNode?.value && currentNode.value === inputValue) {
        return true;
      }
    } else {
      return null;
    }
  }

  find(value: string | null) {
    let currentNode = this.head;
    let count = 0;

    if (currentNode) {
      if (currentNode.value === value) {
        return count;
      } else {
        count++;
        currentNode = currentNode.nextNode;
        while (currentNode?.value && currentNode.value !== value) {
          currentNode = currentNode.nextNode;
          if (currentNode === null) {
            return null;
          }
          count++;
        }
        if (currentNode?.value && currentNode.value === value) {
          return count;
        }
      }
    } else {
      return null;
    }
  }

  toString() {
    let nodeValues: string[] = [];
    let currentNode = this.head;
    if (this.head === null) {
      return;
    }

    while (currentNode !== null) {
      nodeValues.push(`( ${currentNode.value} ) -> `);
      currentNode = currentNode.nextNode;
    }
    nodeValues.push("null");

    return nodeValues.join(" ");
  }
}

class NodeItem<T> {
  value: string | null;
  nextNode: NodeItem<T> | null;

  constructor(value = null) {
    this.value = value;
    this.nextNode = null;
  }
}

interface NodeType<T> {
  value: string | null;
  nextNode: NodeType<T> | null;
}

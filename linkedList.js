export class LinkedList {
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

  contains(inputValue) {
    let currentNode = this.head;

    if (currentNode.value[0] === inputValue) {
      return true;
    }
    currentNode = currentNode.nextNode;

    while (currentNode.value[0] !== inputValue) {
      currentNode = currentNode.nextNode;
      if (currentNode === null) {
        return false;
      }
    }
    if (currentNode.value[0] === inputValue) {
      return true;
    }
  }

  find(value) {
    let currentNode = this.head;
    let count = 0;

    if (currentNode.value[0] === value) {
      return currentNode.value[1];
    } else {
      count++;
      currentNode = currentNode.nextNode;
      while (currentNode.value[0] !== value) {
        currentNode = currentNode.nextNode;
        if (currentNode === null) {
          return null;
        }
        count++;
      }
      if (currentNode.value[0] === value) {
        return currentNode.value[1];
      }
    }
  }

  findIndex(value) {
    let currentNode = this.head;
    let count = 0;

    if (currentNode.value[0] === value) {
      return count;
    } else {
      count++;
      currentNode = currentNode.nextNode;
      while (currentNode.value[0] !== value) {
        currentNode = currentNode.nextNode;
        if (currentNode === null) {
          return null;
        }
        count++;
      }
      if (currentNode.value[0] === value) {
        return count;
      }
    }
  }

  keysFromList(item) {
    let nodeValues = [];
    let currentNode = item.head;
    if (currentNode === null) {
      return;
    }

    while (currentNode !== null) {
      nodeValues.push(currentNode.value[0]);
      currentNode = currentNode.nextNode;
    }

    return nodeValues;
  }

  valuesFromList(item) {
    let nodeValues = [];
    let currentNode = item.head;
    if (currentNode === null) {
      return;
    }

    while (currentNode !== null) {
      nodeValues.push(currentNode.value[1]);
      currentNode = currentNode.nextNode;
    }

    return nodeValues;
  }

  keyValueFromList(item) {
    let nodeValues = [];
    let currentNode = item.head;
    if (currentNode === null) {
      return;
    }

    while (currentNode !== null) {
      nodeValues.push(currentNode.value);
      currentNode = currentNode.nextNode;
    }

    return nodeValues;
  }

  removeFromList(key, index, hashBucket) {
    if (hashBucket[index]) {
      let currentNode = hashBucket[index].head;

      if (currentNode.value[0] === key) {
        hashBucket[index].head = currentNode.nextNode;
        return true;
      }
      currentNode = currentNode.nextNode;

      while (currentNode.value[0] !== key) {
        currentNode = currentNode.nextNode;
      }
      if (currentNode.value[0] === key) {
        currentNode = currentNode.nextNode;
        hashBucket[index] = currentNode;

        return true;
      }
    }
    return false;
  }
}

export class Node {
  constructor(value = null) {
    this.value = value;
    this.nextNode = null;
  }
}

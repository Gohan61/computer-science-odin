export class LinkedList<K, V> {
  head: NodeType<K, V> | null;

  constructor(head = null) {
    this.head = head;
  }

  append(node: NodeType<K, V> | null) {
    if (this.head === null) {
      this.head = node;
    } else {
      let lastNode = this.head;
      while (lastNode.nextNode !== null) {
        lastNode = lastNode.nextNode;
      }
      if (lastNode.nextNode === null) {
        lastNode.nextNode = node;
      }
    }
  }

  size(): number {
    let count = 0;
    let node = this.head;
    while (node) {
      count++;
      node = node.nextNode;
    }
    return count;
  }

  contains(key: K): boolean {
    let currentNode = this.head;

    while (currentNode) {
      if (currentNode.key === key) {
        return true;
      }
      currentNode = currentNode.nextNode;
    }
    return false;
  }

  find(key: K): V | null {
    let currentNode = this.head;

    while (currentNode) {
      if (currentNode.key === key) {
        return currentNode.value;
      }
      currentNode = currentNode.nextNode;
    }
    return null;
  }

  keysFromList<K, V>(item: LinkedList<K, V>): K[] {
    const nodeValues: K[] = [];
    let currentNode = item.head;

    while (currentNode) {
      if (currentNode.value !== null) {
        nodeValues.push(currentNode.key);
      }
      currentNode = currentNode.nextNode;
    }

    return nodeValues;
  }

  valuesFromList<K, V>(item: LinkedList<K, V>): V[] {
    const nodeValues: V[] = [];
    let currentNode = item.head;

    while (currentNode) {
      if (currentNode.value !== null) {
        nodeValues.push(currentNode.value);
      }
      currentNode = currentNode.nextNode;
    }

    return nodeValues;
  }

  keyValueFromList<K, V>(item: LinkedList<K, V>): Array<[K, V]> {
    let nodeValues: Array<[K, V]> = [];
    let currentNode = item.head;

    while (currentNode) {
      if (currentNode.key !== null) {
        nodeValues.push([currentNode.key, currentNode.value]);
      }
      currentNode = currentNode.nextNode;
    }

    return nodeValues;
  }

  removeFromList(key: K): boolean {
    if (this.head === null) {
      return false;
    }

    if (this.head.key === key) {
      this.head = this.head.nextNode;
      return true;
    }

    let currentNode = this.head;
    while (currentNode.nextNode && currentNode.nextNode.key !== key) {
      currentNode = currentNode.nextNode;
    }

    if (currentNode.nextNode && currentNode.nextNode.key === key) {
      currentNode.nextNode = currentNode.nextNode.nextNode;
      return true;
    }

    return false;
  }
}

export class Node<K, V> {
  key: K;
  value: V;
  nextNode: NodeType<K, V> | null;

  constructor(key: K, value: V) {
    this.key = key;
    this.value = value;
    this.nextNode = null;
  }
}

interface NodeType<K, V> {
  key: K;
  value: V;
  nextNode: NodeType<K, V> | null;
}

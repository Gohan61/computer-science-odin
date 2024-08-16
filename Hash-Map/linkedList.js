export class LinkedList {
    head;
    constructor(head = null) {
        this.head = head;
    }
    append(node) {
        if (this.head === null) {
            this.head = node;
        }
        else {
            let lastNode = this.head;
            while (lastNode.nextNode !== null) {
                lastNode = lastNode.nextNode;
            }
            if (lastNode.nextNode === null) {
                lastNode.nextNode = node;
            }
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
    contains(key) {
        let currentNode = this.head;
        while (currentNode) {
            if (currentNode.key === key) {
                return true;
            }
            currentNode = currentNode.nextNode;
        }
        return false;
    }
    find(key) {
        let currentNode = this.head;
        while (currentNode) {
            if (currentNode.key === key) {
                return currentNode.value;
            }
            currentNode = currentNode.nextNode;
        }
        return null;
    }
    keysFromList(item) {
        const nodeValues = [];
        let currentNode = item.head;
        while (currentNode) {
            if (currentNode.value !== null) {
                nodeValues.push(currentNode.key);
            }
            currentNode = currentNode.nextNode;
        }
        return nodeValues;
    }
    valuesFromList(item) {
        const nodeValues = [];
        let currentNode = item.head;
        while (currentNode) {
            if (currentNode.value !== null) {
                nodeValues.push(currentNode.value);
            }
            currentNode = currentNode.nextNode;
        }
        return nodeValues;
    }
    keyValueFromList(item) {
        let nodeValues = [];
        let currentNode = item.head;
        while (currentNode) {
            if (currentNode.key !== null) {
                nodeValues.push([currentNode.key, currentNode.value]);
            }
            currentNode = currentNode.nextNode;
        }
        return nodeValues;
    }
    removeFromList(key) {
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
export class Node {
    key;
    value;
    nextNode;
    constructor(key, value) {
        this.key = key;
        this.value = value;
        this.nextNode = null;
    }
}

import { LinkedList } from "./linkedList.js";
import { Node } from "./linkedList.js";

function HashMap() {
  const hashBucket = [];

  const hash = (key) => {
    let hashCode = 0;

    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = primeNumber * hashCode + key.charCodeAt(i);
      hashCode = hashCode % 16;
    }

    return hashCode;
  };

  const set = (key, value) => {
    const index = hash(key);

    if (!hashBucket[index]) {
      hashBucket[index] = new LinkedList();
    }

    hashBucket[index].append(new Node([key, value]));
  };

  const get = (key) => {
    const index = hash(key);

    return hashBucket[index].find(key);
  };

  const has = (key) => {
    const index = hash(key);

    return hashBucket[index].contains(key);
  };

  const remove = (key) => {
    const index = hash(key);

    return list.removeFromList(key, index, hashBucket);
  };

  return { hash, set, hashBucket, get, has, remove };
}

const hashMapObj = HashMap();
const list = new LinkedList();

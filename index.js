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

  const length = (key) => {
    let count = 0;
    hashBucket.forEach((item) => {
      count += item.size();
    });
    return count;
  };

  const clear = () => {
    hashBucket.splice(0);
  };

  const keys = () => {
    const keysInHashMap = [];

    hashBucket.forEach((item) => {
      keysInHashMap.push(list.keysFromList(item));
    });
    return keysInHashMap.flat();
  };

  const values = () => {
    const valuesInHashMap = [];

    hashBucket.forEach((item) => {
      valuesInHashMap.push(list.valuesFromList(item));
    });

    return valuesInHashMap.flat();
  };

  const entries = () => {
    const keyValueInHashMap = [];

    hashBucket.forEach((item) => {
      keyValueInHashMap.push(list.keyValueFromList(item).flat());
    });

    return keyValueInHashMap;
  };

  return {
    hash,
    set,
    hashBucket,
    get,
    has,
    remove,
    length,
    clear,
    keys,
    values,
    entries,
  };
}

const hashMapObj = HashMap();
const list = new LinkedList();

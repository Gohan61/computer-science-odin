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
        hashBucket[index].append(new Node(key, value));
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
        return list.removeFromList(key);
    };
    const length = () => {
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
            const keys = list.keysFromList(item);
            if (keys) {
                keysInHashMap.push(...keys);
            }
        });
        return keysInHashMap;
    };
    const values = () => {
        const valuesInHashMap = [];
        hashBucket.forEach((item) => {
            const items = list.valuesFromList(item);
            if (items) {
                valuesInHashMap.push(...items);
            }
        });
        return valuesInHashMap;
    };
    const entries = () => {
        const keyValueInHashMap = [];
        hashBucket.forEach((item) => {
            const items = list.keyValueFromList(item);
            keyValueInHashMap.push(...items);
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
hashMapObj.set("apple", "red");
hashMapObj.set("banana", "yellow");
hashMapObj.set("carrot", "orange");
hashMapObj.set("dog", "brown");
hashMapObj.set("elephant", "gray");
hashMapObj.set("frog", "green");
hashMapObj.set("grape", "purple");
hashMapObj.set("hat", "black");
hashMapObj.set("ice cream", "white");
hashMapObj.set("jacket", "blue");
hashMapObj.set("kite", "pink");
hashMapObj.set("lion", "golden");
console.log(hashMapObj.entries());
console.log(hashMapObj.get("red"));
console.log(`Load factor: ${hashMapObj.length() / 16}`);
hashMapObj.set("moon", "silver");
console.log(`Load factor: ${hashMapObj.length() / 16}`);
console.log(hashMapObj.length());
console.log(hashMapObj.keys());
console.log(hashMapObj.values());
hashMapObj.remove("apple");
console.log(hashMapObj.keys());
console.log(hashMapObj.has("elephant"));
hashMapObj.clear();
console.log(hashMapObj.entries());

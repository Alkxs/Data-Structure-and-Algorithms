// Definition

Data structure that allows us to store key-value pairs. It's also known as Hash Map in some languages.

The way it works is by using a hash function to compute an index into an array in which an element will be inserted or searched.

// Operations

* Insert
* Delete 
* Retrieve

// Usage 
* To find values quickly given a key
* To add new key / values quickly


// Implementation

class HashTable {
    constructor(size = 53) {
        this.keyMap = new Array(size);
    }

    _hash(key) {
        let total = 0;
        let WEIRD_PRIME = 31;
        for (let i = 0; i < Math.min(key.length, 100); i++) {
            let char = key[i];
            let value = char.charCodeAt(0) - 96;
            total = (total * WEIRD_PRIME + value) % this.keyMap.length;
        }
        return total;
    }

    set(key, value) {
        let index = this._hash(key);
        if (!this.keyMap[index]) {
            this.keyMap[index] = [];
        }
        this.keyMap[index].push([key, value]);
    }

    get(key) {
        let index = this._hash(key);
        if (this.keyMap[index]) {
            for (let i = 0; i < this.keyMap[index].length; i++) {
                if (this.keyMap[index][i][0] === key) {
                    return this.keyMap[index][i][1]
                }
            }
        }
        return undefined;
    }
}

//Big O Notation

* Insert = O(1)
* Delete = O(1)
* Retrieve =O(1)
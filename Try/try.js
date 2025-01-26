class HashTable {
  constructor(size) {
    this.table = new Array(size);
    this.size = size;
  }

  hash(key) {
    let total = 0;
    for (let i = 0; i < key.length; i++) {
      total += key.charCodeAt(i);
    }
    return total % this.size;
  }
  set(key, value) {
    const index = this.hash(key);
    const bucket = this.table[index];

    if (!bucket) {
      this.table[index] = [[key, value]];
    } else {
      const sameKeyItem = bucket.find((item) => item[0] === key);
      if (sameKeyItem) {
        sameKeyItem[1] = value;
      } else {
        bucket.push([key, value]);
      }
    }
  }
  get(key) {
    const index = this.hash(key);
    const bucket = this.table[index];
    if (bucket) {
      const sameKeyItem = bucket.find((item) => item[0] === key);
      if (sameKeyItem) {
        return sameKeyItem[1];
      }
    }
    return undefined;
  }
  has(key) {
    const index = this.hash(key);
    const bucket = this.table[index];
    if (bucket) {
      return bucket.some((item) => item[0] === key);
    }
    return false;
  }
  remove(key) {
    const index = this.hash(key);
    const bucket = this.table[index];
    if (bucket) {
      const sameKeyItemIndex = bucket.findIndex((item) => item[0] === key);
      if (sameKeyItemIndex !== -1) {
        bucket.splice(sameKeyItemIndex, 1);
        if (bucket.length === 0) {
          this.table[index] = undefined;
        }
      }
    }
  }
  display() {
    for (let i = 0; i < this.size; i++) {
      if (this.table[i]) {
        console.log(this.table[i]);
      }
    }
  }
}

function findFrq(input) {
  const frqTable = new HashTable(50);

  for (let value of input) {
    if (frqTable.has(value)) {
      frqTable.set(value, frqTable.get(value) + 1);
    } else {
      frqTable.set(value, 1);
    }
  }

  frqTable.display();
}

findFrq([5, 6, 3, 2, 5, 2, 4, 1, 6, 2, 7]);

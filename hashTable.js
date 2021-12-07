class HashTable {
  constructor(size){
    this.data = new Array(size);
  }

  _hash(key) {
    let hash = 0;
    for (let i =0; i < key.length; i++){
        hash = (hash + key.charCodeAt(i) * i) % this.data.length
    }
    return hash;
  }
}

// ad to this.data
function set(key, value) {
  let hash = this._hash(key);
  if (!this.data[hash]) {
  this.data[hash] = [];
  }
  this.data[hash].push(key, value);

}

// retrieve from this.data
function get(key) {
  let hash = this._hash(key);
  let bucket = this.data[hash];
  if (bucket) {
    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === key) {
        return bucket[i][1];
      }
    }
  }
  return;
}

const myHashTable = new HashTable(50);
myHashTable.set('grapes', 10000);
myHashTable.get('grapes');
myHashTable.set('apples', 9);
myHashTable.get('apples');

class Node {
  constructor(value){
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

class BinarySearchTree {
  constructor(){
    this.root = null;
  }
  insert(value){
    const newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
    } else {
      let currentNode = this.root;
      while(true) {
        // right side
        if (value > currentNode.value) {
          if (!currentNode.right) {
            currentNode.right = newNode;
            // return to break the loop
            return this;
          }
          currentNode = currentNode.right;
        } else {
          // left side
          if (!currentNode.left) {
            currentNode.left = newNode;
            return this;
          }
          currentNode = currentNode.left;
        }
      }
    }
  }
  lookup(value){
    let currentNode = this.root;
    // return value if found, return null or false if not found
    if (!this.root) {
      return null;
    }
    else {
      while(currentNode) {
        if (value > currentNode.value) {
          currentNode = currentNode.right;
        } else if (value < currentNode.value) {
          currentNode = currentNode.left;
        } else if ( value == currentNode.value) {
          return currentNode;
        }
      }
      return null;
    }
  }
  // remove
}

const tree = new BinarySearchTree();
tree.insert(9)
tree.insert(4)
tree.insert(6)
tree.insert(20)
tree.insert(170)
tree.insert(15)
tree.insert(1)
tree.lookup(20);
// JSON.stringify(traverse(tree.root))

//     9
//  4     20
//1  6  15  170

function traverse(node) {
  const tree = { value: node.value };
  tree.left = node.left === null ? null : traverse(node.left);
  tree.right = node.right === null ? null : traverse(node.right);
  return tree;
}

class Node {
  constructor(value){
    this.value = value;
    this.next = null;
  }
}

// stack is LIFO last in first out
class Stack {
  constructor(){
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  // this method displays top item of the stack
  peek() {
    return this.top;
  }

  // this method pushes item to top of the stack
  push(value){
    const newNode = new Node(value);
    if (!this.length) {
      this.top = newNode;
      this.bottom = newNode;
    } else {
      const topHoldingPointer =  this.top;
      this.top = newNode;
      this.top.next = topHoldingPointer;
    }
    this.length++;
    return this;
  }

  // this method removes from the top of the stack
  pop() {
    if (!this.top) {
      return null;
    } 
    if (this.top === this.bottom) {
      this.bottom = null;
    }
    this.top = this.top.next;
    this.length--;
    return this;
  }

  // this method checks if stack is empty
  isEmpty() {
    return !this.length ? true : false;
  }
}

const myStack = new Stack();
myStack.isEmpty();
myStack.push("Discord");
myStack.push("Udemy");
myStack.push("Google");
myStack.peek();
myStack.pop();

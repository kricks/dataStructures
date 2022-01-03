class Stack {
  constructor(){
    this.array = [];
  }
  peek() {
    return this.array.length[this.array.length - 1];
  }
  pop() {
    this.array.pop();
    return this;
  }
  push(value) {
    this.array.push(value);
    return this;
  }
}

const myStack = new Stack();
myStack.peek();
myStack.push('google');
myStack.push('udemy');
myStack.push('discord');
myStack.peek();
myStack.pop();
myStack.pop();
myStack.pop();

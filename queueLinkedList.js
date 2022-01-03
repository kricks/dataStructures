class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor(){
    this.first = null;
    this.last = null;
    this.length = 0;
  }
  peek() {
    return this.first;
  }

  // add to the queue
  enqueue(value){
    const newNode = new Node(value);
    if(this.isEmpty()) {
      this.first = newNode;
      this.last = newNode;
    } else {
     this.last.next = newNode;
     this.last = newNode;
    }
    this.length++;
    return this;
  }

  // remove from the queue. dequeues removes the first in the list
  dequeue(){
    if (!this.first) {
      return null;
    } 
    if (this.first === this.last) {
      this.last = null;
    }
    // i can hold onto joy object by creating a pointer variable
    // const holdingPointer = this.first
    this.first = this.first.next;
    this.length--;
    return this;
  }
  
  isEmpty() {
    return !this.first ? true : false;
  }
}

const myQueue = new Queue();
myQueue.isEmpty();
myQueue.enqueue("Joy");
myQueue.enqueue("Matt");
myQueue.enqueue("Pavel");
myQueue.enqueue("Samir");
myQueue.peek();
myQueue.dequeue();

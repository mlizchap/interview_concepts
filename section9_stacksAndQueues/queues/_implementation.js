class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  class Queue {
    constructor() {
      this.first = null;
      this.last = null;
      this.length = 0;
    }
    peek() {
      return this.first;
    }
    enq(value) {
      const newNode = new Node(value);
  
      if (this.isEmpty()) {
        this.first = newNode;
        this.last = newNode;
      } else {
        this.last.next = newNode;
        this.last = newNode;
      }
      this.length++;
      return this;
    }
    deq() {
      if (!this.first) {
        return null;
      }
      if (this.first === this.last) {
        this.last = null;
      }
      const holdingPointer = this.first;
      this.first = this.first.next;
      this.length--;
      return holdingPointer;
    }
    isEmpty() {
      if (this.length === 0) {
        return true;
      } else {
        return false;
      }
    }
    printQ() {
      let curr = this.first;
      let items = ''
  
      if (this.isEmpty()) {
        console.log("empty");
        return;
      }
  
      while (curr) {
        if (curr.next) {
          items += curr.value + ' -> '
        } else {
          items += curr.value
        }
        curr = curr.next 
      }
  
      console.log(items)
    }
  }
  
  const q = new Queue();
  //console.log(q.peek());
  q.enq("x"); // [x]
  q.enq("y"); // [x, y]
  q.enq("z"); // [x, y, z]
  q.printQ();
  q.deq(); // [y, z]
  q.printQ();
  q.deq(); // [z]
  q.printQ();
  q.deq(); //[]
  q.printQ();
// stack implementation (linked list)
class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  class Stack {
    constructor() {
      this.top = null;
      this.bottom = null;
      this.length = 0;
    }
    peek() {
      return this.top;
    }
    push(value) {
      const newNode = new Node(value);
      
      if (this.isEmpty()) {
        this.top = newNode;
        this.bottom = newNode;
      } else {
        const holdingPointer = this.top;
        this.top = newNode;
        this.top.next = holdingPointer;
      }
  
      this.length++;
      return newNode;
    }
    pop() {
      if (!this.top) {
        return null;
      }
      if (this.top === this.bottom) { // if there is only one item left
          this.bottom = null;
      }
      const itemToPop = this.top;
      this.top = this.top.next;
      this.length--;
      return itemToPop;
    }
    isEmpty() {
      if (this.length > 0) {
        return false;
      } else {
        return true;
      }
    }
  
    printStack() {
      if (this.length === 0) {
        console.log("empty")
      }
  
      let curr = this.top;
      let items = [];
  
      while (curr) {
        items.push(curr.value)
        curr = curr.next
      }
  
      console.log(items.reverse().map((item, index) => 
        (index < items.length - 1) ? `${item} <- ` : item).join(' '));
    }
  }
  
  const stack = new Stack();
  stack.push("google"); // google
  stack.push("udemy");  // google <- udemy
  stack.push("discord");  // google <- udemy <- discord
  stack.pop();  // google <- udemy
  stack.printStack();
  stack.pop();  // google 
  stack.printStack();
  stack.pop();  // empty
  stack.printStack();
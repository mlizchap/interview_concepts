class Stack {
    constructor() {
      this.data = [];
    }
    peek() {
      if (this.isEmpty()) {
        return "empty"
      }
      return this.data[this.data.length - 1];
    }
    push(value) {
      this.data.push(value);
      return this;
    }
    pop() {
      return this.data.pop();
    }
    isEmpty() {
      if (this.size === 0) {
        return true 
      } else {
        return false
      }
    }
    printStack() {
      console.log(this.data)
    }
  }
  
  const stack = new Stack();
  stack.push("a"); // [a]
  stack.push("b"); // [a, b]
  stack.push("c"); // [a, b, c]
  console.log(stack.pop());  // [c]
  stack.peek(); // b
  stack.printStack();
class Node {
    constructor(value) {
      this.value = value,
      this.next = null,
      this.previous = null /* double list addition */
    }
  }
  
  class DoublyLinkedList {
    constructor(value) { 
      this.head = {
        value: value,
        next: null,
        prev: null
      }
      this.tail = this.head; 
      this.length = 1;
    }
    
    append(value) {
      const newNode = new Node(value);
      this.tail.next = newNode;
      newNode.prev = this.tail; /* double list addition */
      this.tail = newNode;
      this.length++;
      this.printList();
      return this; 
    }
  
    prepend(value) {
      const newNode = new Node(value);
      newNode.next = this.head;
      this.head.prev = newNode; /* double list addition */
      this.head = newNode;
      this.length++;
      this.printList();
      return this;
    }
  
    insert(index, value) {
      if (index >= this.length) {
        this.append(value);
        return this.printList();
      }
      if (index === 0) {
        this.prepend(value);
        return this.printList();
      }
  
      let newNode = new Node(value); 
      const leader = this.traverseToIndex(index - 1);  
      const follower = leader.next; /* double list addition */
      leader.next = newNode; 
      newNode.prev = leader; /* double list addition */
      newNode.next = follower; /* double list addition */
      newNode.next = follower; /* double list addition */
      follower.prev = newNode; /* double list addition */
      this.length++;
      return this.printList();
    }
  
    remove(index) {
      if (index === 0) {
        this.head = this.head.next;
        this.length--;
        return this.printList();
      }
  
      const leader = this.traverseToIndex(index - 1);
      const unwantedNode = leader.next;
      const follower = unwantedNode.next; /* double list addition */
      
      /* double list addition */
      if (this.tail !== unwantedNode) {
        follower.prev = leader;
      } else {
        this.tail = leader;
      }

      this.length--;
      return this.printList();
    }
  
    traverseToIndex(index) {
      let counter = 0;
      let currentNode = this.head;
      while (counter !== index) {
        currentNode = currentNode.next;
        counter++;
      }
      return currentNode;
    }
  
    printList() {
      let values = ''
      let currentNode = this.head;
      
      while (currentNode !== null) {
        if (currentNode.next !== null) {
          values += `${currentNode.value} -> `
        } else {
          values += `${currentNode.value}`
        }
        currentNode = currentNode.next;
      }
      console.log(`List: ${values}, length: ${this.length}`)
    }
  }
  
  const dl = new DoublyLinkedList("x"); // x
  dl.append("a"); // x -> a
  dl.prepend("p"); // p -> x -> a
  dl.insert(1, "i"); // p -> i -> x -> a
  dl.remove(1); // p -> x -> a
  
  
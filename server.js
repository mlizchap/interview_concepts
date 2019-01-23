const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

// const big0 = require('./section2_big0');



/*************** PLAYGROUND ******************/

// reverse a linked list
  // 1 -> 10 -> 16 -> 88 returns 88 -> 16 -> 10 -> 1

  class Node {
    constructor(value) {
      this.value = value,
      this.next = null
    }
  }
  
  class LinkedList {
    constructor(value) { // the value will be the first value of the linked list
      this.head = {
        value: value,
        next: null
      }
      this.tail = this.head; // since we only have one item, the head is also the tail
      this.length = 1;
    }
    
    // adds a value to the end of the list
    append(value) {
      const newNode = new Node(value);
      this.tail.next = newNode;
      this.tail = newNode;
      this.length++;
      return this; 
    }
  
    // adds a value to the beginning of the list
    prepend(value) {
      const newNode = new Node(value);
      newNode.next = this.head;
      this.head = newNode;
      this.length++;
      return this;
    }
  
    // inserts a value in the middle of the list
    insert(index, value) {
      /* check params */
      if (index >= this.length) {
        this.append(value);
        return this.printList();
      }
      if (index === 0) {
        this.prepend(value);
        return this.printList();
      }
  
      let newNode = new Node(value); /* create a node for the item we want to add */
      const leader = this.traverseToIndex(index - 1);  /* grab a reference to the node before where we want to insert the new node */
      const holdingPointer = leader.next; /* grab a reference to the leader's next poiner */
      leader.next = newNode; /* change the leader's next pointer to the new node */
      newNode.next = holdingPointer /* change the newNodes next pointer to the temporary holding pointer */
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
      leader.next = unwantedNode.next;
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

    reverse() {
      if (!this.head.next) {
        return head;
      }

      let first = this.head;
      this.tail = this.head;
      let second = first.next;

      first.next = null;

      while (second) {
        const temp = second.next; /* temp variable for a ref to the curr node's next node to use only within this while loop */
        second.next = first; /* we loose are reference to the node after current, which is why we stored it in a variable */
        first = second;
        second = temp;
      }

      this.head = first;
      return this.printList();
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
  
  const myLL = new LinkedList(1); 
  myLL.append(2); 
  myLL.reverse(); // 3 -> 2 -> 1 




/*********************************/

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
});

server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
});
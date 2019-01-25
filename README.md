
## TOC
- [Topics](#topics)
- [Pillars of Programming](#pillars-of-programming)
- [Big 0 Notation](#big-o-notation)
- [Computer Storage](#computer-storage)
- [Javascript Classes](#javascript-classes)
- [Data Structures](#data-structures)
    - [Arrays](#arrays)
    - [Hash Tables](#hash-tables)
    - [Linked Lists](#linked-lists)
    - [stacks and queues](#stacks-and-queues)

## Topics
### Data Structure Types
- Arrays
- Stacks
- Queues
- Linked List
- Trees
- Tries
- Graphs
- Hash Tables

### Operations on Data Structures
- insertion 
- deletion 
- traversal
- searching
- sorting
- access

### Algorithms 
- Sorting
- Dynamic Programming
- BFS + DFS (Searching)
- Recursion


### Pillars of Programming
1. scalabe
    1. speed (time)
    2. memory (space)
2.  readable

- space: variables, data strucures, function calls, allocations


## Big 0 Notation
### Overview
- **Big o**: as the input grows bigger, how much does the algorithm slow down.  A measure of the number of operations per each additional element.  
- data structures + algos = programs
- ****** BIG O CHEAT SHEET ***********

### Types
- **O(n)**: one operation per element; linear time
- **O(1)**: contstant time.  One operation regardles of input
- **O(n^2)**: quadratic time.  Nested loops are one example, uses muliplication (n*n)
- **O(n!)**: factorial time, a nested loop for each additional element

### Rules
1.  worst case
    - assume worst case scenario when talking about scalability
2.  remove constants
3.  different terms for input
    -  when there is more than one input = addition, nested loops = multipication
    ```javascript
    function doSomething(a, b) {
        a.forEach(...)
        b.forEach(...)
    }
    ```
    - result is 0(m + n)

4.  drop non-dominants
    - as the input increases n^2 is more important than n


## Computer Storage
- **RAM**: temporary memory (lost when computer is turned off) random access memory, stores variables, how programs run
    - has shelves of information that allow us to run programs
    - each shelf holds 8 bits (1 byte) of storage
    - connected to a memory controller which has connections to the CPU
- **storage**: perminant storage, stores files and documents, disc drive, flash drive SSD.  Slower than RAM
- **CPU**: does the work.  Can access the RAM faster than the storage
    - contains a cache- stores a memory of recent RAM activity
- *goal of data structures is to minimize the operations for the CPU to get the information*

## Javascript Classes
- objects
    - reference type
        - primitive types
            - the language tells us what they are (numbers, strings, booleans, etc)
            - immutable, once declared cannot be changed
        - reference type
            - not defined by the programming language. Created by the programmer (objects) 

        ```javascript
        var object1 = { value: 10 };
        var object2 = object1;
        var object3 = { value: 10 };
        object1 === object2; /* true */
        object1 === object3; /* false */

        var object1 = { value: 10 };
        var object2 = object1;
        var object3 = { value: 10 };
        object1.value = 15; /* object1 = 15; object2 = 15; object3 = 10 */
        ```
        - `object1` creates a new object
        - `object2` references object1. Stores the reference to `object1`
        - `object3` creates a new object (points to a different object than `object1` and `object2`)

        ```javascript
        [1] === [1] // false
        ```
        - arrays are objects and therefore by reference and not by value.  Each side points to a different object.
    - context
        - scope: a new scope is created with each function.
            ```javascript
            function() {
                let a = a; /* a only lives in this scope */
            }
            console.log(a); /* ReferenceError: a is not defined */
            ```
        - context: tells you where you are within the object
            - refers to the object environment we are in
            ```javascript
            console.log(this); // logs the Window object (if you are in the browser)

            function a() {
                console.log(this)
            }
            a(); // Window
            ```
            - `function a` is technically `window.a`

            ```javascript
            const object4 = {
                a: function() {
                    console.log(this);
                }
            }
            object4.a() // logs the object4 object
            ```
    - instantiation
        - when you copy the object and reuse the code. You are making instances.
        - you create a class whenever you will want to create a copy of an object.
        ```javascript
        class Player {
            constructor(name, type) {
                this.name = name;
                this.type = type;
            }
            introduce() {
                console.log(`Hi I am ${this.name}, I am a ${this.type}`);
            }
        }
        ```
        - **constructor**: a function that when every time you create a new object, it is run.  Creates the appropriate properties.
            - we use `this` in the constructor so we can access the different properties
        - if we want to copy the Player class but add on to it - use `extends`
            ```javascript
            class Wizards extends Player {
                constructor(name, type) {
                    super(name, type);
                }
                play() {
                    console.log(`Weeee, I am a ${this.type}`);
                }
            }
            ```
            - 
        - **super** 
            - a function calls the constructor function of the class you're extending, you pass in the properties that you want to access.
            - use this function if you want to access the properties of the parent class
            - when the constructor function of the parent class is run, it is referring to the child object
            - in order to access the `this` keyword in child class constructor, need to call super 
        - **new**: instantiates the class, creates a copy of the class

## Data Structures

### Arrays
<table>
<tr><td>lookup</td><td>O(1)</td></tr>
<tr><td>push</td><td>O(1)</td></tr>
<tr><td>insert</td><td>O(n)</td></tr>
<tr><td>delete</td><td>O(n)</td></tr>
</table>

- arrays in javascript = objects with integer based keys
- organizes items sequentially in memory
#### Javascript Array Methods
- **push(n)**
    - O(1)
    - adds an item to the end of the array
    ```javascript
    const strings = ['a', 'b', 'c', 'd'];
    strings.push('x')
    // ['a', 'b', 'c', 'd', 'x'];
    ```
- **pop()**
    - O(1)
    - removes the last item in the array
    ```javascript
    const strings = ['a', 'b', 'c', 'd'];
    strings.pop();
    // ['a', 'b', 'c']
    ```
- **unshift(n)**
    - 0(n) 
    - each item has to be shifted once over and reassigned to the next spot, involves looping through each item and therefore takes linear time
    - removes the first item in the array
    ```javascript
    const strings = ['a', 'b', 'c', 'd'];
    strings.unshift('x');
    // ['x', 'a', 'b', 'c', 'd'];
    ```
- **splice(start index, delete count, items to add)**
    - O(n)
    - worst case you need to loop through the array and shift each item over 
    ```javascript
    const strings = ['a', 'b', 'c', 'd'];
    strings.splice(1, 0, 'x', 'xx');
    // ['a', 'x', 'xx', 'b', 'c', 'd']

    const strings = ['a', 'b', 'c', 'd'];
    strings.splice(1, 2, 'x', 'xx');
    // ['a', 'x', 'xx', 'd']
    ```

#### Static vs. Dynamic Arrays
- **static**
    - Fixed in size.  Need to declare size beforehand.
    - C++: `int a[5];`
    - to add another item -> need to copy the array and move to a different location in memory to create the space.
- **dynamic**
    - Non-fixed size, do not need to declare size. 
    - Automatically allocates the memory.
    - Copies and rebuilds an array in a new location (usually doubles the space)
    <table>
    <tr><td>lookup</td><td>O(1)</td></tr>
    <tr><td>push*</td><td>O(1)</td></tr>
    <tr><td>insert</td><td>O(n)</td></tr>
    <tr><td>delete</td><td>O(n)</td></tr>
    </table>
        * can be O(n) -> can be linear because if we add an item and we do not have enough space - we need to loop through the array and copy it to a new location with twice the space.

#### Implementing an Array
```javascript
class MyArray {
  constructor() {
      this.length = 0;
      this.data = {};
  }
  get(index) {
      return this.data[index];
  }
  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.length;
  }
  pop() {
    let lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastItem;
  }
  delete(index) {
    const item = this.data[index];
    this.shiftItems(index);
    return item;
  }
  shiftItems(index) {
    for (let i = index; i < this.length - 1; i++) { // starts at the index we want to delete from and itereate until the end
      this.data[i] = this.data[i+1]; // take each item and change it to the data right next to it
    }
    delete this.data[this.length - 1]; // since last item remains the same bc there is no item after it, we need to delete it
    this.length--;
  }
}
const newArray = new MyArray();
newArray.push('a');
newArray.push('b'); 
newArray.delete(0); // ['b']
```

*when manipulating strings in JS - need to convert to an array, then manipulate, then convert back to a string*

### Hash Tables
<table>
<tr><td>lookup</td><td>O(1)</td></tr>
<tr><td>push*</td><td>O(1)</td></tr>
<tr><td>insert</td><td>O(1)</td></tr>
<tr><td>delete</td><td>O(1)</td></tr>
</table>


<table>
<tr><th>pros</th><th>cons</th></tr>
<tr><td>fast lookups*</td><td>unordered</td></tr>
<tr><td>fast inserts</td><td>slow key iteration</td></tr>
<tr><td>flexible keys</td><td></td></tr>
</table>
*good collision resolution needed

- contains a key and a corresponding value, the key is an index where to find the value in memory
- animation: 
- uses a **hash function** 
    - a function that generates a value of fixed length for each input that it gets
    - the output generated is converted to an index for fast lookups
    - runs every time you create a new key or retrieving a new key
    - many types, one example - https://www.md5hashgenerator.com/
    - decides where to put the data (the key/value pair) in the computer 
    - key aspects:
        1. **One way**: if given the output, there is no way of determining the input
        2. **Idempotent**: given an input, always generates the same output.  As soon as one thing about the input is changed, it will completely change the output.
    - example:
        ```javascript
        _hash(key) { 
            let hash = 0;
            for (let i =0; i < key.length; i++) {
                hash = (hash + key.charCodeAt(i) * i) % this.data.length  
            }
            return hash;
        }
        ```
        - the underscore indicates that the method should be private and not accessed outside the class (even though JS does not have private methods)
        - for each character of the key, a unique number is generated.  
            - The charcode of the number is multiplied by the index number to make sure the number is unique and thus collisions are avoided.  
            - The modulo of the length of the key is used to make sure the number generated falls within the length of the data array.
            - the key is then returned and this is the index number where we will place the key in the data array
- **collisions**
    - when more than one key gets hashed to the same address
    - when a collision occurs a linked list (or other data structure) is created and assigned to the address
    - slows down insertion/lookup - a negative aspect of hash tables
    - changes insertion/lookup to `O(n/k)` (key is the size of the hash table), becomes `O(n)`.  If there is a inefficient hash function, the chances of the run time becoming `O(n)` is much greater.
- can use an `object`, `map`, or `set` in Javascript
    - diff between `map` and `object` - `maps` can save any data type as the key (`objects` are only strings)
    - `maps` maintain `insertion order` (objects do not maintain order)
    - `sets` are similar to `maps` but only stores keys and not values
    - **maps**
        - to create a new map:
        ```javascript
            const m = new Map();
        ```
        - to add items 
        ```javascript
            m.set('color', 'red');
        ```
        - to get an item 
        ```javascript
            m.get('color');
        ```
        - to delete an item
        ```javascript   
            m.delete('color');
        ```
        - to check if the map contains an item by key
        ```javascript
            m.has('color')
        ```
        - to find the number of items
        ```javascript
            m.size
        ```
        - to initialize a map with values
        ```javascript
            const m = new Map([['color', 'red'], ['name', 'jane'], ['age', 2]])
        ```
        - iterating through keys
        ```javascript
            for (const k of m.keys()) {
                console.log(k)
            }
        ```
        - iterate through values
        ```javascript
            for (const v of m.values()) {
                console.log(v)
            }
        ```
        - iterate over key, value pairs
        ```javascript
            for (const [k, v] of m.entries()) {
                console.log(k, v)
            }
        ```

- hashtables vs arrays
    - hashtables provide a faster way for inserting and deleting items
    - both have constant lookup time 
    - hash tables do not keep the order of the items inserted while arrays do

#### Hash Table Implementation
```javascript
class HashTable {
  constructor(size){
    this.data = new Array(size); // creates an array of arrays consisting of the key/value pairs
  }

  _hash(key) { /* underscore shows that this should be a private method */
    let hash = 0;
    for (let i =0; i < key.length; i++) {
        hash = (hash + key.charCodeAt(i) * i) % this.data.length /* for each character of the key, generates a number.  Multiplied by i to make the number unique.  The modulo of the length is used to make sure that the number falls within the length of the data array */
    }
    return hash;
  }
  
  // insertion
  set(key, value) {
    let address = this._hash(key);

    /* if there is nothing in the address space */
    if (!this.data[address]) { 
      this.data[address] = [];
      this.data[address].push([key, value])
    } 
    
    /* if there is a collision (this is an item in the address space generated by the hash function) */
    this.data[address].push([key, value])

    return this.data
  }

  // lookup
  get(key) {
    let address = this._hash(key);
    const currentBucket = this.data[address];
    if (currentBucket) { /* if there is an item/items in the bucket */
      
      /* run a for loop in case there are collisions and there is more than one item in the slot */
      for (let i = 0; i < currentBucket.length; i++) {
        if (currentBucket[i][0] === key) { /* if the first value of the item is equal to the key */
          return currentBucket[i][1]; /* returns the corresponding value of the key(the second item in the array) */
        }
      }
    }
    
    return undefined; /* if there is nothing in the bucket */
  }

  // for iterating through the hash table
  keys() {
    const keysArray = [];

    /* loops through all of item spaces (shelves) */
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i]) { /* if there is something in the memory space */
        /*
          Since for each item we create a new array with another array pushed in, each item is an array of an array. 
            - the first 0 removes the outer array
            - the second 0 grabs the key 
        */
        keysArray.push(this.data[i][0][0]) 
      }
    }

    return keysArray; // returns an array of all of the keys
  }
}

const myHashTable = new HashTable(50);
myHashTable._hash('grapes');
myHashTable.set('grapes', 10000);
myHashTable.get('grapes');
```

### Linked Lists
<table>
<tr><td>prepend</td><td>O(1)</td></tr>
<tr><td>append</td><td>O(1)</td></tr>
<tr><td>lookup</td><td>O(n)</td></tr>
<tr><td>insert</td><td>O(n)</td></tr>
<tr><td>delete</td><td>O(n)</td></tr>
</table>

<table>
<tr><th>pros</th><th>cons</th></tr>
<tr><td>fast insertion*</td><td>slow lookup</td></tr>
<tr><td>fast deletion</td><td>more memory</td></tr>
<tr><td>ordered</td><td></td></tr>
<tr><td>flexible size</td><td></td></tr>
</table>

- a linked list is a set of nodes 
    ```javascript
    /* 10 --> 5 --> 16 */
    let myLinkedList = {
        head: {
            value: 10,
            next: {
                value: 5,
                next: {
                    value: 16,
                    next: null
                }
            }
        }
    }
    ```
- Each node has two elements: (1) the value of the data you want to store and (2) a pointer to the next node in line.
    ```javascript
    {
        value: 10,
        next: null /* this will either be null or a reference to the next node */
    }
    ```
- the first node is called the head and the last node is called the tail.
- null permenated - null signifies its the end of the list
- the nodes are kept in memory at scattered addresses (arrays are kept in sequential memory)
- used in other data structures such as hash tables, stacks and queues
- insert and delete are `O(n)` because we have to traverse the list to find the item before insertion and deletion
- [animation](https://visualgo.net/en/list)
- **pointers**
    - a reference to another place in memory
    ```javascript
    const obj1 = { a: true };

    /*
        - a POINTER is created
        - obj2 references obj1, no copy is created
        - if one changes, so does the other
        - if one is deleted, there is still a pointer attached to the memory so the other will still exists
    */
    const obj2 = obj1; 
    ```
    - **garbage collection**: if a value no longer has a pointer attached to it, it gets deleted.  In lower level languages you have to manually delete the items no longer referenced.


#### Linked Lists Vs Arrays and Hash Tables
- **arrays**
    - items are allocated in memory next to each other
    - slow run time for inserting and deleting items (need to shift items)
- **hash tables**
    - can store items whereever we want in memory (does not have to be next to each other), the problem is that they weren't stored in order
- **linked lists** 
    - solves these problems by allowing for quick inertion and deletion while keeping the original order
    - a disadvantage of linked list to arrays is it has slow traversal. Most computers have caching systems that allow reading from sequential memory faster than reading scattered addresses.  Even though the runtime of iterating through arrays and linked list is O(n), iterating through linked lists may be slower

#### Singly Linked List Implementation
```javascript
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

  printList() {
    let currentNode = this.head;
    let values = ''
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

const myLL = new LinkedList(4); // 4
myLL.append(7); // 4 -> 7
myLL.insert(1, 5); // 4 -> 5 -> 7 -> 8
myLL.remove(1); // 4 -> 7 -> 8 -> 88
```

#### Doubly Linked List
- contains a pointer to the next node and the next node
- allow for backwards traversal (singly was forward traversal only)
- takes up additional memory space
- extra lines of code for a doubly list:
    - **node class**
        - create a previous property (`prev`)
    - **append**
        - have the new nodes previous pointer point to the tail
    - **prepend**
        - have the old head's previous pointer point to the new node
    - **insert**
        - grab the node that you want to lead the inerted node (`leader`) and the node you want to follow the inerted node (`follwer`)
        - the leader's next pointer will point to the new node
        - have the new nodes next pointer point to the follower and the prev pointer point to the leader
        - have the follower's prev pointer point to the new node
    - **delete**
        - grab the leader, follower and the unwanted node
        - have the leader's next pointer point to the follower
        - if the node being deleted is not the last node - have the follower's prev pointer point to the leader
        - else if the node being deleted is the last node - make the leader the tail 

#### Singly vs Doubly Linked Lists
- **singly**
    - *pro*: a simple implementation, takes up less memory and faster
    - *con*: can not be iterated in reverse, bad for inserting items towards the end of the list
- **doubly**
    - *pro*: can be traversed forwards and backwards, easier to delete if you need to delete a previous node and good for searching for elements
    - *con*: more complex and requires more memories and stoarage

### Stacks and Queues
<table>
<tr><th>pros</th><th>cons</th></tr>
<tr><td>fast operations*</td><td>slow lookup</td></tr>
<tr><td>fast peek</td><td></td></tr>
<tr><td>ordered</td><td></td></tr>
</table>


- linear data structures - allow us to traverse elements sequentially (one by one), only one data element can be directly reached
- can be made up of linked lists or arrays.  You should always use linked lists for queues.  For stacks it depends.
- more limited operations than linked lists and arrays
- the two differ by means of how items are removed from each data structure

#### Stacks
<table>
<tr><td>lookup</td><td>O(n)</td></tr>
<tr><td>pop</td><td>O(1)</td></tr>
<tr><td>push</td><td>O(1)</td></tr>
<tr><td>peek</td><td>O(1)</td></tr>
</table>

- **pop**: remove the last item
- **push**: add item
- **peek**: look at the top item
- **lookup**: to traverse through a stack (not ideal)
- LIFO - the last item added is the first item out
- can only touch the top item
- good when you need to know the last item add, ex: browser history, undo functionality
- can use arrays or linked lists 
    - **arrays**: have cache locality, makes them faster when accessing items in memory because they are right next to each other. (linked lists have scattered memory).  Linked lists also have extra memory because you need to hold on to pointers.
    - **linked lists**: has more dynamic memory. In JS whenever an array is about to reach its limit, it has to double the memory and create new space while with linked list you can add one at a time.

#### Stack Implementation - Array
```javascript
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
  stack.pop());  // []
```
#### Stack Implementation - Linked List
```javascript

```
#### Queues
<table>
<tr><td>lookup</td><td>O(n)</td></tr>
<tr><td>enqueue</td><td>O(1)</td></tr>
<tr><td>dequeue</td><td>O(1)</td></tr>
<tr><td>peek</td><td>O(1)</td></tr>
</table>

- FIFO - the first item added is the first item out
- good to use when there is a waitlist involved  
    - person who makes the request first, gets priority
    - ex: queues to buy tickets, wait for a table, uber/lift, etc.
- **enqueue**: add item
- **dequeue**: remove the first person added
- **peek**: to look at the first item added
- **lookup**: to traverse through the queue (not ideal)
- *always use linked lists as the underlying data structure for queues*
    - **arrays**: Since you are removing the first item you would need to use `unshift` which means every other item in the array needs to be shifted. An `O(n)` operation.
    - **linked list**: has a pointer to the head and when we remove the item, we just move the head pointer over to the next item.  An `O(1)` operation.
#### Queue Implementation
```javascript
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
q.enq("x"); // [x]
q.deq(); //[]

```


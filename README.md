
## TOC
- [Topics](#topics)
- [Pillars of Programming](#pillars-of-programming)
- [Big 0 Notation](#big-o-notation)
- [Computer Storage](#computer-storage)
- [Data Structures](#data-structures)
    - [Arrays](#arrays)

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

## Data Structures

### Arrays
<table>
<tr><td>lookup</td><td>O(1)</td></tr>
<tr><td>push</td><td>O(1)</td></tr>
<tr><td>insert</td><td>O(n)</td></tr>
<tr><td>delete</td><td>O(n)</td></tr>
</table>

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
    - Allow us to copy and rebuild an array in a new location.  



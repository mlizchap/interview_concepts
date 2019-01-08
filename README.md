
## TOC
- [Big 0 Notation](#big-o-notation)

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

### Pillars of Programming
1. scalabe
    1. speed (time)
    2. memory (space)
2.  readable

- space: variables, data strucures, function calls, allocations
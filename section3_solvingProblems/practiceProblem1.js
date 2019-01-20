// given 2 arrays create a function that lets a user know (true/fals) whether these 2 arrays contain any common items

const array1 = ['a', 'b', 'c', 'x'];
const array2 = ['z', 'y', 'x'];
    // returns false

const array3 = ['a', 'b', 'c', 'x'];
const array4 = ['z', 'y', 'x'];
    // returns true

function commonItems1(arr1, arr2) {
    let map = {};

    // create a hash map for the items in the first array
    arr1.forEach((i, index)=> {
      let item = arr1[index];
      if (!map[item]) {
        map[item] = true
      }
    });
    
    for (let j = 0; j < arr2.length; j++) {
      let item = arr2[j]
      if (map[item]) {
        return true
      }
    }
    
    return false;
  }
  // O(a + b) time complexity
  // O(a) space complexity

function commonItems2(arr1, arr2) {
  return arr1.some(item => arr2.includes(item))
}

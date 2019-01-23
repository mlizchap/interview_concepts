function containsDuplicate(arr) {
    let hasDupMap = new Map();
    for (let i = 0; i < arr.length; i++) {
      const item = arr[i];
      if (hasDupMap.has(item)) {
        return true;
      } else {
        hasDupMap.set(item, false);
      }
    }
    return false
  }
  
  console.log(containsDuplicate([1, 2, 3, 1])); // true
  console.log(containsDuplicate([1, 2, 3])); // false
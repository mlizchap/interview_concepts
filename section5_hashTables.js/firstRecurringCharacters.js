// given an array, return the character that gets repeated first

    // [2, 5, 2, 3, 4, 5, 1, 2, 4] --> returns 2
    // [2, 1, 1, 2, 3, 5, 2, 2, 4] --> returns 1
    // [2, 3, 4, 5] --> returns undefined

// with maps
function firstReturningCharacter1(arr) {
    const numberFreq = new Map();
    for (let i = 0; i < arr.length; i++) {
      if (numberFreq.has(arr[i])) {
        return arr[i]
      } else {
        numberFreq.set(arr[i], 1)
      }
    }
    return undefined;
  }
  
  // with objects
  function firstReturningCharacter2(input) {
    let map = {};
  
    for (let i = 0; i < input.length; i++) {
      if (map[input[i]] !== undefined) {
        return input[i]
      } else {
        map[input[i]] = true
      }
    }
  
    return undefined;
  }
  
  console.log(firstReturningCharacter1([2, 5, 2, 3, 4, 5, 1, 2, 4]));
  console.log(firstReturningCharacter1([2, 1, 1, 2, 3, 5, 2, 2, 4]));
  console.log(firstReturningCharacter1(2, 3, 4, 5));
  
  console.log(firstReturningCharacter2([2, 5, 2, 3, 4, 5, 1, 2, 4]));
  console.log(firstReturningCharacter2([2, 1, 1, 2, 3, 5, 2, 2, 4]));
  console.log(firstReturningCharacter2(2, 3, 4, 5));
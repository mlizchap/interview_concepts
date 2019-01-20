// given two arrays that are sorted can you merge into 1
// [0, 3, 4, 31, 32, 33], [4, 6, 30] -> [0, 3, 4, 4, 6, 30, 31]

function mergeSortedArrays(arr1, arr2) {
    const mergedArray = [];
    let arr1Item = array1[0];
    let arr2Item = array2[0];
    let i = 1;
    let j = 1;
  
    // check input
    if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
      return "does not contain 2 arrays as inputs"
    }
    if (arr1.length === 0 && arr2.length === 0) {
      return [];
    }
    if (arr1.length === 0) {
      return arr2;
    }
    if (arr2.length === 0) {
      return arr1;
    }
    while (arr1Item || arr2Item) {
      if (!arr2Item || arr1Item < arr2Item) {
        mergedArray.push(arr1Item);
        arr1Item = arr1[i];
        i++;
      } else {
        mergedArray.push(arr2Item);
        arr2Item = arr2[j];
        j++;
      }
    }
  
    console.log(mergedArray)
    return mergedArray;
  
  
  
  //   let count1 = 0;
  //   let count2 = 0;
  //   let merged = [];
    
  //   while (arr1.length > count1 && arr2.length > count2) {
  //     if (arr1[count1] < arr2[count2]) {
  //       merged.push(arr1[count1]);
  //       count1++;
  //     } else {
  //       merged.push(arr2[count2]);
  //       count2++;
  //     }
  //   }
  
  //   if (arr1.length > count1) {
  //     arr1.splice(count1).forEach(item => {
  //       merged.push(item)
  //     })
  //   } else {
  //     arr2.splice(count2).forEach(item => {
  //       merged.push(item)
  //     })
  //   }
  //   return merged;
  }
  
  // console.log(mergeSortedArrays([0, 3, 4, 31, 32, 33, 34], [4, 6, 30]));
  // console.log(mergeSortedArrays([1], []))
  // console.log(mergeSortedArrays("x", [1, 2]))
  
  
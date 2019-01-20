// create a function that reverses a string
// 'hi my name is Andrei' should be:
// 'ierdnA si eman yM iH'

function reverseString1(str) {
    // check input
    if (!str || str.length < 2 || typeof str !== 'string') {
      return 'hmm that is not good';
    }
  
    const backwards = [];
    const totalItems = str.length - 1;
  
    for (let i = totalItems; i >= 0; i--) {
      backwards.push(str[i]);
    }
  
    return backwards.join('');
  }
  
  // using the array method reverse():
  function reverseString2(str) {
    return str.split('').reverse().join('');
  }
  
  // es6:
  const reverseString3 = (str) => str.split('').reverse().join('');
  
  // spread operator
  const reverseString4 = (str) => [...str].reverse().join('');
  
  console.log(reverseString1('hi my name is Andrei'));
  console.log(reverseString2('hi my name is Andrei'));
  console.log(reverseString3('hi my name is Andrei'));
  console.log(reverseString4('hi my name is Andrei'));
const binaryArrayToNumber = arr => {
    const toBinaryString = arr.join('')
    console.log(toBinaryString)
    return parseInt(toBinaryString, 2)
  };

console.log(binaryArrayToNumber([0,0,0,1])) // 1
console.log(binaryArrayToNumber([1,1,1,1])) // 15
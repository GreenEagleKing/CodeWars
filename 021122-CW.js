// 8 kyu Counting sheep...

// 4/5 Array Redo

// Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

// true or false, can be null or undefined,
// return total number of true values in array




function countSheeps(arrayOfSheep) {
    return arrayOfSheep.filter(item => item === true).reduce((acc, c) => acc + c, 0)
  }

console.log(countSheeps([true, true, false, true])) // 3
console.log(countSheeps([true, , null, false, true])) // 2
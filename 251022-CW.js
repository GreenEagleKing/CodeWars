// 8 kyu Counting sheep...

// 4/5 Array challenge

// We need a function that counts the number of sheep present in the array (true means present).

// array, true or false, can get null/undefined
// number, 0 >

function countSheeps(arrayOfSheep) {
    let count = 0
    arrayOfSheep.forEach(element => {
        if ( element === true) {
            count++
        }
    })
    return count
  }

console.log(countSheeps([true, false, false, true, true, true, false, true])) // 5 sheep
console.log(countSheeps([null, false,  , true])) // 1

function countSheeps(arrayOfSheep) {
    //create count variable
    let count = 0
    // for each array value
    arrayOfSheep.forEach(element => {
        if ( element === true) {
            count++
        }
      
    })
    return count
    // if true, add one to count,
    // return variable count
  }
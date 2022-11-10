// 8 kyu Array plus array

// 2 arrays, integers, pos/neg
// sum of both arrays

// join arrays together
// reduce the array
// return sum


function arrayPlusArray(arr1, arr2) {
    return arr1.concat(arr2).reduce((acc, current) => acc + current)
  }

console.log(arrayPlusArray([1, 2, 3], [4, 5, 6])) // 21
console.log(arrayPlusArray([-1, -2, -3], [-4, -5, -6])) // -21
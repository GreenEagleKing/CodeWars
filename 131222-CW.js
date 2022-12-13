// 6 kyu Find the odd int

// Given an array of integers, find the one that appears an odd number of times.

// array of integer, pos/neg, only one odd number of integers
// odd integer

// sort the array low to high
// 

function findOdd(A) {
    let orderedArr = A.sort((a,b) => a - b)
    let count = 0
     let filtered = orderedArr.filter((el, ind) => {
            if (el === el) {
                count += 1
                if(count % 2 !== 0) {
                    return count
                }
                return count
            }
        })
        console.log(filtered)
  }

console.log(findOdd([7])) // 7 
console.log(findOdd([1,1,2])) // 2


function findOdd(A) {
    return A.find((item, index) => A.filter(el => el == item).length % 2)
}

console.log(findOdd([7])) // 7 
console.log(findOdd([1,1,2])) // 2


function findOdd(A) {
    return A.find((item, index) => A.filter(el => el == item).length % 2 !== 0)
}

console.log(findOdd([7])) // 7 
console.log(findOdd([1,1,2,4,5,4,3,3,5])) // 2
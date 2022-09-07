// 8 kyu Count by X

// Create a function with two arguments that will return an array of the first n multiples of x.

// P - positive number greater than 0
// R - array, 
// E
// P

// multiply x by the each iteration of a loop (+1) until you reach n


function countBy(x, n) {
    let z = [];
    for (let i = 1; i <= n; i++) {
        z.push(x * i)
    }
    return z;
  }

  countBy(2,5) //[2,4,6,8,10]


// 7 ky Factorial

// Your task is to write function factorial.  

// P - number
// R - factorial number
// E
// P

// create variable sum to keep total
// for loop, starting from n down to 1
// each loop 5 x loop value
// add result to sum

function factorial(n){
    let sum = 1
    for(let i = 1; i <= n; i++) {
        sum *= i
    }
    return sum
  }

factorial(0) // 120 = 5x4x3x2x1 = 120
// 8 kyu No Loops 2 - You only need one

// You will be given an array (a) and a value (x). All you need to do is check whether the provided array contains the value, without using a loop.

// P - a = array, b = value, numbers or strings, case-sensitive strings
// R - if value is in array return true else false
// E
// P - use includes()


function check(a,x){
    return a.includes(x)
};

check([66,101], 66) // true
check(['t','e','s','t'], 't') // true


// 8 kyu Multiple of index

// P - array of integers, neg or pos
// R - create new array with value if they are a multiple of their index
// E
// 

// create new array using filter
// if the element % index === 0 add to array 

function multipleOfIndex(array) {
    return array.filter((element, index) => element % index === 0)
  }

multipleOfIndex([22, -6, 32, 82, 9, 25]) // [-6, 32, 25]
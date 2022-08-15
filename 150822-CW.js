// 8 kyu Bin to Decimal

// Complete the function which converts a binary number (given as a string) to a decimal number.

// P - binary number as a string
// R - decimal number
// E
// P - Use parseInt, take bin as the string input and set 2 as the radix number

function binToDec(bin){
    return parseInt(bin, 2)
  }

binToDec("1001001") // 73
binToDec("1") // 1

// 7 kyu Find the middle element

//  You need to create a function that when provided with a triplet, returns the index of the numerical element that lies between the other two elements.

//P - array, numbers can be float, neg/pos etc..
//R - middle index
//E
//P

// turn the array values from strings to numbers
// sort the array values from lowest to highest
// create variable which holds middle value
// return the index from the original array which matches the variables

function gimme (triplet) {
    let convertStr = triplet.map(str => Number(str))
    let sortStr = convertStr.sort((a, b) => a -b)
    let val = sortStr[1]
    return triplet.indexOf(val)
}

gimme([18,-46,36]) // 0
gimme([10.4, 5.9, 14.2]) // 1

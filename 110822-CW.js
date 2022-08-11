// 8 kyu Hex to Decimal

//Complete the function which converts hex number (given as a string) to a decimal number.

//P - string. hex number
//R - float integer
//E
//P

function hexToDec(hexString){
    return parseInt(hexString, 16)
  }

hexToDec("1") // 1
hexToDec("a") // 10
hexToDec("10") // 16


// 7 kyu Form The Minimum

// Given a list of digits, return the smallest number that could be formed from these digits, using the digits only once

// P - array value, positive integers only, no zeros
// R - smallest concatenated number
// E
// P

// Create new Set from array which removes duplicates
// sort the numbers from lowest to highest
// concatenate each number together and return

function minValue(values){
    const sortVal = values.sort((a, b) => a - b)
    const valSet = new Set(values)
    let num = "";
    valSet.forEach(value => num += value)
    return Number(num)
}

minValue([1, 3, 1]) // 13
minValue([5, 7, 9, 5, 7]) // 579
minValue([5, 6, 9, 9, 7, 6, 4]) // 45679
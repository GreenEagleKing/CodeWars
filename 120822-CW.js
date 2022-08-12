//8 kyu Sort and Star

//You must sort it alphabetically  and then return the first value.

// P - strings in array, case-sensitive, sort based on ascii values of characters
// R - return string with *** between each letter
// E
// P

//sort each item alphabetically in array
// split the 1st item in array into letter and join adding *** and return

function twoSort(s) {
 return s.sort()[0].split("").join("***")
}

twoSort(["turns", "out", "random", "test", "cases", "are", "easier", "than", "writing"])
twoSort(["bitcoin", "take", "over", "the"]) // "b***i***t***c***o***i***n"

function sort(d) {
    return d.sort()
}

sort(["turns", "out", "random", "test", "cases", "are", "easier", "than", "writing"])


//8 kyu Multiplication table for number

// Your goal is to return multiplication table for number that is always an integer from 1 to 10.

// P - integer, multiplied from 1 to 10, /n in string jumps to next line
// R - multiplcation table 
// E
// P

// For loop from 1 to 10
// each loop multiply the number by the iteration
// print to console calculation and sum e.g. 5 * 5 = 25
//remember new line for each calculation


function multiTable(number) {
    let sumArr = [];
    for (let i = 1; i <= 10; i++) {
        if(i !== 10) {
            sumArr.push(`${i} * ${number} = ${i * number}\n`)
        }
        else {
            sumArr.push(`${i} * ${number} = ${i * number}`)
        }
    }
    return sumArr.join("")
  }

multiTable(5)   // 1 * 5 = 5
                // 2 * 5 = 10
                // 3 * 5 = 15
                // 4 * 5 = 20
                // 5 * 5 = 25
                // 6 * 5 = 30
                // 7 * 5 = 35
                // 8 * 5 = 40
                // 9 * 5 = 45
                // 10 * 5 = 50
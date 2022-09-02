// 7 kyu Printer Errors

// You have to write a function printer_error which given a string will return the error rate of the printer as a string representing a rational whose numerator is the number of errors and the denominator the length of the control string.


// P - string - letters
// R - string - how many letters are errors out of total e.g. "3/56"
// E
// P

// split into single letters
// set variable with array length
// search for any non a-m letters
// once found extract these letters into a new array, count length of array
// return string of extracted letters length + original array length

// scrap that can just use match to extract letters from string and return length

function printerError(s) {
    let errorStr = s.match(/[n-z]/gi) || []
    return `${errorStr.length}/${s.length}`
}

printerError("aaaxbbbbyyhwawiwjjjwwm") // "8/22"
printerError("aaabbbbhaijjjm") // "0/14"

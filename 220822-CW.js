// 7 kyu Sum of two lowest positive integers

// Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. 

// P - positive integers only
// R - 2 lowest numbers summed together in array
// E - 
// P - 

// sort the array ascending 
// extract 0 and 1 index values
// add values together and return


function sumTwoSmallestNumbers(numbers) {  
    return numbers.sort((a,b) => a - b).slice(0,2).reduce((acc,c) => acc + c)
}

sumTwoSmallestNumbers([5, 8, 12, 19, 22]) // 13

// 7 kyu Mumbling 

// Multiply the letter in the string by the index position

// P - string, upper and lowercase
// R - string, uppercase first letter every time and subsequent lowercase 
// E
// P

// split string into single letters
// map split array
// for each letter make the first iteration a uppercase and then lowercase multiplied by the index
// join array together with a hyphen

function accum(s) {
	let splitStr = s.toLowerCase().split("")
    let mapStr = splitStr.map((element, index) => {
        return element.toUpperCase() + element.repeat(index)
    })
    return mapStr.join("-")
}

accum("ZpglnRxqenU") // "Z-Pp-Ggg-Llll-Nnnnn-Rrrrrr-Xxxxxxx-Qqqqqqqq-Eeeeeeeee-Nnnnnnnnnn-Uuuuuuuuuuu"
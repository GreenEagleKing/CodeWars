// 7 kyu Simple Fun #176: Reverse Letter

// Given a string str, reverse it and omit all non-alphabetic characters.

// P - string, includes numbers, letters and others
// R - string in reverse with on alphabet characters
// E
// P

// split string into single characters, reverse and join
// use replace function for only a-z characters
// return and reverse string

function reverseLetter(str) {
    return str.split("").reverse().join().replace(/[^a-z]+/g, '')
}

reverseLetter("ultr53o?n") //  "nortlu"
// Your job is to figure out the index of which vowel is missing from a given string:

// A has an index of 0,
// E has an index of 1,
// I has an index of 2,
// O has an index of 3,
// U has an index of 4.
// Notes: There is no need for string validation and every sentence given will contain all vowels but one. Also, you won't need to worry about capitals.

// Examples
// "John Doe hs seven red pples under his bsket"          =>  0  ; missing: "a"
// "Bb Smith sent us six neatly arranged range bicycles"  =>  3  ; missing: "o"

// string and array arguements, string is letters only, dw about caps, all sentance will miss one vowel
// index of from the array of vowels, number only

// for each value in the array
// find the letter in the string
// if the value is not in string then return the index of the vowel

function missingVowel(str) {
    const arr = ["a","e","i","o","u"]
    for(let vowel of arr) {
        if(!str.includes(vowel)) {
            return arr.indexOf(vowel)
        }
    }
}


console.log(missingVowel('John Doe hs seven red pples under his bsket'), 0)
console.log(missingVowel('Bb Smith sent us six neatly arranged range bicycles'), 3)
console.log(missingVowel('Today i went p the ladder'), 4)
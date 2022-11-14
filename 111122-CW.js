//6 kyu Duplicate Encoder

// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

// string, each character is '(' unless it occurs more than once then it is ')', ignore captials

// remove capitals - toLowerCase()
// split the word into individual letters
// create new array based upon if letter is repeated or not
// compare element index of against lastindexof element
// if it is the same then return '('
// if not return ')'


function duplicateEncode(word){
    return word
            .toLowerCase()
            .split("")
            .map((el, i, arr) => {
                if (arr.indexOf(el) === arr.lastIndexOf(el)) {
                    return '('
                } else {
                    return ')'
                }
            }).join("")
}

console.log(duplicateEncode("din")) // '((('
console.log(duplicateEncode("recede")) // "()()()"
// 6 kyu Duplicate Encoder

// Difficult redo this one

// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

// string, upper and lowercase, can be any character
// string, "(" only one occurrence, ")" multiple, one per character

// split word into single letters
// filter repeated elements into

function duplicateEncode(word){
        return word
          .toLowerCase()
          .split('')
          .map( function (a, i, w) {
            return w.indexOf(a) == w.lastIndexOf(a) ? '(' : ')'
          })
          .join('');
}

console.log(duplicateEncode("apple")) // "())(("
console.log(duplicateEncode("din")) // "((("


// Your task is to remove all consecutive duplicate words from a string, leaving only first words entries. For example:

// "alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta"

// --> "alpha beta gamma delta alpha beta gamma delta"

// single string only, no funny buis, words only, lowercase
// string with the consecutive dups removed

// split into words
// filter over array
// if the previous word is same as current word then dont add it to new array
// join words and return string

function removeConsecutiveDuplicates(str) {
    const words = str.split(" ")
    return words.filter((w, i) => {
        return w !== words.at(i + 1)
    }).join(" ")
}

console.log(removeConsecutiveDuplicates("alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta"), "(alpha beta gamma delta alpha beta gamma delta)" )
console.log(removeConsecutiveDuplicates("Hello Ben Ben Hello Steve Hello Hello"), "(Hello Ben Hello Steve Hello)")
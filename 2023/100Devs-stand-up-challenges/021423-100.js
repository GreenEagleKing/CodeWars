//Given a string of words (x), you need to return an array of the words, sorted alphabetically by the final character in each.

//If two words have the same last letter, they returned array should show them in the order they appeared in the given string.

//All inputs will be valid.

// string, all valid, only alphabetical
// array of strings, in alphabetical order based on the last letter of that word, if the same letter then show in order of the inputted string

// split the string into seperate words in an array
// map over the array
// for each word sort it based on the last char e.g sort((a,b) => a.indexOf(-1) - b.indexOf(-1))
// return array

function last(x) {
    const words =  x.split(" ")
    return words.map(word => {
        return word.at(-1) + word
    }).sort()
}

function last(x) {
    return x.split(" ").sort((a, b) => {
            a.slice(-1) > b.slice(-1)
    })
}

const last = ( x ) => x.split(' ').sort((a,b) => a.slice(-1) > b.slice(-1))

console.log(last('man i need a taxi up to ubud')), 'a', 'need', 'ubud', 'i', 'taxi', 'man', 'to', 'up' //, ['a', 'need', 'ubud', 'i', 'taxi', 'man', 'to', 'up']
console.log(last('what time are we climbing up the volcano'), 'time', 'are', 'we', 'the', 'climbing', 'volcano', 'up', 'what') //, ['time', 'are', 'we', 'the', 'climbing', 'volcano', 'up', 'what']
console.log(last('take me to semynak'), 'take', 'me', 'semynak', 'to') //, ['take', 'me', 'semynak', 'to'] 


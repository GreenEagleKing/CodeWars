// Count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

// What if the string is empty? Then the result should be empty object literal, {}.

// string of chars only
// object of the count total number of each char in string, e.g. {'a':2, 'b':1}, if string empty return {}

// split the string into chars
// loop through each character using (for of)
// create a value with that char if it does not exist and add 1
// if it does already exist add 1 to the char count
// return object

function countChars(str) {
    let countObj = {}
    str.split("")
    for (let char of str) {
        if (Object.hasOwn(countObj,char)) {
            countObj[char] += 1
        } else {
            countObj[char] = 1
        }
    }
    return countObj

}

console.log(countChars('aba'), {'a': 2, 'b': 1})
console.log(countChars('hello'), {'h': 1, 'e': 1,'l': 2,'o': 1})
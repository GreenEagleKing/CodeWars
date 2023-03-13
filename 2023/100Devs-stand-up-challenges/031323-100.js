// Given a string of characters, return the character that appears the most often.

// describe("Max Character", () => {
//  it("Should return max character", () => {
//   assert.equal(max("Hello World!"), "l");
//  });
// });

// No String or Array Methods (well brute force it first, but then no methods)! 


// string of characters only
// return the character that appears the most often in the string, return string only

// split the string into single chars
// create new object
// loop over each char in the string
// if the string already exists in the obj add one to it
// else add char to object and add one
// reduce the object keys to find the highest count


const maxCharacter = (str) => {
    str.split("")
    let strCount = {}

    for(let char of str) {
        if (Object.hasOwn(strCount, char)) {
            strCount[char] += 1
        } else {
            strCount[char] = 1
        }
    }
    return Object.keys(strCount).reduce((a, b) => strCount[a] > strCount[b] ? a : b);
}


console.log(maxCharacter('hello world'), 'l')
console.log(maxCharacter('simon says'), 's')
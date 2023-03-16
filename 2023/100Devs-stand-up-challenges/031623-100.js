// Given a magazine of words and a ransom note, determine if it’s possible to “cut out” and create the ransom note from the magazine words.

// const magazine =
//  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum";

// describe("Ransom Note", () => {
//  it("Should return true", () => {
//   assert.equal(ransomNote("sit ad est sint", magazine), true);
//  });

// it("Should return false", () => {
//   assert.equal(ransomNote("sit ad est love", magazine), false);
//  });

// it("Should return true", () => {
//   assert.equal(ransomNote("sit ad est sint in in", magazine), true);
//  });

// it("Should return false", () => {
//   assert.equal(ransomNote("sit ad est sint in in in in", magazine), false);
//  });
// });


// string characters only
// boolean - note must match exactly the strings/occurrences of that string in the magazine to be true

// create an object
// split the magazine string into single words
// loop over each mag string and compare note strings
// add 1 to for each string that is the same
// and if it matches a note string -1
// if count of that letter is less than 1 then return false


const magazine =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum";

const ransomNote = (note, magazine) => {
    let magObj = {}
    let wordMag = magazine.split(" ")
    for(let word of wordMag) {
        if(Object.hasOwn(magObj, word)) {
            magObj[word] += 1
        } else {
            magObj[word] = 1
        }
    }
     let noteWords = note.split(" ")
     let possible = true
     
     noteWords.forEach(word => {
        if(Object.hasOwn(magObj, word)) {
            magObj[word] - 1
            if(magObj[word] < 1) {
                possible = false
            }
        } else {
            possible = false
        }
    })

    return possible
}

console.log(ransomNote("sit ad est sint", magazine), true)
console.log(ransomNote("sit ad est love", magazine), false)
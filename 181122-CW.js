// 6 kyu WeIrD StRiNg CaSe

// 5 / 5 String challenge 2

// Write a function that accepts a string, and returns the same string with all even indexed characters in each word upper cased, and all odd indexed characters in each word lower cased. 

// string, only alphabetical and single space between words
// string, each even index letter is uppercase, odd is lowercase, 0 index is even, 

// make string lowercase()
// split string in to words
// map new array
// if element indexOf % 2 === 0
// 

function toWeirdCase(string){
    return string.split(" ").map(word => {
        return word.split("").map((char, ind) => {
                if (ind % 2 === 0) {
                    return char.toUpperCase()
                } else {
                    return char.toLowerCase()
                }
            }).join("")
        }).join(" ")
}
   

  console.log(toWeirdCase('String')) // 'StRiNg
  console.log(toWeirdCase('Weird sting case')) // 'WeIrD StRiNg CaSe'
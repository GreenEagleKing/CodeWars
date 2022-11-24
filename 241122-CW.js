// 6 kyu WeIrD StRiNg CaSe

// 5/5 string challenge 2 redo

// return the same string with all even indexed characters in each word upper cased, and all odd indexed characters in each word lower cased. 

// string, alphabet only, with singles spaces, 
// function on each word, even indexed chars uppercase, odd chars lowercase, starts at 0 which is even

// make lowercase all
//split the string into words
// loop through all the words
// map new word
// 

function toWeirdCase(string){
    return string.toLowerCase().split(" ").map(word => {
        return word.split("").map((char, index) => {
            if (index % 2 === 0) {
                return char.toUpperCase()
            } else {
                return char
            }
        }).join("")
    }).join(" ")
}

  console.log(toWeirdCase('Weird string case')) // 'WeIrD StRiNg CaSe'
console.log(toWeirdCase('String')) // 'StRiNg'

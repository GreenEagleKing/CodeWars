// 7 kyu Love vs friendship

// P - lowercase string
// R - integer total of letter values if a = 1, b = 2 et.. z = 26
// E
// P

// create alphabet array with 26 characters
// set a counter to keep tally, set inital total as string length to make up for alphabet array index values 1 less
// split the string and for each element get the index of that element from the alphabet array

function wordsToMarks(string){
    const alphabet = [...'abcdefghijklmnopqrstuvwxyz'];
    let count = string.length
    string.split("").forEach((element, index) => {
        count += alphabet.indexOf(element)
    })
    return count
  }

  wordsToMarks("attitude") // 100
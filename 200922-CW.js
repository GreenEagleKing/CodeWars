// 7 kyu Alternate capitalization

// Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.

// P - string, lowercase, no spaces
// R - string, even index = uppercase, odd index = lowercase, into array
// E
// P

// Create array for results
// 

function capitalize(s){
    const resultArr = []
    let str = s.split("")
    let count = 0
    for(let i = 0; i < str.length; i++) {
        if (i % 2 === 0 && count === 0) {
            resultArr.push(str[i].toUpperCase())
        } else if (i % 2 !== 0 && count === 1) {
            resultArr.push(str[i].toLowerCase())    
        } else {
            resultArr.push(str[i])
        }
        count++
    }
    return resultArr
  };

capitalize("abcdef") // ['AbCdEf', 'aBcDeF']

// Answer

// should have split into 2 separate functions


function capitalize(s){
    const odd = s.split("").map((l, i) => i % 2 !== 0 ? l.toUpperCase() : l).join("");
    const even = s.split("").map((l, i) => i % 2 === 0 ? l.toUpperCase() : l).join("");
    return [even, odd];
  };
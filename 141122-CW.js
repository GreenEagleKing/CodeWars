// Strings R2

// 1/5

// 6 kyu Counting Duplicates

// count the numbers of duplicates

// upper and lowercase, letters and numbers, only alphabet,
// return the count, integer

// make elements lowercase()
// 

function duplicateCount(text){
    let count = {}
    let converted = text.toLowerCase().split("")
    let sum = converted.forEach(element => {
                count[element] = (count[element] || 0) + 1
            })
  }

console.log(duplicateCount("aaBbcccd")) // 2
console.log(duplicateCount("abc11f")) // 1

// completed version

// make string lowercase
// split string into array
// sort array in order
// join array back into string


function duplicateCount(text){
    let converted = text.toLowerCase().split("").sort().join("")
    console.log(converted)
    let match = converted.match(/([^])\1+/g) || []
    console.log(match)
    return match.length
    
  }

console.log(duplicateCount("aaBbcccd")) // 2
console.log(duplicateCount("abc11f")) // 1

// this solution makes sense

// to lowercase, split into array
// filter the array
// if the index is not equal to the current index and the index searched from the right is equal to the index add to array
// return length of array

function duplicateCount(text){
    return text.toLowerCase().split('').filter(function(val, i, arr){
      return arr.indexOf(val) !== i && arr.lastIndexOf(val) === i;
    }).length
  }

console.log(duplicateCount("aaBbcccd")) // 2
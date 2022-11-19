// 6 kyu Counting Duplicates

// 1 / 5 redo string challenge 2

// string, alphabetical and numbers, can be upper and lowercase
// return count of more than 1 occurrence in the string

// make text lowercase
// split the string into characters
// 

function duplicateCount(text){
    return text.toLowerCase().split("").filter((element, index, arr) => {
        return arr.indexOf(element) !== index 
        // && arr.lastIndexOf(element) === index
    }).length
  }


console.log(duplicateCount('aaBbvdf')) // 2 

// Difficult would like to redo again
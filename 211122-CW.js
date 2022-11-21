// 6kyu Your order, please

// REDO 2/5 Challenge 2

// sort the string into order based on number in word

// numbers 1-9, string can be empty, string word valid consec numbers
// return a string in order 

// split the string into words
// for loop for number of words in string
// search array for word that has the loop number
// once found add to end of new array


function order(words){
    let result = []
    let arr = words.split(" ")
    for(let i = 0; i <= arr.length; i++) {
        for(let j = 0; j < arr.length; j++) {
            if (arr[j].indexOf(i) >= 0) {
                result.push(arr[j])
            }
        }
      
    }
    return result.join(" ")
}

console.log(order('is2 Thi1s T4est 3a')) // "Thi1s is2 3a T4est"    
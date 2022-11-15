// 6 kyu Your order, please

// 2/5 String challenge 2

// sort string, each string contains number, the number is the position the word should have in the result
// numbers, 1-9, if empty return empty, words only contain valide consecutive numbers, so no dups or missing numbers

// split the words string into separate words
// create for loop for length of split word


function order(words){
    let splitWord = words.split(" ")
    console.log(splitWord)
    for(let i = 1; i <= splitWord.length; i++) {
        
    }
}

console.log(order('is2 Thi1s T4est 3a')) // Thi1s is2 3a T4est

// 

function order(words){
    var array = words.split(' ');
    var sortedArray = [];
    for(i = 0; i <= array.length; i++) {
      for(j = 0; j < array.length; j++) {
        if(array[j].indexOf(i) >= 0) {
          sortedArray.push(array[j]);
          console.log(array[j])
        }
      }
    }
    return sortedArray.join(' ');
  }

  console.log(order('is2 Thi1s T4est 3a')) // Thi1s is2 3a T4est
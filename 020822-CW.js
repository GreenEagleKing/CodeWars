// 7 kyu Disemvowel Trolls

// Your task is to write a function that takes a string and return a new string with all vowels removed.

//P - string, vowels(y not included)
//R - string with vowels removed
//E -  "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!"
//P

// split string into words
//select and remove all vowels from each word
//join words back together and return

function disemvowel(str) {
    return str.replace(/[aeiou]/ig, '')
}

disemvowel("This website is for losers LOL!")




//6 kyu Find the unique number

//There is an array with some numbers. All numbers are equal except for one. Try to find it!

// P - numbers, array
// R - number from array
// E - findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// P

// sort array in order
//if value is the same as the next value, remove from array
// if not return that value


function findUniq(arr) {
    for (let i = 0; i < arr.length; ++i) {
        
    }
}

findUniq([ 0, 1, 0 ])
findUniq([ 1, 1, 1, 2, 1, 1 ])

function findUniq(arr) {
    arr.sort((a,b) => a-b);
    return arr[0] == arr[1] ? arr.pop() : arr[0]
  }
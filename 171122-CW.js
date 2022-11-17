// 6 kyu Split Strings

// 4 / 5 string challenge 2

// split string into pairs of 2 characters, if odd then replace 2nd character with _

// string, only letters, no numbers, all lowercase
// string, pairs of 2 in order, new array

// split string into pairs
// 

function solution(str){
    if (str.length % 2 !== 0){
        str = str + '_'
    }
   return str.match(/../g)
   
}

console.log(solution('abc')) // ['ab', 'c_']
console.log(solution('abcdefg')) // ['ab','cd','ef', ;g_]
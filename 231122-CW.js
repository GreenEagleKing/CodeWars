// 6 kyu Split Strings

// 4/5 string challenge redo 2

// Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

//string, numbers and letters, 
// return an array of string pairs

// if the string length is not even add '_' to the end
// use string match to split the string into pairs

function solution(string) {
  let newStr = ''
  if(string.length % 2 !== 0) {
    newStr = string.concat('_')
  }
  console.log(typeof string)
  return newStr.match(/../g)
}

console.log(solution('abc')) // ['ab', 'c_']
console.log(solution('abcd')) // ['ab', 'cd']
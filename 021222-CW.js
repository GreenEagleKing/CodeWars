// 6 kyu Find the missing letter

// Write a method that takes an array of consecutive (increasing) letters as input and that returns the missing letter in the array.

// array, letters english alphabet, only one case, length always at least 2

// map the ascii code
// for each ascii value
// for i = asciii[0]
/// if ascii add 1 !== next value
// insert ascii + 1
// return insert value to letter


function findMissingLetter(array) {
  let toNum = array.map((el, i) => el.charCodeAt())
  for(let i = toNum[0];i <= toNum[0] + toNum.length; i++) {
    if(!toNum.includes(i)) {
        return String.fromCharCode(i)
    }
  }
}

console.log(findMissingLetter(['a','b','c','d','f'])) // 'e'
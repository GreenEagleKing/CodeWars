// 7 kyu Exes and Ohs

// Check to see if a string has the same amount of 'x's and 'o's.

// string, can contain any char, case insensitive
// boolean return

// string to lowercase
// reduce x
// reduce o
// 

function XO(str) {
    let newStr = str.toLowerCase().split("")
    let xStr = newStr.filter(el => el === 'x')
    let oStr = newStr.filter(el => el === 'o')
    return xStr.length === oStr.length ? true : false
}

console.log(XO('ooxx')) // true
console.log(XO('xooxx')) // false
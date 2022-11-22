// 6 kyu CamelCase Method

// 3/5 redo string challenge 2

// Write simple .camelCase method (camel_case function in PHP, CamelCase in C# or camelCase in Java) for strings. All words must have their first letter capitalized without spaces.

// split string into words and make lowercase
// map new array
// make 1st letter of each word uppercase
// else normal
// join array together no space

String.prototype.camelCase=function(){
    let str = this.toLowerCase().split(" ")
    let newArr = str.map(element => {
        return element.charAt(0).toUpperCase() + element.slice(1)
    })
    return newArr.join("")
  }

console.log("test case".camelCase()) //"TestCase"
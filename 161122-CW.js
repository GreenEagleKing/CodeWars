// 6 kyu CamelCase Method

// 3/5 string challenge 2 

// converting strings to camelCase, all words first letter uppercase, no spaces
// string, no spaces, upper only first

// make all lowercase()
// split string into words
// for each word make first letter upperCase
// join words back together no spaces


String.prototype.camelCase = function(){
    let str = this.toLowerCase().split(" ")
    let strArr = str.map(element => {
        return element.charAt(0).toUpperCase() + element.slice(1)
    })
    return strArr.join("")
  }

console.log("hello case".camelCase()) // "HelloCase"
console.log("camel case word fun".camelCase()) // "CamelCaseWordFun"


String.prototype.camelCase = function(){
    return this.toLowerCase().split(" ").map(element => {
        return element.charAt(0).toUpperCase() + element.slice(1)
    }).join("")
  }

console.log("hello case".camelCase()) // "HelloCase"
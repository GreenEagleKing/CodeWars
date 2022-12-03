// 6 kyu Convert string to camel case

// Complete the method/function so that it converts dash/underscore delimited words into camel casing. 

// string, first letter only uppercase if already, all other words upper first letter, no other datatype
// string, pascal case

// split string into array
// map new array
// except first array value, Make first letter upper of each word
//join array into string

function toCamelCase(str){
    let splitStr = str.split(/[-_]/g)
    let newStr = splitStr.map((el, i) => {
        if (i !== 0) {
           return el.charAt(0).toUpperCase() + el.slice(1, el.length)
        }
    }).join("")
    return splitStr[0] + newStr
}

console.log(toCamelCase("the-stealth-warrior")) // "theStealthWarrior"
console.log(toCamelCase("The_Stealth_Warrior")) // "TheStealthWarrior"

// perfect answer

function toCamelCase(str){
    var regExp=/[-_]\w/ig;
    return str.replace(regExp,function(match){
          return match.charAt(1).toUpperCase();
     });
}
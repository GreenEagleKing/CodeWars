// 6 kyu Encrypt this!

// P - string with a space between words, no special characters
// R - string, 1st letter converted to ascii number, 2nd letter switched with last letter of word
// E
// P


// split text into seperate words 
// put split text into array
// for each word:
    // replace 1st letter with ascii code
    // replace 2nd letter with last letter of word
// return new array joined together as string

var encryptThis = function(text) {
    let str = Array.from(text.split(" "))
    return str.map((element, index) => {
        let ascii = element.replace(element.substring(0), element.charCodeAt([0]))
        let lastLet = element.replace(element.substring(1), element.substring(element.length - 1))
        console.log(ascii)
        console.log(lastLet)
            
    })
    return str
}

encryptThis("hello world") // "104olle 119drlo"
encryptThis("Hello") // "72olle"

// Best practice used regex not familiar with yet

const encryptThis = text => text
  .split(' ')
  .map(word => word
  .replace(/(^\w)(\w)(\w*)(\w$)/, `$1$4$3$2`)
  .replace(/^\w/, word.charCodeAt(0)))
  .join(' ');
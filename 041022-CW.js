// 4 / 5 String Challenge

// 6 kyu Stop gninnipS My sdroW!

// Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed

// P - string, only letters and spaces, spaces only included when 1 or more words
// R - if the string is has greater than 5 letters reverse the string, return full string
// E
// P

// split string into words
// map each element  if string length is > 5 characters reverse word
// if less than 5 do nothing
// join words back together and return



function spinWords(string){
    let result = string.split(" ").map(element => {
        if (element.length >= 5) {
            return element.split("").reverse().join("")
        } else {
            return element
        }
    })
    return result.join(" ")
  }

  spinWords( "Hey fellow warriors" )  // "Hey wollef sroirraw"
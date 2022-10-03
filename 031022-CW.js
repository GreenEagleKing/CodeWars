// 3 / 5 String Challenge

// 8 kyu Reversed Words

// Complete the solution so that it reverses all of the words within the string passed in.

// P - string, mulitple words
// R - reverse only words
// E
// P

// Split string into seperate words
// reverse each word
// join words together and return string

function reverseWords(str){
    return str.split(" ").reverse().join(" ")
  }

str("hello world!") // "world! hello"
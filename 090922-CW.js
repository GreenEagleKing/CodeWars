// 8 kyu get character from ASCII Value

// Write a function get_char() / getChar() which takes a number and returns the corresponding ASCII char for that value.

// P - number, integer, positive only
// R - ascii value as string
// E
// P

// find ascii conversion online
// use fromCharCode()

function getChar(c){
    return String.fromCharCode(c)
  }

getChar(65) // 'A'
getChar(60) // '<'

// 7 kyu Exclamation marks series #3: Remove all exclamation marks from sentence except at the end

// Remove all exclamation marks from sentence except at the end.

// P - string
// R - string with only exclamation marks at the end
// E
// P

// 

function remove (string) {
    let splitStr = string.split("!")
    return splitStr
  }

remove('!Hi! Hi!!!') // 'Hi!'


function remove(s) {
    return s.replace(/!+(?!!*$)/g, '');
  }
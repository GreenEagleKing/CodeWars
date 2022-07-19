// 8 kyu Grasshopper - Terminal game move function

// Create a function for the terminal game that takes the current position of the hero and the roll (1-6) and return the new position.

function move (position, roll) {
    return position + (roll * 2)
  }

  move(3,6)

// 7 kyu Get the Middle Character

// You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

function getMiddle(s) {
  let strSplit = s.split("")
  console.log(strSplit)
  let strMiddle = Math.round(strSplit.length / 2)
  console.log(strMiddle)
  if (s.length % 2 !== 0) {
    console.log("ODD")
    return strSplit[Math.floor(strSplit.length / 2)]
  } else {
    console.log("EVEN")
    return strSplit[Math.floor(strSplit.length / 2 - 1)] + strSplit[Math.floor(strSplit.length / 2)]
  }
}

getMiddle("testing")

function getMiddle(s) {
    let strSplit = s.split("")
    let strMiddle = Math.round(strSplit.length / 2)
    if (s.length % 2 !== 0) {
      return strSplit[Math.floor(strSplit.length / 2)]
    } else {
      return strSplit[Math.floor(strSplit.length / 2 - 1)] + strSplit[Math.floor(strSplit.length / 2)]
    }
  }
  
  getMiddle("testing")

  // Like this solution 

  function getMiddle(s) {
    var middle = s.length / 2;
    return (s.length % 2) 
      ? s.charAt(Math.floor(middle))
      : s.slice(middle - 1, middle + 1);
  }

// 8 kyu Find Maximum and Minimum Values of a List

var min = function(list){
    
    return Math.min(...list);
}

var max = function(list){
    
    return Math.max(...list);
}
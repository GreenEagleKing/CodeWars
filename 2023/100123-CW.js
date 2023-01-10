// 7 kyu Friend or Foe?

// Make a program that filters a list of strings and returns a list with only your friends name in it.

// array of string names
// return array if strings that have length of 4 only



function friend(friends){
    return friends.filter((element, index) => element.length === 4)
}
console.log(friend(["Ryan", "Kieran", "Mark"])) //["Ryan", "Mark"])
// 5 / 5 String Challenge

// 6 kyu Who likes it?

// Implement the function which takes an array containing the names of people that like an item. It must return the display text as shown in the examples:

// []                                -->  "no one likes this"
// ["Peter"]                         -->  "Peter likes this"
// ["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
// ["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
// ["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"

// P - string array
// R - see above
// E - see above
// P

// if array = [] - return "no one likes this"
// else if array = ["Peter"] - return "names[0] likes this"
// else if array = ["Jacob", "Alex"] - return names[0] and names[1] like this"
// else if array = ["Max", "John", "Mark"] - return "names[0], names[1] and names[2] like this"
// else array = ["Alex", "Jacob", "Mark", "Max"] or more  - return "names[0], names[1] and names.length -2 others like this"


function likes(names) {
    if (names.length === 0) {
        return "no one likes this"
    } else if (names.length === 1) {
        return `${names[0]} likes this`
    } else if (names.length === 2) {
        return `${names[0]} and ${names[1]} like this`
    } else if (names.length === 3) {
        return `${names[0]}, ${names[1]} and ${names[2]} like this`
    } else if (names.length > 3) {
        return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`
    }
  }

  likes(["Alex", "Jacob", "Mark", "Max"])
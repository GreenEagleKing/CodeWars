// 8 kyu Thinkful - Logic Drills: Traffic light

//Complete the function that takes a string as an argument representing the current state of the light and returns a string representing the state the light should change to.

//P - string - green,yellow, red
//R - string, next state
//E
//P

// the current light status can only be 1 of 3 states, red, yellow, green
// if current state is green, next is yellow
// if current states is yellow, next is red
// if current state is red, next is green
// A switch statement would work well in this scenerio as there are only 3 possible options.

function updateLight(current) {
  switch(current) {
    case "green":
        return "yellow"
    break;
    case "yellow":
        return "red"
    break;
    case "red":
        return "green"
    default:
        return "Input not valid"
  }
}


updateLight("red") // green
updateLight("yellow") // red

// 6 kyu Detect Pangram

// A pangram is a sentence that contains every single letter of the alphabet at least once. Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.

//P - string, ignore numbers and punctuation, case irrevlevant
//R - true or false if string contains all letters in the alphabet
//E
//P

// use a set to remove duplicates and split the string into single characters
// make lowercase
// use replace function to remove anything not a-z
// if the length of the array is 26 we know all alpahabet letters are used.

function isPangram(string){
    const panGram = new Set(string.toLowerCase().replace(/[^a-z]/g, ""))
    console.log(panGram)
    return panGram.size === 26
}

isPangram("The quick brown fox jumps over the lazy dog") // true
isPangram("The cat flies over the moon") // false
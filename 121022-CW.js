// 6 kyu Mexican Wave

// In this simple Kata your task is to create a function that turns a string into a Mexican Wave. You will be passed a string and you must return that string in an array where an uppercase letter is a person standing up. 

// P - string, always lowercase, if whitespace ignore(dont push to array)
// R - starting from the 1st letter make each letter uppercase, each time push to array, so only one letter per word is uppercase
// E
// P

// split words into letters
// for loop
// 


function wave(str){
    let splitStr = str.split("")
    console.log(splitStr)
    for(let i = 0; i <= str.length; i++) {
      let waveArr = splitStr.map((element, index) => {
        return element + index
    })
    return waveArr
  }
}

  wave("hello") // ["Hello", "hEllo", "heLlo", "helLo", "hellO"]

  // Difficult, got lost

  // Best result

  function wave(str){
    let result = [];
    
    str.split("").forEach((char, index) => {
        if (/[a-z]/.test(char)) {
            result.push(str.slice(0, index) + char.toUpperCase() + str.slice(index + 1));
        }
    });
    
    return result;
}
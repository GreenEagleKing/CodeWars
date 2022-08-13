// 8 kyu Grasshopper - Debug sayHello

function sayHello(name) {
    return `Hello ${name}`
  }

// 8 kyu Enumerable Magic #25 - Take the First N Elements

// Create a function that accepts a list/array and a number n, and returns a list/array of the first n elements from the list/array.

// P - array, number - no mention of pos/neg/float so assume all.
// R - return the first n amount of array values
// E
// P

// Use array slice to return a portion of the array


function take(arr, n) {
    return arr.slice(0, n)
}

take([0,1,2,3,5,8], 3) //[0,1,2] 

// 7 kyu Regex validate PIN code

// ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.If the function is passed a valid PIN string, return true, else return false.

// P -  exactly 4/6 digits only in a string
// R - return true/ false
// E
// P

// Use array every function to test whether all the elements are numbers in the array

// FAILED - method


function validatePIN (pin) {
    const str = pin.replace(/\D/g, '')
    console.log(str)
    const arr = str.split("")
    console.log(arr)
    return arr.every((element, index, array) => {
        (parseInt(element) >= 0 && parseInt(element) < 10) && (array.length === 4 || array.length === 6)
    })
}

validatePIN("1234") // true
validatePIN("fg525") // false
validatePIN("123456") // true

//Correct method

function validatePIN (pin) {
  
    var pinlen = pin.length;
    var isCorrectLength = (pinlen == 4 || pinlen == 6);
    var hasOnlyNumbers = pin.match(/^\d+$/);
      
    if(isCorrectLength && hasOnlyNumbers){
      return true;
    }
    
    return false;
  
  }
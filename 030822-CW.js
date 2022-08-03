// 7 kyu The Coupon Code

// Write a function called checkCoupon which verifies that a coupon code is valid and not expired.

//P - strings - dates in this format = "MONTH DATE, YEAR"
//R - True or false
//E - 
//P 

//compare entered code vs correctcode
// if match, compare date
// if match, return true,else false


function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
    if (enteredCode === correctCode && Date.parse(currentDate) >= Date.parse(expirationDate)) {
        return true
    } else {
        return false
    }
}

checkCoupon("123", "123", "July 9, 2015", "July 9, 2015")  ===  true
checkCoupon("123", "123", "July 9, 2015", "July 2, 2015")  ===  false


// 7 kyu Vowel Count

// Return the number (count) of vowels in the given string.

//P - a, e, i, o, u as vowels - string, letters, lowercase only
//R - number, whole, positive
//E
//P

// split string into characters
// match string against vowels
//return number of matches

function getCount(str) {
    let count = str.match(/[aeiou]/gi)
    if (count === null) {
        return 0
    } else {
        return count.length
    }
  }

getCount("abracadabra")// 5 vowels
getCount("ghjkytr") // 0 vowels
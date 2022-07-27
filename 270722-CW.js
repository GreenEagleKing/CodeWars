// 7 kyu Summing a number's digits

//Write a function named sumDigits which takes a number as input and returns the sum of the absolute value of each of the number's decimal digits.

//For example: 10 --> 1

//P: number, whole
//R: sum individual value of num, return
//E: 
//P:


function sumDigits(number) {
    //split number into digits
    //add digits together
    //return result
}

sumDigits(35) // 3 + 5 =  8
sumDigits(60) // 6 + 0 = 6

function sumDigits(number) {
    return Math.abs(number).toString().split("").reduce(function(acc, c) {return +acc + +c},0)
}

sumDigits(10)

sumDigits(35) // 3 + 5 =  8
sumDigits(60) // 6 + 0 = 6



// 7 kyu Friend or Foe?

//Make a program that filters a list of strings and returns a list with only your friends name in it. If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...

// e.g friend ["Ryan", "Kieran", "Mark"] `shouldBe` ["Ryan", "Mark"]

// P: string, 4 letters
// R: 4 letter names only
// E:
// P:



function friend(friends){
   return friends.filter(element => element.length === 4) 
}

friend(["Ryan", "Kieran", "Mark"])

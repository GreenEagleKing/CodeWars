// 8 kyu Parse nice int from char problem

// Write a program that returns the girl's age (0-9) as an integer.

// P - string, number at the start, text the rest, 0-9
// R - single integer of their age
// E
// P

// substring index of position 0

function getAge(inputString){
    return Number(inputString.substring(0,1))
    }

getAge("4 years old") // 4


// 

function getAge(inputString) {
    return parseInt(inputString)
}
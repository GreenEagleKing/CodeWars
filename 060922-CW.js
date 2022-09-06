// 8 kyu Grasshopper - Messi goals function

// Complete the function to return his total number of goals in all three leagues.

function goals (laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
    return laLigaGoals + copaDelReyGoals + championsLeagueGoals
  }

// 6 kyu Find the odd int

// Given an array of integers, find the one that appears an odd number of times.

// P - array, integers,
// R - value that appears odd times in array
// E
// P

// add up a total of number of occurrences of each number
// if an odd number return the number



function findOdd(A) {
    return A.reduce((acc,c) => acc ^ c)
  }

findOdd([1,1,2,3,3,3,3]) // 2

// very tough, result used XOR would only work with 1 odd to be found
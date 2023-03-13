// You're given strings jewels representing the types of stones that are jewels, and stones representing the stones you have. Each character in stones is a type of stone you have. You want to know how many of the stones you have are also jewels.

// Letters are case sensitive, so "a" is considered a different type of stone from "A".

// Example 1:

// Input: jewels = "aA", stones = "aAAbbbb"
// Output: 3

// Example 2:

// Input: jewels = "z", stones = "ZZ"
// Output: 0
 

// Constraints:

// 1 <= jewels.length, stones.length <= 50
// jewels and stones consist of only English letters.
// All the characters of jewels are unique.



// two inputs both strings, english chars only, case sens, jewel chars unique, jewel length less than or equal to 1, stones less than equal to 50
// return a integer, count number of jewels

// filter out non jewels from stones
//count up up matches to jewels


function countJewels(jewels, stones) {
    let count = 0

    for (const stone of stones) {
        if (jewels.includes(stone)) {
            count++
    }

    }
    return count
}



console.log(countJewels('aA', 'aAAbbbb')) 
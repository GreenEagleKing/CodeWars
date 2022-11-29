// 6 kyu Two Sum

// Write a function that takes an array of numbers (integers for the tests) and a target number. It should find two different items in the array that, when added together, give the target value. Return the index of those values in an array

// integers, any valid solution, always 2 integers, always at least 2 nums will add up to target

// return a array of the two indexs

// create a loop i
// loop through numbers
// create another loop j inside
// loop through numbers
// add together loop i + loop j
// if it equals target return indexOf

function twoSum(numbers, target) {
    for(let i = 0; i <= numbers.length; i++) {
        for(let j = 0 + 1; j < numbers.length; j++) {
            if(numbers[i] + numbers[j] === target) {
                return [i, j]
            }
        }
    }
  }

  console.log(twoSum([2,2,3], 4)) // [0,1] / [1,0]
console.log(twoSum([1,2,3], 4)) // [0,2] / [2,0]
console.log(twoSum([10,6,12,5], 15)) // [0, 3] / [3, 0]
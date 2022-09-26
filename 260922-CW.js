// 7 kyu Remove the minimum


//Given an array of integers, remove the smallest value. Do not mutate the original array/list. If there are multiple elements with the same value, remove the one with a lower index. If you get an empty array/list, return an empty array/list.

// Don't change the order of the elements that are left.


//P: array of integers, if empty return empty array, 
//R: return lowest value number +/ lowest index number if multiple, DO NO CHANGE ORDER OF ARRAY
//E: 
//P:

// create new array and copy array element
// sort array from lowest to highest
// select the lowest number
// search the orginal array for match
// remove matching number from array and return 


function removeSmallest(numbers) {
    let found = numbers.indexOf(Math.min(...numbers))
    numbers.splice(found, 1)
    return numbers
  }


removeSmallest([5,3,2,1,4]) // [5,3,2,4]
removeSmallest([1,2,3,4,5]) // [2,3,4,5]

// Correct but mutated array.
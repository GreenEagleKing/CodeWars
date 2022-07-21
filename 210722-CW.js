// 8 kyu N-th Power

//You are given an array with positive numbers and a non-negative number N. You should find the N-th power of the element in the array with the index N. If N is outside of the array, then return -1. Don't forget that the first element has the index 0.

function index(array, n){
    for (let i = 0; i <= array.length; i++) {
        if (n > array.length -1) {
            return -1
        } else if (i === n){
            return Math.pow(array[i], n)
        }
    }
  }

  index([5,3,10],3)

// 7 kyu Sort Numbers

// Finish the solution so that it sorts the passed in array of numbers. If the function passes in an empty array or null/nil value then it should return an empty array.

const solution = function(nums) {
    if (nums === [] || nums === null) {
        return []
    } else {
    return nums.sort((a, b) => a - b)
    }
}

solution([1, 2, 10, 50, 5])

// 7 kyu String ends with?

// Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

function solution(str, ending){
    return str.endsWith(ending)
  }
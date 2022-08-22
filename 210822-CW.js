// 8 kyu Correct the mistakes of the character recognition software

// Your task is correct the errors in the digitised text. 

// P - string, s = 5, o = 0, i = 1
// R - string with no numbers/replaced characters
// E
// P

// replace

function correct(string)
{
	return string.replace(/0/gi, "O").replace(/1/gi, "I").replace(/5/gi, "S")
}

correct("L0ND0N") // London
correct("PAR1S") // Paris

// 7 kyu Sum of Minimums!

// Given a 2D ( nested ) list ( array, vector, .. ) of size m * n, your task is to find the sum of the minimum values in each row.

// P - array of numbers, whole, non empty, positive
// R - total sum of minimum numbers in array
// E
// P

// use math of min to find smallest value

function sumOfMinimums(arr) {
   let minArr = 0 
   const eachArr = arr.forEach(e => {
    return minArr += Math.min(...e)
   })
   return minArr
  }

sumOfMinimums([[7, 9, 8, 6, 2], [6, 3, 5, 4, 3], [5, 8, 7, 4, 5]])  // 9
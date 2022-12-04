// 7 kyu Sum of the first nth term of Series

// Your task is to write a function which returns the sum of following series upto nth term(parameter).

// numbers, whole and fractions, 
// return sum to 2 decimal places string

// round sum to 2 decimal places

function SeriesSum(n)
{
return n.toFixed(2)

}

console.log(SeriesSum(1)) // "1.00"
console.log(SeriesSum(2)) // "1.25"
console.log(SeriesSum(1 + 1/4 + 1/7 + 1/10 + 1/13)) // "1.57"

// answer

function SeriesSum(n) {
    for (var s = 0, i = 0; i < n; i++) {
      s += 1 / (1 + i * 3)
    }
    
    return s.toFixed(2)
  }
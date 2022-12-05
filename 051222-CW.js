// 6 kyu Multiples of 3 or 5

// return the sum of all the multiples of 3 or 5 below the number passed in.

// integer, can be neg, 
// sum of multiples of 3 or 5

// loop from 0 > number
// if i % 3 === 0 || i % 5 === 0
// add to count
// return count

function solution(number){
  let count = 0
  for(let i = 0; i < number; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
        count += i
    }
  } return count
}

console.log(solution(10)) // 3 + 5 + 6 + 9 = 23
console.log(solution(15)) // 3 + 5 + 6 + 9 + 10 + 12 + 15 = 60
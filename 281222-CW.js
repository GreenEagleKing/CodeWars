// 7 kyu Find the next perfect square!

// Complete the findNextSquare method that finds the next integral perfect square after the one passed as a parameter. Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer.

// number, integer, non-neg
// next perfect square as integer or -1

// check that the input is a perfect square first
// let sqrt = math.sqrt(sq)
// if(sqrt % 1 = 0)
// return (sq + 1) * (sq + 1)
// else -1


function findNextSquare(sq) {
  let sqrt = Math.sqrt(sq)
  if (sqrt % 1 === 0) {
    return (sqrt + 1) * (sqrt + 1)
  } else {
    return -1
  }
}

console.log(findNextSquare(121)) // 144
console.log(findNextSquare(114)) // -1
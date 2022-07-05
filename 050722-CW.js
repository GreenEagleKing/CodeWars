// 8 kyu - Beginner Series #1 School Paperwork

function paperwork(n, m) {
  if (n > 0 && m > 0) {
      return n*m
  } else if (n < 0 || m < 0){
      return 0
  }
}

paperwork(5, 5)

const paperwork = (n,m) => n > 0 && m > 0 ? n*m : 0

// 7 kyu Sort array by string length

function sortByLength (array) {
   return array.sort((a, b) => a.length - b.length)
  };

// 8 kyu Sum Arrays

function sum (numbers) {
    if (numbers.length == 0) {
        return 0
    } else {
    return numbers.reduce((acc, c) => acc + c)
    }
};
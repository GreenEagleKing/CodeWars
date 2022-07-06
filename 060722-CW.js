// 8 kyu Sum of positive

function positiveSum(arr) {
    if (arr == 0) {
        return 0
    } else {
        const posArr = arr.filter(num => num > 0)
        return posArr.reduce((acc, c) => acc + c)
    }
}

console.log(positiveSum([1,-4,7,12]))

// 8 kyu Is it a palindrome?

function isPalindrome(x) {
    const palCheck = x.split("").reverse().join("").toLowerCase()
    if (x.toLowerCase() === palCheck) {
        return true
    } else {
        return false
    }
  }

console.log(isPalindrome('racecar'))

// 7 kyu List Filtering

function filter_list(l) {
    return l.filter(num => typeof num == 'number')
}

console.log(filter_list([1,2,'a','b']))

//7 kyu Beginner Series #3 Sum of Numbers // Array not required

function getSum( a,b ) {
    if (a === b || b === a){
      return a
    } else if (a > b) {
      let betweenAAndB = []
      for (let i = a; i <= b; i++) {
          betweenAAndB.push(i)
      }
      return betweenAAndB.reduce((acc, c) => acc + c,0)

    } else if (b > a) {
        let betweenAAndB = []
        for (let i = b; i <= a; i++) {
            betweenAAndB.push(i)
        }
        return betweenAAndB.reduce((acc, c) => acc + c,0)
    }
}
  
  console.log(getSum(5,2))
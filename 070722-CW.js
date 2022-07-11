// 7 kyu Find the stray number

// function stray(numbers) {
//     return numbers.find(element => element !== element[0])
//   }

console.log(stray([17, 17, 3, 17, 17, 17, 17]))

function stray(numbers) {
    let sameArr = []
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] !== numbers[i-1]) {
            console.log(numbers[i])
        }
    };
  }

  console.log(stray([17, 17, 3, 17, 17, 17, 17]))

  // Unlocked solution

  const stray = nums => nums.reduce((a, b) => a ^ b);
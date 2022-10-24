// 2/5 Array Challenge

// 7 kyu Sum of odd numbers

// Calculate the sum of the numbers in the nth row of this triangle (starting at index 1)

// numbers, whole, positive, index number represents number of values on row, e.g.row 2 is index 2 with 2 consec values

// index of n and n values from that point, index x index + 1 = row value, then from that value + 2 index times over
// e.g. 5 X 5 = 20, 20 + 1 = 21, 21 + 2 (5x over)

function rowSumOddNumbers(n) {
	let row = n * n + 1
    let count = 0
    while(count <= n) {
        row += co
        count++
        return row
    }
}

console.log(rowSumOddNumbers(3)) // 7 + 9 + 11 = 27

function rowSumOddNumbers(n) {
    return Math.pow(n, 3)
}
console.log(rowSumOddNumbers(3))
// Best Time to Buy and Sell Stock II

//You are given an integer array prices where prices[i] is the price of a given stock on the ith day.

// On each day, you may decide to buy and/or sell the stock. You can only hold at most one share of the stock at any time. However, you can buy it then immediately sell it on the same day.

// Find and return the maximum profit you can achieve.

// array of numbers, whole only, numbers only
// return single number whole, total profit

// loop through prices
// for each one
// compare current number against next value
// check if greater than current
// if true check if value is more than half of current value
// if true add current value to profit array minus next value
// when completed add up total of profit array

function maxProfit(prices) {
  let profit = 0

  for (let i = 0; i <= prices.length; i++) {
    let j = i + 1
    if (prices[j] > prices[i]) {
      profit += prices[j] - prices[i]
    }
  }
  return profit
}

console.log(maxProfit([7, 1, 5, 3, 6, 4]), 7)
console.log(maxProfit([1, 2, 3, 4, 5]), 4)
console.log(maxProfit([7, 6, 4, 2, 1]), 0)

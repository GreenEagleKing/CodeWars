// 6 kyu Find The Parity Outlier

// You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.

// array, integers, min length 3, either odd or even accept for one, can be neg
// return single exception N

// map,
// if el % 2 === 0 add indexvalue to countEven
// if el % 2 !== 0 add 1 to countOdd
// return higher count

function findOutlier(integers){
    let findOdd = []
    let findEven = integers.map((element, index) => {
        if (element % 2 === 0) {
            return element
        } else {
            return findOdd.push(element)
        }
    })
    return findEven.length > findOdd.length ? findOdd[0] : findEven[0]
}

console.log(findOutlier([2, 4, 0, 100, 4, 11, 2602, 36])) // 11
console.log(findOutlier([160, 3, 1719, 19, 11, 13, -21])) // 160

// Should of used filter, ran into errors with neg numbers

function findOutlier(integers){
    let findOdd = integers.filter(element => element % 2 !== 0)
    let findEven = integers.filter(element => element % 2 === 0)
    return findOdd.length > findEven.length ? findEven[0] : findOdd[0]
}

console.log(findOutlier([160, 3, 1719, 19, 11, 13, -21])) // 160
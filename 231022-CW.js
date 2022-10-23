// 7 kyu Don't give me five

// In this kata you get the start number and the end number of a region and should return the count of all numbers except numbers with a 5 in it. The start and the end number are both inclusive!

// number, pos/neg, start num always smaller than end num, may contain 5
// count numbers from start to end, if 5 included remove from count


function dontGiveMeFive(start, end) {
    let res = [];
    for (let i = start; i <= end; i++) {
      if (!i.toString().includes('5')) res.push(i);
    }
    return res.length;
}

console.log(dontGiveMeFive(3,16)) // 3,4,6,7,8,9,10 = 7
console.log(dontGiveMeFive(1,9))  // 1,2,3,4,6,7,8,9 = 8
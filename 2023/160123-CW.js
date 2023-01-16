// 7 kyu Growth of a Population

// p0(start population), percent(percent growth per year), aug (inhabitants coming or leaving each year), p (population to equal or surpass)
// numbers only, pos only, no funny buisness

// integer positive

// p0 + p0 * percent/100 + aug 

function nbYear(p0, percent, aug, p) {
    let count = 0
    while(p0 < p) {
        p0 = p0 + p0 * percent/100 + aug
        count = count + 1
    }
    return count
}

console.log(nbYear(1500, 5, 100, 5000)) // 15
console.log(nbYear(1500000, 2.5, 10000, 2000000)) // 10

// How to do it
function nbYear(p0, percent, aug, p) {
    var count = 0;
    while (p0 < p) {
      p0 = Math.floor((1 + percent / 100) * p0 + aug);
      count++
    } 
    return count;
  }

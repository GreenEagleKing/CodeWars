// 8 kyu How old will I be in 2099?

// P - numbers, whole integer positive
// R - string, current age, future age or today
// E
// P

function  calculateAge(birth, yearToCount) {
    let count = Math.abs(birth - yearToCount)
    let year = "years"
    if (count === 1) {
        year = "year"
    }
    if (birth < yearToCount) {
        return `You are ${count} ${year} old.`
    } else if (birth > yearToCount) {
        return `You will be born in ${count} ${year}.`
    } else if (birth === yearToCount) {
        return `You were born this very year!`
    }
}

calculateAge(2000, 2020)
// 7 kyu Categorize New Member

// split senior and open members based on age and handicap
// array of pairs of integers, age,handicap, senior >= 55 and handicap > 7, handicap from -2 > 26, pos and neg.
// array of strings, open or senior, for each pair

// map a new array
// if age


function openOrSenior(data){
    return data.map((element, index) => {
        if (element[0] >= 55 && element[1] > 7) {
            return "Senior"
        } else {
            return "Open"
        }
    })
  }

  openOrSenior([[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]]) // ["Open", "Open", "Senior", "Open", "Open", "Senior"]
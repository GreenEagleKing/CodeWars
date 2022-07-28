// 8 kyu Drink about

// Make a function that receive age, and return what they drink.

//P - number whole positive
//R - Return - Children under 14 old.Teens under 18 old.Young under 21 old.Adults have 21 or more.
//E - 13 --> "drink toddy" 17 --> "drink coke"
//P

function peopleWithAgeDrink(old) {
    if (old < 14) {
        return "drink toddy"
    } else if (old >= 14 && old < 18) {
        return "drink coke"
    } else if (old >= 18 && old < 21) {
        return "drink beer"
    } else {
        return "drink whisky"
    }
  };

peopleWithAgeDrink(13) // drink toddy
peopleWithAgeDrink(17) // drink coke


// 7 kyu Two to One

//Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

//P - 2 strings, only letters a to z
//R - string
//E - a = "xyaabbbccccdefww" b = "xxxxyyyyabklmopq" longest(a, b) -> "abcdefklmopqwxy"
//P


// Close but no cigar

function longest(s1, s2) {
    let str = s1 + s2
    let arr = str.split("").sort().join()
    let setArr = new Set(arr)
    setArr.delete(",")
    return setArr
  }

longest("xyaabbbccccdefww", "xxxxyyyyabklmopq")

const longest = (s1, s2) => [...new Set(s1+s2)].sort().join('')

longest("xyaabbbccccdefww", "xxxxyyyyabklmopq")
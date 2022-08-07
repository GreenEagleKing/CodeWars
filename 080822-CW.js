// 8 kyu Is he gonna survive?

// A hero is on his way to the castle to complete his mission. However, he's been told that the castle is surrounded with a couple of powerful dragons! each dragon takes 2 bullets to be defeated, our hero has no idea how many bullets he should carry.. Assuming he's gonna grab a specific given number of bullets and move forward to fight another specific given number of dragons, will he survive?

//P - numbers, whole, positive, each dragon takes 2 bullets
//R - true or false 
//E
//P


// Take the arguements and divide bullets by dragons
// if the result is greater than 2 then they will survive else they will not

function hero(bullets, dragons){
    return bullets / dragons >= 2 ? true : false
}


hero(10,5) // true
hero(7, 4) // false



// 7 kyu Fix string case

//  You will be given a string that may have mixed uppercase and lowercase letters and your task is to convert that string to either lowercase only or uppercase only

//P - string, make as few changes as possible, if number of uppercase and lowercase is the same make all lowercase
//R - string in lowercase / uppercase
//E
//P

// split string into letters
//create uppercase array and lowercase array
// for each letter - if uppercase true add to uppercase array, if not add to lowercase array
// compare uppercase to lowercase array lengths, if one is longer than the other convert string to that array type or if equal make lowercase

function solve(s){
    const upperArr = [], lowerArr = []
    let str = s.split("")
    for(let i = 0; i < str.length; i++) {
        if (str[i].toUpperCase() === str[i]) {
            upperArr.push(str[i])
        } else {
            lowerArr.push(str[i])
        }
    }
    return upperArr.length > lowerArr.length ? str.join("").toUpperCase() : str.join("").toLowerCase()
}

solve("coDe") // "code"
solve("CODe") // "CODE"
solve("COde") // "code"
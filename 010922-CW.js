// 6 kyu Meeting

// Could you make a program that ,makes this string uppercase, gives it sorted in alphabetical order by last name.

// P - first & second names, strings
// R - uppercase, sort alphabetically with last name except if same by first name, must be in this format (CORWILL, ALFRED)
// E
// P

// split string into seperate first and last names and make uppercase
// create object from array, 0 becomes firstname, 1 becomes second name and so on
// sort by last name, if names match sort by first name
// add ( and , and return

function meeting(s) {
    const nameArr = s.toUpperCase().split(';')
                    .map(element => element.split(':').reverse().join(','))
                    .sort()
                    .join(')(')
        return  '(' + nameArr + ')'
}


meeting("Alexis:Wahl;John:Bell;Victoria:Schwarz;Abba:Dorny;Grace:Meta;Ann:Arno;Madison:STAN;Alex:Cornwell;Lewis:Kern;Megan:Stan;Alex:Korn") // "(ARNO, ANN)(BELL, JOHN)(CORNWELL, ALEX)(DORNY, ABBA)(KERN, LEWIS)(KORN, ALEX)(META, GRACE)(SCHWARZ, VICTORIA)(STAN, MADISON)(STAN, MEGAN)(WAHL, ALEXIS)"

// Got really close with this one, just missed the reverse and correct join
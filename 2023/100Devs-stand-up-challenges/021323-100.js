//Given a string, return a new string that has transformed based on the input:

//Change case of every character, ie. lower case to upper case, upper case to lower case.
//Reverse the order of words from the input.
//Note: You will have to handle multiple spaces, and leading/trailing spaces.

//For example:

//"Example Input" ==> "iNPUT eXAMPLE"
//You may assume the input only contain English alphabet and spaces.

// string, upper and lower, only alphabet and spaces
// return string, reverse word order, maintain spaces, reverse upper to lower and visa versa

// split string into words
// map each string word and split again
// ternay upper or lower
// join string back together
// reverse item order possibly using sort
// return string


function reverseString(str) {
    const word = str.split(" ").reverse()
    return word.map(w => {
        return w.split("").map(l => {
            return l === l.toUpperCase() ? l.toLowerCase() : l.toUpperCase() 
        }).join("")
    }).join(" ")
}

console.log(reverseString('Example Input')) // iNPUT eXAMPLE
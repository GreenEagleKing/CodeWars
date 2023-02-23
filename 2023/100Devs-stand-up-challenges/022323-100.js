// You will be given an array of strings and your task is to remove all consecutive duplicate letters from each string in the array.

// For example:

// dup(["abracadabra","allottee","assessee"]) = ["abracadabra","alote","asese"].
// dup(["kelless","keenness"]) = ["keles","kenes"].
// Strings will be lowercase only, no spaces 

// dup(["ccooddddddewwwaaaaarrrrsssss","piccaninny","hubbubbubboo"]),['codewars','picaniny','hubububo'])
// dup(["abracadabra","allottee","assessee"]),['abracadabra','alote','asese'])
// dup(["kelless","keenness"]), ['keles','kenes'])

// array of lowercase strings only, will be at least 1 string, letters only, no spaces
// return the array with the string consecutive dup letters removed for each string

// map over the array
// for each word 
// if the next letter is the same as the last then dont include it

function dup(arr) {
return arr.map(word => {
    return word
        .split("")
        .filter((l, i) => {
            return l !== word[i + 1]
        })
        .join("")
})
}


console.log(dup(["ccooddddddewwwaaaaarrrrsssss","piccaninny","hubbubbubboo"]),['codewars','picaniny','hubububo'])
console.log(dup(["abracadabra","allottee","assessee"]),['abracadabra','alote','asese'])
console.log(dup(["kelless","keenness"]), ['keles','kenes'])
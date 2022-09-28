// 1 / 5 String CW challenges

// 7 kyu Complementary DNA

// In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". Your function receives one side of the DNA (string, except for Haskell); you need to return the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).

// P - string, uppercase letters, never empty string
// R - string, replace A with T / T with A and replace C with G or G with C
// E
// P

// split string into single array letters
// for loop for whole array
// if element = A then replace with T etc..
// return string



function DNAStrand(dna){
    let splitStr = dna.split("")
    for (let i = 0; i < splitStr.length; i++) {
        if (splitStr[i] === "A") {
             splitStr[i] = "T"
        } else if (splitStr[i] === "T") {
            splitStr[i] = "A"
        } else if (splitStr[i] === "C") {
            splitStr[i] = "G"
        } else if (splitStr[i] === "G") {
            splitStr[i] = "C"
        }
    } return splitStr.join("")
}

DNAStrand("ATTGC") // "TAACG"
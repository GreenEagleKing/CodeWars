//  6 kyu Split Strings

// Complete the solution so that it splits the string into pairs of two characters.

// strings, can be empty
// array of strings of pairs, if not pair add '_' to last array pair

// use match(/[..]/g) splits them into pairs


function solution(str){
    if(str.length % 2 !== 0) {
        str = str + '_'
    } else if (str === "") {
        return []
    }
    return str.match(/../g)
}

console.log(solution('abc')) // ['ab', 'c_']
console.log(solution('abcd')) // ['ab', 'cd']
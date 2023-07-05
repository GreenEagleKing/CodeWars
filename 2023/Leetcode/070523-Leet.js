//   First Unique Character in a String

// Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.

// single string, lowercase only
// returning integer which is index of first non repeating character or -1

//loop through string
// if current string character index is equal to last index character - return index of string
// if not same then move on
//if at end of string no matches return -1

const firstUniqueCharacter = (s) => {
  for (let i = 0; i < s.length; i++) {
    if (s.indexOf(s[i]) === s.lastIndexOf(s[i])) {
      return i
    }
  }
  return -1
}
console.log(firstUniqueCharacter("loveleetcode"), 2)

console.log(firstUniqueCharacter("leetcode"), 0)
console.log(firstUniqueCharacter("aabb"), -1)

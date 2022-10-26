// 5/5 array challenge

// Given two arrays of strings a1 and a2 return a sorted array r in lexicographical order of the strings of a1 which are substrings of strings of a2.

// 2 arrays, strings, will a2 always be longer array than a1?, will array ever be empty?, 
// array of strings that are a substring of a2 and in order of a1

// compare 1 individual element in arr1 against all of arr2
// use  filter()

function inArray(array1,array2){
    let filteredArr = array2.filter((element, i) => {
        array1.includes(element)
        //incomplete
    })
    console.log(filteredArr)
  }

console.log(inArray(["arp", "live", "strong", "sharp"], ["lively", "alive", "harp", "sharp", "armstrong"])) // ["arp", "live", "strong"]

// best answer
function inArray(array1,array2){
  return array1
    .filter(a1 => array2.find(a2 => a2.match(a1)))
    .sort()
}
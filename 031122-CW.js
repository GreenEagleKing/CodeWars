// 7 kyu Flatten and sort an array

// arrays, integers,
// sort joined arrays from low to high

// join seperate arrays into one
// sort the array from low to high
// return sorted array


function flattenAndSort(array) {
    return array.flat(1).sort(function(a,b) { return a - b})
  }

  console.log(flattenAndSort([[], [1]])) // [1]
  console.log(flattenAndSort([[3, 2, 1], [7, 9, 8], [6, 4, 5]])) // [1,2,3,4,5,6,7,8,9]
  console.log(flattenAndSort([[111,999],[222],[333],[444],[888],[777],[666],[555]]))
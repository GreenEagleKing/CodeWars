// Intersection of Two Arrays II

// Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must appear as many times as it shows in both arrays and you may return the result in any order.

// two arrays of numbers, not in order
// return an array of the numbers that are in both arrays

// find the shorter of the two arrays
// map over the shorter array
// if the number is included in num2 array push to map
// then splice and remove that value from array 2
// return new map array

function intersectionArray(nums1, nums2) {
  let short = nums1.length > nums2.length ? nums1 : nums2
  let long = nums1.length > nums2.length ? nums2 : nums1

  let result = []
  short.map((item) => {
    if (long.includes(item)) {
      result.push(item)
      long.splice(long.indexOf(item), 1)
    }
  })
  return result
}

console.log(intersectionArray([1, 2, 2, 1], [2, 2]), [2, 2])
console.log(intersectionArray([4, 9, 5], [9, 4, 9, 8, 4]), [4, 9])

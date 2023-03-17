// Given an array of numbers, return all pairs that add up to a given sum. The numbers can be used more than once.

// describe("Two Sum", () => {
//  it("Should implement two sum", () => {
//   assert.deepEqual(twoSum([1, 2, 2, 3, 4], 4), [[2, 2], [3, 1]]);
//  });
// });

// array of integers and a target sum only, pos only, no funny buis, sorted already low to high
// the pairs which add up to the target, numbers from array can be used more than once, but no duplicate pairs, array

// create an empty array that stores the seen values
// create an empty  pairs array that add up to target
// loop over each number in the array
// create a num2 variable which takes the target and minus the current loop number
// if the index of part2 exists in the array then the two numbers must add up to the target sum
// the two numbers are then added to the pairs array


const twoSum = (nums, target) => {
    const stored = []
    const pairs = []

    for(let num1 of nums) {
        const num2 = target - num1
        if(stored.indexOf(num2) !== -1) {
            pairs.push([num1, num2])
            stored.push(num1)
        }
    } return pairs
}

console.log(twoSum([1,2,2,3,4], 4), [[2,2],[3,1]])
console.log(twoSum([1,2,2,2,4,], 6), [[2,4]])
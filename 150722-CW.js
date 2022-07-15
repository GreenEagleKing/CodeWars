// 7 kyu Sum of a sequence

const sequenceSum = (begin, end, step) => {
    let sum = 0
    if (begin > end) {
        return 0
    } else {
        for (let i = begin; i <= end; i += step) {
            console.log(sum = sum + i)
        }
        return sum
    }
  };

sequenceSum(2, 6, 2)

// NOT COMPLETE - Had it all correct but stuck in continuous loop, issue was the iterator = i += step not ++step

// 7 kyu Anagram Detection

//make lowercase and split test and original into single letters
// compare 


var isAnagram = function(test, original) {
    let testSplit = test.toLowerCase().split("")
    let originalSplit = original.toLowerCase().split("")
    return originalSplit.every(elem => testSplit.includes(elem))
};

isAnagram("dumble", "bumble")

// Not complete

function isAnagram (test, original) {
    return test.toLowerCase().split("").sort().join("") === original.toLowerCase().split("").sort().join("");
  }

  isAnagram("dumble", "bumble")

// 7 kyu Find the capitals

var capitals = function (word) {
    let arr = word.split("")
	let newArr = arr.reduce(function(acc, curr, index) {
        if (curr == curr.toUpperCase()) {
            acc.push(index)
        }
        return acc
    }, [])
    return newArr
};

capitals("CODefF")
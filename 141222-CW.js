// 6 kyu Bit Counting

// Write a function that takes an integer as input, and returns the number of bits that are equal to one in the binary representation of that number. You can guarantee that input is non-negative.

// integer, pos/neg, no funny business
// number of 1's in the binary value

// integer to string(binary)
// count 1s

var countBits = function(n) {
    let binary = n.toString(2)
    return binary.split("").filter((el, ind) => {
        return el === '1'
    }).length
  };

console.log(countBits(1234)) // 10011010010 => 5
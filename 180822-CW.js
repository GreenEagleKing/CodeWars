// 8 kyu Reversing Words in a String

// ou need to write a function that reverses the words in a given string.

// P - string, can be empty, ignore unneccesary whitespace
// R - revered string
// E
// P

// split the string into words
//reverse split string
// join string


function reverse(string){
    return string.split(" ").reverse().join(" ")
  }

reverse("Hello World") // "World Hello"

// 6 kyu Count the smiley faces!

// Given an array (arr) as an argument complete the function countSmileys that should return the total number of smiling faces.

//P - array, valid faces = :) :D ;-D :~), invalid faces = ;( :> :} :], does not have to have a nose = ~-, no other characters allowed, order is always eyes,nose,mouth
//R - number whole, 0 if empty array
//E
//P

// filter array with the valid faces
//return the array length


function countSmileys(arr) {
    return arr.filter(x => /^[:;][-~]?[)D]$/.test(x)).length
}


countSmileys([':)', ';(', ';}', ':-D']);       // should return 2;
countSmileys([';D', ':-(', ':-)', ';~)']);     // should return 3;
// 7 kyu Sorted? yes? no? how?

//Complete the method which accepts an array of integers, and returns one of the following:

//"yes, ascending" - if the numbers in the array are sorted in an ascending order
//"yes, descending" - if the numbers in the array are sorted in a descending order
//"no" - otherwise

// P - array, integers, 
// R - above string
// E
// P 

// for each element compare if the number is going up or down, or neither


function isSortedAndHow(array) {
    let result = ""
    array.every((element, index) => {
        if (index == 0 || array[index] >= array[index -1]) {
           return result = "yes, ascending"
        } else if (index == 0 || array[index] <= array[index -1]) {
           return result = "no, descending"
        } else {
            return result = "no"
        }
    })
    return result
}

isSortedAndHow([5,4,3,2,10]) // yes...


// Correct result

function isSortedAndHow(arr) {
    return arr.every((x,i)=>i==0||arr[i]>=arr[i-1])?'yes, ascending':
           arr.every((x,i)=>i==0||arr[i]<=arr[i-1])?'yes, descending':'no'
  }

  // very close, but got hung up on element rather than the index
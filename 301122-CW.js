// 6 kyu Are they the "same"?

// Given two arrays a and b write a function that checks whether the two arrays have the "same" elements, with the same multiplicities (the multiplicity of a member is the number of times it appears). "Same" means, here, that the elements in b are the elements in a squared, regardless of the order.

// array / object / null / integers
// return true if arr1 values squared equal a value in arr2 (take into account dups)

// sort the arrays
// foreach element in array1 

function comp(array1, array2){
    let result;
    array1.sort((a,b) => a - b)
    array2.sort((a,b) => a - b)
    array1.forEach((el, ind, a) => {
        if (el * el !== array2[ind] || array1 === null || array2 === null) {
            console.log(el*el, array2[ind])
            return result = false
        } else if (array1 === [] && array2 === []) {
            return result = true
        } else {
            return result = true
        }
    })
    return result
  }


console.log(comp([121, 144, 19, 161, 19, 144, 19, 11], [121, 14641, 20736, 361, 25921, 361, 20736, 361])) // true


// better version

function comp(array1, array2) {
    if(array1 == null || array2 == null) return false;
        array1.sort((a, b) => a - b);
        array2.sort((a, b) => a - b);
        return array1.map(v => v * v).every((v, i) => v == array2[i]);
  }

  console.log(comp([121, 144, 19, 161, 19, 144, 19, 11], [121, 14641, 20736, 361, 25921, 361, 20736, 361])) // true
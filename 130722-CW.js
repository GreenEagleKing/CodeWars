// 8 kyu Remove First and Last Character

function removeChar(str){
    return str.substring(1,str.length-1)
};
   
removeChar("Hello")  

// 8 kyu Merge two sorted arrays into one

function mergeArrays(arr1, arr2) {
  let sumArr = arr1.concat(arr2)
  sumArr.sort(function(a, b) {
    return a - b
  })
  return [...new Set(sumArr)]
}

mergeArrays([1,3,5,7,9,11,12], [1,2,3,4,5,10,12])

// 7 kyu Array Array Array

function explode(x){
    if (typeof x[0] == 'number' && typeof x[1] == 'number') {
        x.reduce((a, b) => a + b)
            return x
    } else if (x[0] === typeof Number || x[1] === typeof Number) {
        return x
    } else {
        return "Void!"
    }
    
}

explode([9, 5])

// NOT SOLVED

function explode(x){
    let [a,b] = x;
    
    if(typeof a == "number" && typeof b == "number") return new Array(a+b).fill(x);
    else if(typeof a == "number") return new Array(a).fill(x);
    else if(typeof b == "number") return new Array(b).fill(x);
    
    return 'Void!';
  }

  explode([9, 5])

//7 kyu Shortest Word

function findShort(s){
    const splitS =  s.split(" ")
    return Math.min(...splitS.map(({length}) => length))
}
findShort("bitcoin take over the world maybe who knows perha")
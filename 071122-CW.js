// 6 kyu Take a Ten Minutes Walk

// 10 is max distance, array, one letter strings, n,e,s,w, 1 minute per block, 
// true if exactly 10minutes and return from starting point, else false 

// if array has 10 elements in array
// extract elements 5-10
// sort 5-10
// convert 5-10 to opposite values
// sort 1-5
// compare both arrays, if same true true, else false

function isValidWalk(walk) {
    let directions = ['n','e','s','w']
    const [a,b,c,d] = directions
    if(walk.length === 10) {
        let walkTo = walk.slice(0,5)
        let walkBack = walk.slice(5, 10)
        console.log(walkTo, walkBack)
        let convertBack = walkBack.map()
    }
  }


  console.log(isValidWalk(['n','n','w','n','w','s','s','e','s','e'])) // true

console.log(isValidWalk(['n','s','n','s','n','s','n','s','n','s'])) // true

console.log(isValidWalk(['n','s','n','s'])) // false

// Got lost, over complicated too, good psuedo but hard to code


function isValidWalk(walk) {
    let north = walk.filter(element => element === 'n').length
    let south = walk.filter(element => element === 's').length
    let east = walk.filter(element => element === 'e').length
    let west = walk.filter(element => element === 'w').length

    return walk.length === 10 && north.length === south.length && east.length === west.length
    
}

console.log(isValidWalk(['n','n','w','n','w','s','s','e','s','e'])) // true

console.log(isValidWalk(['n','s','n','s','n','s','n','s','n','s'])) // true

console.log(isValidWalk(['n','s','n','s'])) // false
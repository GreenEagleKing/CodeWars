// 5 kyu Moving Zeros To The End

// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

function moveZeros(arr) {
    let removedZero = arr.filter(element => element !== 0)
    for (let i = 0; i <= arr.length; i++) {
        if(arr[i] === 0) {
            removedZero.push(0)
        }
    } return removedZero
}

console.log(moveZeros([false,1,0,1,2,0,1,3,"a"])) // returns[false,1,1,2,1,3,"a",0,0])
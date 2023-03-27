// Redo queue

// Queues are linear collections of objects that can be inserted and removed in a FIFO (first in, first out) manner.

// An example of a queue in real life and not strictly computing would simply be the dreaded waiting line, i.e.the first person in line is also the first one who gets out.

// Waiting Lines

// In this problem, we are going to be implementing our own enqueue, dequeue, and size methods for the queue constructor we are creating, so we should be able to create new instances of the Queue.

// The enqueue method takes in the item as a parameter, while the dequeue method does not.
// The size method simply returns the number of items in the queue.

// Wait, what?
// To enqueue an item into the queue means to insert an item into the back, or tail, of the queue.
// To dequeue an item means means to remove the item at the front, or head, of the queue.
// In a queue, we remove the item the least recently added.
// JavaScript Methodology
// Queues can be implemented in JavaScript using arrays.

// You can use the built in push or unshift functions in order to add items to the queue array as well as the shift or pop to remove them.

// As long as the tests pass, go for it!

// create a class and constructor
// set the constructor parameters - array
// add to queue function - push()
// remove from queue - shift()
// return queue length

class Queue {
  constructor() {
    this.storage = []
  }

  enqueue(item) {
    this.storage.push(item)
  }

  dequeue() {
    return this.storage.shift()
  }

  size() {
    return this.storage.length
  }
}

let people = new Queue()

people.enqueue("James")
people.enqueue("Tim")
people.enqueue("Simon")

console.log(people.size())
console.log(people.dequeue())

// Factorial

// In mathematics, the factorial of a non-negative integer n, denoted by n!, is the product of all positive integers less than or equal to n. For example,

// 5! = 5 * 4 * 3 * 2 * 1 = 120.

// The value of 0! is 1.

// #Your task

// You have to create the function factorial that receives n and returns n!. You have to use recursion.

// looking for the total of single integers that make n
// e.g. 5! = 5*4*3*2*1 = 120
// two approaches - brute force and using recursion

// recusion method

const factorial = (n) => {
  return n === 1 ? n : n * factorial(n - 1)
}

console.log(factorial(5))

// Brute force
// loop to number
// each time do loop value plus one
// multiply n * count
// keep track of value

const factorial = (n) => {
  let count = 1
  for (let i = 1; i <= n; i++) {
    count *= i
  }
  return count
}

console.log(factorial(5))

// Given the head of a singly linked list, reverse the list, and return the reversed list.

// head is the start of the linked list.
// reverse the list

//create prev varibale and set it to null
// create current variable and set it to this.current
// while current is true
// create next variable and set it to current.next
// point the current arrow to prev
// set prev to current
// current to next
// when null return prev

function reverseList(head) {
  let current = this.head
  let prev = null
  while (current) {
    let next = current.next
    current.next = prev
    prev = current
    next = prev
  }
  this.head = prev
}

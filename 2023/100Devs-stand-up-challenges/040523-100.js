// Given the head of a singly linked list, reverse the list, and return the reversed list.

function reverseList(head) {
  let current = this.head
  let prev = null
  while (current) {
    let next = current.next
    current.next = prev
    prev = current
    current = next
  }
  this.head = prev
}

// set the linked list head to current var
// create prev var to = null
// loop through the list until current = to false/null
// create next var on the next list value
// pointing the current.next to the prev value which is null
// prev value becomes current value
// current value becomes next value
// when false the list head = prev value

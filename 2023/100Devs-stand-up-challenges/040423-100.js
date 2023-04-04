// Given the head of a linked list, return the middle node of the linked list.

// If there are two middle nodes, return the second middle node.

// head of the list
// return middle node of linked list, if two middles return second node

function middleNode(head) {
  // Use the two pointer approach
  let double = head
  let single = head

  // while loop until null, then return single
  while (double && double.next) {
    double = double.next.next
    single = single.next
  }
  return single
}

console.log(middleNode([1, 2, 3, 4, 5, 6, 7], 4))
console.log(middleNode([1, 2, 3, 4], 3))

/*
initial state
f
1 -> 2 -> 3 -> 4 -> 5
s

1st loop
		  f
1 -> 2 -> 3 -> 4 -> 5
     s
	 
2nd loop
		            f
1 -> 2 -> 3 -> 4 -> 5
          s

when f reach end of the linked list, s will be at the middle.

f = fast pointer
s = slow pointer
*/

var middleNode = function (head) {
  let fast = (slow = head)
  while (fast && fast.next) {
    fast = fast.next.next
    slow = slow.next
  }
  return slow
}

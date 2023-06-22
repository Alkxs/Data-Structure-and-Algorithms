// Description

// Implement the following on a SinglyLinkedList:

// This function should take in a value and add a node to the end of the SinglyLinkedList. It should return the SinglyLinkedList.

// Examples:

// let singlyLinkedList = new SinglyLinkedList();

// singlyLinkedList.push(5); // singlyLinkedList
// singlyLinkedList.length; // 1
// singlyLinkedList.head.val; // 5
// singlyLinkedList.tail.val; // 5

// singlyLinkedList.push(10); // singlyLinkedList
// singlyLinkedList.length; // 2
// singlyLinkedList.head.val; // 5
// singlyLinkedList.head.next.val; // 10
// singlyLinkedList.tail.val; // 10

// singlyLinkedList.push(15); // singlyLinkedList
// singlyLinkedList.length; // 3
// singlyLinkedList.head.val; // 5
// singlyLinkedList.head.next.val; // 10
// singlyLinkedList.head.next.next.val; // 15
// singlyLinkedList.tail.val; // 15

// Implementation with classes

class Node {
  constructor(val) {
    this.val = val
    this.next = null
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null
    this.tail = null
    this.length = 0
  }

  push(val) {
    const newNode = new Node(val)
    if (!this.head) {
      this.head = newNode
      this.tail = this.head
    } else {
      this.tail.next = newNode
      this.tail = newNode
    }
    this.length++
    return this
  }
}

let singlyLinkedList = new SinglyLinkedList()

singlyLinkedList.push(5)
console.log(singlyLinkedList.length)
console.log(singlyLinkedList.head.val)
console.log(singlyLinkedList.tail.val)

// Functional implementation

function Node(val, next = null) {
  return { val, next }
}

function LinkedList() {
  let head = null
  let tail = null
  let length = 0

  function getLength() {
    return length
  }

  function push(val) {
    const newNode = Node(val)
    if (head === null) {
      head = newNode
      tail = newNode
    } else {
      tail.next = newNode
      tail = newNode
    }
    length += 1
  }

  function printList() {
    let current = head
    while (current) {
      console.log(current.val)
      current = current.next
    }
  }

  return { push, getLength, printList }
}

let list = LinkedList()
list.push(5)
list.push(10)
console.log(list.getLength()) // Prints 2
list.printList() // Prints 5, then 10

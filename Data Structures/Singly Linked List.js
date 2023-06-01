// Definition

- A data structure that contains a head, tail and length property.
- Consists of nodes and each node has a value and a pointer to another node or null
- A bunch of nodes pointing to the next one
- Mainly supports 
  * insertion 
  * deletion
  * Search

Comparisons with arrays

 Lists:
- no indexes
- connected via nodes with a next pointer
- random access is not allowed

Arrays:
- indexed in order
- insertion and deletion can be expensive
- can quickly be accessed at a specific index

// Main use and advantages

You use a linked list if need easy insertion and deletion at the beginning or end of the list

// Examples 

- image viewer

// Implementation

class Node {
    constructor(val) {
      this.val = val
      this.next = null
    }
}
class LinkedList {
    constructor(){
      this.head = null
      this.tail = null
      this.length = 0
    }
    push(val){
      const newNode = new Node(val)
      if(!this.head){
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



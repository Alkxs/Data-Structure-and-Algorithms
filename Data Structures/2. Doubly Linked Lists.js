// Definition

Similar to singly linked list, but every node has another pointer to the previous node. This makes possible to traverse the list in both directions

Comparisons with Singly Linked Lists:

* doubly take up more memory, but are more flexible

// Implementation

class Node {
    constructor(val) {
        this.val = val
        this.next = null
        this.prev = null
    }
}
class DoublyLinkedList {
    constructor(){
        this.head = null
        this.tail = null
        this.length = 0
    }
//add at the end of the list
    push(val){
        const newNode = new Node(val)
        if(this.length === 0){
          this.head = newNode
          this.tail = newNode
        } else {
          this.tail.next = newNode
          newNode.prev = this.tail 
          this.tail = newNode
        }
        this.length++
        return this
    }
    // delete at the end of the list
    pop(){
        if (!this.head) {
        return undefined;
        }
  
        const poppedNode = this.tail;
        if (this.length === 1) {
          this.head = null;
          this.tail = null;
        } else {
          this.tail = poppedNode.prev;
          this.tail.next = null;
          poppedNode.prev = null; 
        }
        this.length--;
        return poppedNode.val;
    }
}
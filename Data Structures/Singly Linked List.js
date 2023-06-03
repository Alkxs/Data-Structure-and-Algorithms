// Definition

- A data structure that contains a head, tail and length property.
- Consists of nodes and each node has a value and a pointer to another node or null
- A bunch of nodes pointing to the next one
- Mainly supports 
  * insertion (push, unshift, insert at position)
  * deletion (pop, shift, remove at position)
  * Search (get, set)
  * Access ()

Comparisons with arrays

 Lists:
- no indexes
- connected via nodes with a next pointer
- random access is not allowed

Arrays:
- indexed in order
- insertion and deletion can be expensive
- can quickly be accessed at a specific index

* Linked list are better for insertion and deletion at the beginning(arrays have to re-index the whole thing)
* Arrays are better for inserting and deleting at the end though(as in linked list you would need to traverse the whole thing)
* Arrays contain a built-in index
* linked list are foundation for other ds like queues and stacks

// Main use and advantages

You use a linked list if need easy insertion and deletion at the beginning of the list

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
    //add at the end of the list
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
    // delete at the end of the list
    pop(){
        if(!this.head){
          return undefined
        }
        let current = this.head
        let newTail = current

        while(current.next){
          newTail = current
          current = current.next
        }
        this.tail = newTail
        this.tail.next = null
        this.length--
        if(this.length === 0){
          this.head = null
          this.tail = null
        }
        return current
    }
    shift(){
        if(!this.head) return undefined
        let oldHead = this.head
        this.head = oldHead.next
        this.length--
        if (this.length === 0) {
        this.tail = null;
      }
        return oldHead
    }
    unshift(val){
        const newNode = new Node(val)
        if(!this.head){
        this.head = newNode
        this.tail = this.head
        } else {
          newNode.next = this.head
          this.head = newNode
        }
        this.length++
        return this 
    }
    get(index){
        if(index < 0 || index >= this.length) return null
      
        let current = this.head
        for (let i = 0; i < index; i++) {
        current = current.next;
      }
        return current
    }
    set(index, val){
        let node = this.get(index)
        if (node) {
        node.val = val
        return true
        }
        return false
    }
    insert(index, value){
      if(index < 0 || index > this.length) return false
      if(index === this.length) {
        return this.push(value)
      }
      if(index === 0) {
        this.unshift(value)
      }
      let newNode = new Node(val)
      let prev = this.get(index - 1)
      newNode.next = prev.next
      prev.next = newNode
      this.length++
      return true
    }
    remove(index){
      if(index < 0 || index >= this.length) return undefined;
      if(index === 0) return this.shift()
      if(index === this.length - 1) return this.pop()
      let previousNode = this.get(index - 1)
      let removed = previousNode.next
      previousNode.next = removed.next
      this.length--
      return removed
    }
    reverse() {
    let node = this.head;
    this.head = this.tail;
    this.tail = node;
    let prev = null;
    let next;
    
    for (let i = 0; i < this.length; i++) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }

    return this;
    }
}

let list = new LinkedList()

list.push('hello')
list.push('boy')
list.push('!')

console.log(list)

let poppedValue = list.pop()
let shiftedValue = list.shift()

list.unshift('soCool')

console.log(poppedValue)
console.log(shiftedValue)
console.log(list.get(4))
console.log(list.set(3, 'boh'))
console.log(list.remove(1))
console.log(list)

// Big O
* Insertion = O(1)
* Removal = O(1) or O(n)
* Searching = O(n)
* Access = O(n)
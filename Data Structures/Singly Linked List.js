// Definition

- A data structure that contains a head, tail and length property.
- Consists of nodes and each node has a value and a pointer to another node or null
- A bunch of nodes pointing to the next one
- Mainly supports 
  * insertion (push, unshift)
  * deletion (pop, shift)
  * Search (get, set)

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
console.log(list)

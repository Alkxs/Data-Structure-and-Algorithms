// Definition

 * A stack is a data structure that takes a data collection as a LIFO (Last In First Out) (think of pancakes or books or plates)

 - Used to manage function invocations
 - Undo / Redo
 - Routing (the history object)

 There is more than one way to implement a stack (abstract concept), easiest way is to use an Array (LIFO made possible by push, pop, shift, unshift, even though shift and unshift is very inefficient in array because of indexes ). They're not built-in in js, but easy to implement.
 * Easier to implement as an array, but for big data, better to implement with linked list

 // Usage 

 * Mainly for insertion and removal (like linked lists)

// Implementation

1. Using an array

class Stack {
  constructor() {
    this.stack = [];
  }
  // Add an element to the top of the stack
  push(element) {
    this.stack.push(element);
  }
  // Remove an element from the top of the stack
  pop() {
    if (this.isEmpty()) {
      return 'Stack is empty';
    }
    return this.stack.pop();
  }

  // Return the top element of the stack
  peek() {
    if (this.isEmpty()) {
      return 'Stack is empty';
    }
    return this.stack[this.stack.length - 1];
  }

  // Check if the stack is empty
  isEmpty() {
    return !this.stack.length;
  }
}

2. Using a linked list

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.top = null;
        this.length = 0;
    }
    // Add an element to the top of the stack
    push(value) {
        let newNode = new Node(value);
        if(this.top) {
            newNode.next = this.top;
        }
        this.top = newNode;
        this.length++;
    }
    // Remove an element from the top of the stack
    pop() {
        if(this.isEmpty()) {
            return 'Stack is empty';
        }
        let temp = this.top;
        this.top = this.top.next;
        this.length--;
        return temp.value;
    }
    // Return the top element of the stack
    peek() {
        if(this.isEmpty()) {
            return 'Stack is empty';
        }
        return this.top.value;
    }
    // Check if the stack is empty
    isEmpty() {
        return this.length === 0;
    }
}


// Big O stacks

* Insertion = O(1)
* Removal = O(1)
* Searching = O(n)
* Access = O(n) 

////////////////////////////////////

 * A queue is a data structure that takes a data collection as a FIFO (First In First Out) (think of a line of people)

// Usage 
* Background tasks (when downloading)
* Uploading resources
* Printing / Task processing 

They're also an abstract concept. They can be built easily through arrays, but for complex data structures is better to use linked lists.

* If you're really concerned about performance, do not use arrays as being indexed are not the best

* Instead of push and pop you would use enqueue(adding to the end), and dequeue(delete from the front)

 // implementation

1. Using an array

 class Queue {
  constructor() {
    this.queue = [];
  }
  // Add an element to the end of the queue
  enqueue(element) {
    this.queue.push(element);
  }
  // Remove an element from the front of the queue
  dequeue() {
    if (this.isEmpty()) {
      return 'Queue is empty';
    }
    return this.queue.shift();
  }
  // Return the front element of the queue
  peek() {
    if (this.isEmpty()) {
      return 'Queue is empty';
    }
    return this.queue[0];
  }
  // Check if the queue is empty
  isEmpty() {
    return !this.queue.length;
  }
}

2. Using a linked list

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.length = 0;
    }
    // Add an element to the end of the queue
    enqueue(value) {
        const newNode = new Node(value);
        if (this.length === 0) {
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode;
            this.last = newNode;
        }
        this.length++;
        return this.length;
    }
    // Remove an element from the front of the queue
    dequeue() {
        if (!this.first) {
            return null;
        }
        if (this.first === this.last) {
            this.last = null;
        }
        const temp = this.first;
        this.first = this.first.next;
        this.length--;
        return temp.value;
    }
    // Return the first element of the queue
    peek() {
        if (this.length === 0) {
            return null;
        }
        return this.first.value;
    }
}

// Big O stacks

* Insertion = O(1)
* Removal = O(1)
* Searching = O(n)
* Access = O(n) 
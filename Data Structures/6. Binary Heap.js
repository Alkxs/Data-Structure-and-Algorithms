// Definition

A specialized tree-based data structure similar to binary search tree, each node at most 2 children but:
* No order
* In MaxBinaryHeap parent nodea are always larger than child nodes
* In MinBinaryHeap parent nodes are always smaller than child notes 
* In siblings there is no guarantee
* As compact as possible
* Left children are filled out first

// Methods/Operations
* Insertion(push)
* Deletion(pop)
* Peek(max or min)
* Heapify(convert array into heap)

// Implementation
  class MaxHeap {
    constructor() {
        this.array = [];
    }
  }
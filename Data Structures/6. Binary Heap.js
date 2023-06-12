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

    insert(val) {
        this.array.push(val);
        this.bubbleUp();
    }

    bubbleUp() {
        let idx = this.array.length - 1;
        while (idx > 0) {
            let element = this.array[idx];
            let parentIdx = Math.floor((idx - 1) / 2);
            let parent = this.array[parentIdx];
            if (parent >= element) break;
            this.array[idx] = parent;
            this.array[parentIdx] = element;
            idx = parentIdx;
        }
    }

    extractMax() {
        const max = this.array[0];
        const end = this.array.pop();
        if (this.array.length > 0) {
            this.array[0] = end;
            this.sinkDown();
        }
        return max;
    }

    sinkDown() {
        let idx = 0;
        const length = this.array.length;
        const element = this.array[0];

      while (true) {
        let leftChildIdx = 2 * idx + 1;
        let rightChildIdx = 2 * idx + 2;
        let leftChild, rightChild;
        let swap = null;

        if (leftChildIdx < length) {
            leftChild = this.array[leftChildIdx];
            if (leftChild > element) {
                swap = leftChildIdx;
            }
        }

        if (rightChildIdx < length) {
            rightChild = this.array[rightChildIdx];
            if (
                (swap === null && rightChild > element) ||
                (swap !== null && rightChild > leftChild)
            ) {
                swap = rightChildIdx;
            }
        }

        if (swap === null) break;
        this.array[idx] = this.array[swap];
        this.array[swap] = element;
        idx = swap;
        }
      }
  }


// BigO heaps

* Insertion = O(log n)
* Deletion = O(log n)
* Peek = O(1)
* Heapify = O(n)
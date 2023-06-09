//Definition

Process of visiting each node in a tree data structure oncuechange. different ways:

1. Depth-first search(DFS)

  * Pre-order:
    - Visit the node
    - Traverse the left subtree
    - Traverse the right subtree
  * In-order:
    - Traverse the left subtree
    - Visit the node
    - Traverse the right subtree
  * Post-order:
    - Traverse the left subtree
    - Traverse the right subtree
    - Visit the node

2. Breatdh-first search (BFS)

Unlike depth-first search that dives deep into a tree as much as possible, breadth-first search explores all the neighbors(horizontal search) at the present depth before moving on to nodes at the next depth level. BFS is implemented using a queue.

// Implementation

class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree {
    constructor() {
        this.root = null;
    }

    preOrder() {
        let result = [];
        function traverse(currentNode) {
            if (currentNode) {
                result.push(currentNode.value);
                traverse(currentNode.left);
                traverse(currentNode.right);
            }
        }
        traverse(this.root);
        return result;
    }
    inOrder(){
        let result = [];
        function traverse(currentNode) {
            if (currentNode) {
                traverse(currentNode.left);
                result.push(currentNode.value);
                traverse(currentNode.right);
            }
        }
        traverse(this.root);
        return result;
    }
    postOrder() {
        let result = [];
        function traverse(currentNode) {
            if (currentNode) {
                traverse(currentNode.left);
                traverse(currentNode.right);
                result.push(currentNode.value);
            }
        }
        traverse(this.root);
        return result;
    }
    breadthFirst() {
        let result = [];
        let queue = [];
        
        if (this.root != null) {
            queue.push(this.root);

            while(queue.length > 0) {
                let node = queue.shift();
                result.push(node.value);
                
                if (node.left != null) {
                    queue.push(node.left);
                }
                if (node.right != null) {
                    queue.push(node.right);
                }
            }
        }
        return result;
    }
}

//Big O tree traversal

DFS = O(n)
BFS = O(n)

// Notes

* BFS uses more memory than DFS because it needs to store all nodes in the current level to queue

// Usage

* BFS for shortest path root to node; if tree very deep DFS.

// Summary
DFS
pre = node + left + right
in = left + node + right
post = left + right + node
BFS = horizontal top-down
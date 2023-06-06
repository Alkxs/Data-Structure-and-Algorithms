// Definition

Trees are a type of non-linear data structure that represent hierarchical data in a natural and efficient way. Unlike arrays, linked lists, stacks and queues, which are linear data structures, a tree introduces the concept of "levels".

Difference between trees in nature and trees in cs is that a tree in cs has root at top and leaves at bottom

* They mainly store strings and numbers, but can store all kind of data 
* Lists are linear, but trees are not
* To be a tree it has to be a one-way route down, where the root is the top (first) node in a tree, the child is a node directly connected to another node when moving away from the root, the parent is the node on top when compared to a child, and siblings are a group of nodes with the same parent, and a leaf is a node with no children
* Can be implemented using arrays, or abstract data type

// Usage 

* HTML DOM
* Folders in Operating systems
* Computer File Systems

// Type of trees
* Tree
    * Binary tree => at most 2 children
      * Binary search tree => special type of binary tree with =>
        - every left node is always less than parent
        - every right node is always greater than parent

// Implementation

class TreeNode {
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

    insert(value) {
        let newNode = new TreeNode(value);
        if (this.root === null) {
            this.root = newNode;
        } else {
            let currentNode = this.root;
            while(true) {
                if (value < currentNode.value) {
                    if (!currentNode.left) {
                        currentNode.left = newNode;
                        return this;
                    }
                    currentNode = currentNode.left;
                } else {
                    if (!currentNode.right) {
                        currentNode.right = newNode;
                        return this;
                    }
                    currentNode = currentNode.right;
                }
            }
        }
    }
} 

// Usage:
let myTree = new BinaryTree();
myTree.insert(10);
myTree.insert(6);
myTree.insert(15);
myTree.insert(3);
myTree.insert(8);
myTree.insert(20);

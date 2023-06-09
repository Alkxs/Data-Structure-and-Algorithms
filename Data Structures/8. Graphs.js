// Definition

A non-linear data structure that is a collection of nodes and connections.
All nodes are treated equally, there is no parent and no priority

// Usage

* Physical systems of roads, flights etc.
* Social networks (linkedin connection)
* Location / Mapping
* recommendation engines

// Terminology 

* Vertex = a node
* Edge = connection between nodes

// Type of graphs

* weighted / Unweighted = assigning values to edges (km in maps) or without 
* Directed / Undirected = with directions (linkedin) or without(facebook)

// Operations

* Add Vertex
* Add edges
* Display vertex

// Graph representation

* Adjacency list: array of lists

* Adjacency matrix : 2D array of size V x V (vertex), if edge the value is 1, otherwise is 0

// Famous graph algorithms 

* Dijkstra's algorithm (for finding the shortest path from one node to another in a weighted graph)
* Prim's
* Kruskal's algorithms (for finding minimum spanning trees in a graph)
* Bellman-Ford algorithm (for shortest path that handles negative weights)
* Floyd-Warshall algorithm (for finding shortest paths between all pairs of nodes)

// Implementation

class Graph {
  constructor() {
    this.adjacencyList = {};
  }
  
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }

  addEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1].push(vertex2);
    this.adjacencyList[vertex2].push(vertex1);
  }

  removeEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
      v => v !== vertex2
    );
    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
      v => v !== vertex1
    );
  }

  removeVertex(vertex) {
    while(this.adjacencyList[vertex].length) {
      const adjacentVertex = this.adjacencyList[vertex].pop();
      this.removeEdge(vertex, adjacentVertex);
    }
    delete this.adjacencyList[vertex];
  }

  
}

// Big O

* adding edge or vertex = O(1)
* removing edge = 0(E)
* removing vertex = O(V + N)

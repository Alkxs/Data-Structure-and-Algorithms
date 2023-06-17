
// Definition

Graph traversal is the process of visiting (checking and/or updating) each vertex in a graph. 

// Classification

Look at previous sections as well

* Depth-First Search (DFS): following a single path as far as possible

* Breadth-First Search (BFS): all neighbor nodes at the present depth before moving on to nodes at the next depth level.

Difference with trees is that there is not always a clear path.

// Implementation

class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  dfsRecursive(start) {
    const result = [];
    const visited = {};
    const adjacencyList = this.adjacencyList;

    (function dfs(vertex){
      if (!vertex) return null;
      visited[vertex] = true;
      result.push(vertex);
      adjacencyList[vertex].forEach(neighbor => {
        if (!visited[neighbor]) {
          return dfs(neighbor)
        }
      });
    })(start);

    return result;
  }

  dfsIterative(start) {
  const stack = [start];
  const result = [];
  const visited = {};
  let currentVertex;

  visited[start] = true;
  while (stack.length) {
    currentVertex = stack.pop();
    result.push(currentVertex);

    this.adjacencyList[currentVertex].forEach(neighbor => {
      if (!visited[neighbor]) {
        visited[neighbor] = true;
        stack.push(neighbor);
      }
    });
  }

  return result;
}

bfs(start) {
    const queue = [start];
    const result = [];
    const visited = {};
    let currentVertex;

    visited[start] = true;
    while (queue.length) {
      currentVertex = queue.shift();
      result.push(currentVertex);

      this.adjacencyList[currentVertex].forEach(neighbor => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          queue.push(neighbor);
        }
      });
    }

    return result;
  }

}

// Usage

* DFS can be used to get a path between two points if a path exists. This could be useful in games in which one character is trying to find another, for example.

* DFS can be used in scenarios where we want to exhaust all possibilities on a current path, before retracting steps. It's used in solving puzzles with only one solution, such as a maze or a sudoku puzzle.

* BFS can be used in shortest path algorithms such as Dijkstra's or Bellman-Ford algorithms.

* BFS can be used in peer to peer network. In peer to peer network, we prefer to share resources with a neighbor's neighbor before a distant machine.


Remember, DFS can be implemented using recursion (or with an explicit stack), while BFS is implemented with a queue.

// Big O 

* DFS = O(V+E)
* BFS = O(V+E)
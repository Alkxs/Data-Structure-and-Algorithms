// Definition

Famous Algo used for finding the shortest paths between nodes in a graph (ex. road networks)

It uses the weights of the edges to find the path that minimizes the total distance from the starting node to all other nodes in the graph. It only works for algos with non-negative weights 

// Process

1. Set the initial node as "current" and set its distance to 0, while all other nodes get the distance of Infinity (representing that they are not reachable yet).

2. For the current node, consider all of its unvisited neighbors and calculate their tentative distances. Compare the newly calculated tentative distance to the current assigned value and assign the smaller one.

3. Once all of the neighbors of the current node are considered, mark the current node as visited. A visited node will not be checked again.

4. Select the unvisited node with the smallest tentative distance, and set it as the new "current" node, then go back to step 2.

5. The algorithm continues this process until it has visited every node in the graph.

// Implementation

class PriorityQueue {
  constructor() {
    this.values = [];
  }

  enqueue(val, priority) {
    this.values.push({ val, priority });
    this.sort();
  }

  dequeue() {
    return this.values.shift();
  }

  sort() {
    this.values.sort((a, b) => a.priority - b.priority);
  }
}

class WeightedGraph {
  constructor() {
    this.adjacencyList = {};
  }

  // ... (addVertex, addEdge, etc. methods here)

  Dijkstra(start, finish) {
    const nodes = new PriorityQueue();
    const distances = {};
    const previous = {};
    let path = [] // to return at end
    let smallest;
    
    // build up initial state
    for (let vertex in this.adjacencyList) {
      if (vertex === start) {
        distances[vertex] = 0;
        nodes.enqueue(vertex, 0);
      } else {
        distances[vertex] = Infinity;
        nodes.enqueue(vertex, Infinity);
      }
      previous[vertex] = null;
    }

    // as long as there is something to visit
    while(nodes.values.length) {
      smallest = nodes.dequeue().val;
      if (smallest === finish) {
        // we are done
        // build up path to return at end
        while(previous[smallest]) {
          path.push(smallest);
          smallest = previous[smallest];
        }
        break;
      }

      if (smallest || distances[smallest] !== Infinity) {
        for (let neighbor in this.adjacencyList[smallest]) {
          // find neighboring node
          let nextNode = this.adjacencyList[smallest][neighbor];
          // calculate new distance to neighboring node
          let candidate = distances[smallest] + nextNode.weight;
          let nextNeighbor = nextNode.node;
          if (candidate < distances[nextNeighbor]) {
            // updating new smallest distance to neighbor
            distances[nextNeighbor] = candidate;
            // updating previous - how we got to neighbor
            previous[nextNeighbor] = smallest;
            // enqueue in priority queue with new priority
            nodes.enqueue(nextNeighbor, candidate);
          }
        }
      }
    }

    return path.concat(smallest).reverse();     
  }
}

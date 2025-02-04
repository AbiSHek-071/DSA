class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  // To Create Node or a Vertex o
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    }
  }

  // To make the connection between 2 Node or Vertex. Pushing the Vertex each other to the value array
  addEdge(vertex1, vertex2) {
    if (!this.adjacencyList[vertex1]) {
      this.addVertex(vertex1);
    }
    if (!this.adjacencyList[vertex2]) {
      this.addVertex(vertex2);
    }

    this.adjacencyList[vertex1].push(vertex2);
    this.adjacencyList[vertex2].push(vertex1);
  }

  // To remove the connection between Two nodes or Vertex
  removeEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
      (vertex) => vertex !== vertex2
    );

    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
      (vertex) => vertex !== vertex1
    );
  }

  //To remove A vertex so that before removing we have to remove the connection with the vertex with any of the node.
  removeVertex(vertex) {
    while (this.adjacencyList[vertex].length > 0) {
      const connectedVertex = this.adjacencyList[vertex].pop();
      this.removeEdge(vertex, connectedVertex);
    }
    delete this.adjacencyList[vertex];
  }

  // Traverase through the neighbour first before traverse deep
  BFS(start) {
    //Initializing a Queue with a array from where to start, Result which will be return as the array, and a unique Set for storing visted Vertexes
    const queue = [start];
    const result = [];
    const visited = new Set();

    visited.add(start);

    while (queue.length > 0) {
      //In first loop start will get inside the current
      const current = queue.shift();
      //Current will pushed to the result to disply
      result.push(current);

      // for loop for traverse through the current vertex to find the connected vertex.
      for (let neighbor of this.adjacencyList[current]) {
        // if the neighbor vertex is not visited yet. it will add to the visited and the add to the queue for push to the result in next iteration
        if (!visited.has(neighbor)) {
          visited.add(neighbor);
          queue.push(neighbor);
        }
      }
    }
    return result;
  }

  DFS(start) {
    const stack = [start];
    const result = [];
    const visited = new Set();

    visited.add(start);

    while (stack.length > 0) {
      const current = stack.pop();
      result.push(current);

      for (let neighbor of this.adjacencyList[current]) {
        if (!visited.has(neighbor)) {
          visited.add(neighbor);
          stack.push(neighbor);
        }
      }
    }
    return result;
  }

  cloneGraph() {
    // initialize a graph
    const ClonedGraph = new Graph();
    const addedEdges = new Set();

    // copying the vertex to the graph
    for (let vertex in this.adjacencyList) {
      ClonedGraph.addVertex(vertex);
    }

    // copy and establish the connection between the vertexes
    for (let vertex in this.adjacencyList) {
      for (let neighbor of this.adjacencyList[vertex]) {
        const edgeKey =
          vertex < neighbor ? `${vertex}-${neighbor}` : `${neighbor}-${vertex}`;

        if (!addedEdges.has(edgeKey)) {
          ClonedGraph.addEdge(vertex, neighbor);
          addedEdges.add(edgeKey);
        }
      }
    }
    return ClonedGraph;
  }

  printGraph() {
    for (let vertex in this.adjacencyList) {
      console.log(`${vertex} -> ${this.adjacencyList[vertex].join(", ")}`);
    }
  }
}

// Create a new Graph instance
const graph = new Graph();

// Test addVertex()
console.log("Adding vertices: A, B, C, D, E");
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.printGraph();

// Test addEdge()
console.log("\nAdding edges: A-B, A-C, B-D, C-D, D-E");
graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("B", "D");
graph.addEdge("C", "D");
graph.addEdge("D", "E");
graph.printGraph();

// Test BFS
console.log("\nBFS from vertex A:");
console.log(graph.BFS("A"));

// Test DFS
console.log("\nDFS from vertex A:");
console.log(graph.DFS("A"));

// Test removeEdge()
console.log("\nRemoving edge B-D:");
graph.removeEdge("B", "D");
graph.printGraph();

// Test removeVertex()
console.log("\nRemoving vertex D:");
graph.removeVertex("D");
graph.printGraph();

// Test cloneGraph()
console.log("\nCloning the graph...");
const clonedGraph = graph.cloneGraph();
console.log("Original Graph:");
graph.printGraph();
console.log("Cloned Graph:");
clonedGraph.printGraph();

// Build an undirected graph
class Graph {
    constructor(){
        this.adjacencyList = {};
    }

    addVertex(vtx) {
        if(!this.adjacencyList[vtx]) this.adjacencyList[vtx] = [];
        return this.adjacencyList;
    }

    addEdge(v1, v2){
        if(!(this.adjacencyList.hasOwnProperty(v1) && this.adjacencyList.hasOwnProperty(v2))) return "sorry but there is no vertex";
        else{
            this.adjacencyList[v1].push(v2);
            this.adjacencyList[v2].push(v1);
        }
    }

    removeEdge(v1, v2){  // May have some bugs
        if(!(this.adjacencyList.hasOwnProperty(v1) && this.adjacencyList.hasOwnProperty(v2))) return "sorry but there is no vertex";
        else{
            let idx1 = this.adjacencyList[v1].indexOf(v2);
            let idx2 = this.adjacencyList[v2].indexOf(v1);
            this.adjacencyList[v1].splice(idx1, 1);
            this.adjacencyList[v2].splice(idx2, 1);
        }
    }
    
    //With filter()
    removeEdgeWithFilter(v1, v2) {
        if(!(this.adjacencyList.hasOwnProperty(v1) && this.adjacencyList.hasOwnProperty(v2))) return "sorry but there is no vertex";
        else{
            this.adjacencyList[v1] = this.adjacencyList[v1].filter(v => v !== v2);
            this.adjacencyList[v2] = this.adjacencyList[v2].filter(v => v !== v1);
        }
    }

    // Remove all edges and vertices as well
    removeVertex(vtx){
        if(!this.adjacencyList.hasOwnProperty(vtx)) return "sorry but there is no vertex";

        while(this.adjacencyList[vtx].length){
            const adjacentVtx = this.adjacencyList[vtx].pop();
            this.removeEdgeWithFilter(vtx, adjacentVtx);
        }

        delete this.adjacencyList[vtx];  // delete operator removes a property from an object
    }

    // Depth-First Traversal
    dfs_recursion(vtx){  // vtx is the vertex you start from
        const arr = [], obj = {};
        const adjacencyList = this.adjacencyList;  // Otherwise inside helper() will change the context(i.e., this)

        const helper = (v) => {
            if(!v) return undefined;
            arr.push(v);
            obj[v] = true;  // Mark the vertex as visited

            // Noice!!
            adjacencyList[v].forEach(neighbor => {
                if(!obj[neighbor]) return helper(neighbor);  // If the adjacent vertex is not visited, recursively call helper() on it
            })

            // Will have different result if using for/of
            // Because return only terminates the current callback when inside a forEach - it doesn't stop further iterations from running, nor does the return value get used anywhere. In contrast, return inside for..of returns the following expression to the caller of the containing function.
            // for(const ele of adjacencyList[v]){
            //     if(!obj[ele]) return helper(ele);
            // }
        };
        helper(vtx);

        return arr;
    }

    dfs_iteration(vtx){
        // Using an array as a stack
        const stack = [], visited = {}, result = [];
        stack.push(vtx); 
        let v;

        while(stack.length){
            v = stack.pop();

            if(!visited[v]){
                result.push(v);
                visited[v] = true;
                this.adjacencyList[v].forEach(adj => {
                    stack.push(adj);
                });
            }
        }

        return result;
    }

    bfs_iteration(vtx){
        // Using an array as queue
        const queue = [vtx], visited = {}, result = [];
        let v;
        visited[vtx] = true;

        while(queue.length){
            v = queue.shift();
            result.push(v);
            // this.adjacencyList[v].forEach(adj => {
            //     if(!visited[adj]){
            //         visited[adj] = true;
            //         queue.push(adj);
            //     }
            // });

            // If want to loop this array backwards
            this.adjacencyList[v].slice().reverse().forEach(adj => {  // slice() witout start and end parameters will return a shallow copy of elements from the original array
                if(!visited[adj]){
                    visited[adj] = true;
                    queue.push(adj);
                }
            });
        }

        return result;
    }
}

let undirectedGraph = new Graph();

// addVertex()
console.log(undirectedGraph.addVertex("v1"));
console.log(undirectedGraph.addVertex("v2"));
console.log(undirectedGraph.addVertex("v3"));
console.log(undirectedGraph.addVertex("v4"));
console.log(undirectedGraph.addVertex("v5"));
console.log(undirectedGraph.addVertex("v6"));

// addEdge()
console.log(undirectedGraph.addEdge("v1", "v3"));
console.log(undirectedGraph.addEdge("v1", "v2"));
console.log(undirectedGraph.addEdge("v4", "v5"));
console.log(undirectedGraph.addEdge("v5", "v2"));
console.log(undirectedGraph.addEdge("v6", "v3"));
console.log(undirectedGraph.addEdge("v6", "v7"));
console.log(undirectedGraph);

// removeEdge()
console.log(undirectedGraph.removeEdge("v1", "v3"));
console.log(undirectedGraph);
console.log(undirectedGraph.removeEdgeWithFilter("v2", "v5"));
console.log(undirectedGraph);

console.log(undirectedGraph.addEdge("v2", "v5"));
console.log(undirectedGraph);

// removeVertex()
console.log(undirectedGraph.removeVertex("v8"));
console.log(undirectedGraph.removeVertex("v2"));
console.log(undirectedGraph);


let graphTraversal = new Graph();
graphTraversal.addVertex("A");
graphTraversal.addVertex("B");
graphTraversal.addVertex("C");
graphTraversal.addVertex("D");
graphTraversal.addVertex("E");
graphTraversal.addVertex("F");
graphTraversal.addEdge("A", "B");
graphTraversal.addEdge("A", "C");
graphTraversal.addEdge("B", "D");
graphTraversal.addEdge("C", "E");
graphTraversal.addEdge("D", "E");
graphTraversal.addEdge("D", "F");
graphTraversal.addEdge("E", "F");
console.log(graphTraversal);

// dfs_recursion()
console.log(graphTraversal.dfs_recursion("A"));

// dfs_iteration()
console.log(graphTraversal.dfs_iteration("A"));

// bfs_iteration()
console.log(graphTraversal.bfs_iteration("A"));
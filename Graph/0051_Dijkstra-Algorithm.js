class PriorityQueue {
    constructor(){
        this.values = [];
    }

    enqueue(val, pri){
        this.values.push({val, pri});
        this.sort();
    }
    
    dequeue(){
        return this.values.shift();
    }

    sort(){
        this.values.sort((a, b) => a.pri - b.pri);  // Time Complexity: O(NlogN)
    }
}

class WeightedGraph {
    constructor(){
        this.adjacencyList = {};
    }

    addVtx(vtx){
        if(!this.adjacencyList[vtx]) this.adjacencyList[vtx] = [];
        return this.adjacencyList;
    }

    addEdge(v1, v2, weight){
        if(!(this.adjacencyList.hasOwnProperty(v1) && this.adjacencyList.hasOwnProperty(v2))) return "sorry but there is no vertex";
        else{
            this.adjacencyList[v1].push({node: v2, weight: weight});
            this.adjacencyList[v2].push({node: v1, weight});
        }
    }

    dijkstra(v1, v2){
        const priority = new PriorityQueue(), dist = {}, visited = [], previous = {};
        let shortestNode;  // A node with the shortest distance from v1 for now
        let shortestPath = [];
        
        // Build up an initial state
        for(let vtx in this.adjacencyList){
            if(vtx !== v1){
                dist[vtx] = Infinity;
                priority.enqueue(vtx, Infinity);
            }
            else{
                dist[vtx] = 0;
                priority.enqueue(vtx, 0);
            } 
            previous[vtx] = null;
        }

        // If there is something to visit...
        while(priority.values.length){
            shortestNode = priority.dequeue().val;
            if(shortestNode === v2){
                while(previous[shortestNode]){
                    shortestPath.push(shortestNode);
                    shortestNode = previous[shortestNode];
                }
                break;
            }
            
            if(shortestNode || dist[shortestNode] !== Infinity){
                // this.adjacencyList[shortestNode].forEach((neighborNode, idx) => {  // Look through every neighbor of the shortest node from v1
                //     // Calculate a new distance to neighborNode
                //     let shortestSum = dist[shortestNode] + neighborNode.weight;
                //     neighborNode
                //     if(shortestSum < dist[neighborNode]){
                //         // Update a new shortest distance to neighborNode
                //         dist[neighborNode] = shortestSum;

                //         // Update previous{}
                //         previous[neighborNode] = shortestNode;

                //         // Enqueue with new priority
                //         priority.enqueue(neighborNode, shortestSum);
                //     }
                // });
                for(let neighbor in this.adjacencyList[shortestNode]){
                    let nextNode = this.adjacencyList[shortestNode][neighbor];

                    // Calculate a new distance to neighborNode
                    let candidate = dist[shortestNode] + nextNode.weight;
                    if(candidate < dist[nextNode.node]){
                        // Update a new shortest distance to neighborNode
                        dist[nextNode.node] = candidate;

                        // Update previous{}
                        previous[nextNode.node] = shortestNode;

                        // Enqueue with new priority
                        priority.enqueue(nextNode.node, candidate);
                    }
                }
            }
        }
        
        return shortestPath.concat(shortestNode).reverse();
    }
}

let graph = new WeightedGraph();

console.log(graph.addVtx("A"));
console.log(graph.addVtx("B"));
console.log(graph.addVtx("C"));
console.log(graph.addVtx("D"));
console.log(graph.addVtx("E"));
console.log(graph.addVtx("F"));
console.log(graph.addEdge("A", "B", 4));
console.log(graph.addEdge("A", "C", 2));
console.log(graph.addEdge("B", "E", 3));
console.log(graph.addEdge("C", "D", 2));
console.log(graph.addEdge("C", "F", 4));
console.log(graph.addEdge("D", "E", 3));
console.log(graph.addEdge("D", "F", 1));
console.log(graph.addEdge("E", "F", 1));
console.log(graph.adjacencyList);

// dijkstra()
console.log(graph.dijkstra("A", "E"));  // ['A', 'C', 'D', 'F', 'E']
console.log(graph.dijkstra("A", "F"));  // ['A', 'C', 'D', 'F']
// Write a Min Binary Heap (Lower number means higher priority)
// With Enqueue() & Dequeue()



class Node {
    constructor(val, pri){
        this.value = val;
        this.priority = pri;
    }
}

class PriorityQueue {
    constructor() {
        this.values = [];
    }

    enqueue(val, pri) {
        let newNode = new Node(val, pri);
        this.values.push(newNode);
        this.bubbleUp();
        return this;
    }

    bubbleUp(){
        let idx = this.values.length - 1;

        while(idx > 0){
            let parentIdx = Math.floor((idx - 1) / 2);
            if(this.values[idx].priority >= this.values[parentIdx].priority) break;
            [this.values[idx], this.values[parentIdx]] = [this.values[parentIdx], this.values[idx]];
            idx = parentIdx;
        }
    }

    dequeue(){
        let first = this.values[0];
        let last = this.values.pop();

        if(this.values.length > 0){
            this.values[0] = last;
            this.sinkDown();
        }
        return first;
    }

    sinkDown(){
        let idx = 0;
        const length = this.values.length;
        const ele = this.values[0];
        const elePri = this.values[0].priority;

        while(true){
            let leftIdx = 2*idx + 1;
            let rightIdx = 2*idx + 2;
            let leftChildPri, rightChildPri;
            let swapIdx = null;

            if(leftIdx < length){
                leftChildPri = this.values[leftIdx].priority;
                if(leftChildPri < elePri){
                    swapIdx = leftIdx;
                }
            }

            if(rightIdx < length){
                rightChildPri = this.values[rightIdx].priority;
                if((swapIdx === null && rightChildPri < elePri) || (swapIdx !== null && rightChildPri < leftChildPri)){
                    swapIdx = rightIdx;
                }
            }

            if(swapIdx === null) break;
            
            this.values[idx] = this.values[swapIdx];
            this.values[swapIdx] = ele;
            idx = swapIdx;
        }
    }
}

let priorityQueue = new PriorityQueue;

// enqueue()
console.log(priorityQueue.enqueue(41, 5));
console.log(priorityQueue.enqueue(38, 1));
console.log(priorityQueue.enqueue(24, 4));
console.log(priorityQueue.enqueue(26, 2));
console.log(priorityQueue.enqueue(12, 3));

// dequeue()
console.log(priorityQueue.dequeue());
console.log(priorityQueue.values);
console.log(priorityQueue.dequeue());
console.log(priorityQueue.values);
console.log(priorityQueue.dequeue());
console.log(priorityQueue.values);
console.log(priorityQueue.dequeue());
console.log(priorityQueue.values);


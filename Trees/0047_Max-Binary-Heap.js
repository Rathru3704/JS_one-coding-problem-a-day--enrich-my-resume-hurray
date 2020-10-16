class MaxBinaryHeap{
    constructor(){
        this.value = [];
    }

    insert(val){
        // Push the val into the value property on the heap
        this.value.push(val);

        // Bubble Up the value to find its proper position
        let idx = this.value.length - 1;
        while(idx > 0){
            let parentIdx = Math.floor((idx - 1) / 2);
            if(this.value[idx] <= this.value[parentIdx]) break;
            [this.value[idx], this.value[parentIdx]] = [this.value[parentIdx], this.value[idx]];
            idx = parentIdx;
        }

        return this;
    }

    // Extraction - 
    // 1. Remove the root
    // 2. Replace with most recently added
    // 3. Sink Down (Bubble Down)
    extractMax(){
        // Replace & Remove
        const max = this.value[0];
        const end = this.value.pop();
        
        if(this.value.length > 0){
            this.value[0] = end;
            this.sinkDown();
        }
        return this;
    }

    // Sink Down the value to find its proper position
    sinkDown(){
        let idx = 0;
        const length = this.value.length;
        const ele = this.value[0];

        while(true){
            let leftIdx = 2*idx + 1;
            let rightIdx = 2*idx + 2;
            let leftChild, rightChild;
            let swapIdx = null;

            if(leftIdx < length){
                leftChild = this.value[leftIdx];
                if(leftChild > ele){
                    swapIdx = leftIdx;
                }
            }

            if(rightIdx < length){
                rightChild = this.value[rightIdx];
                if((swapIdx === null && rightChild > ele) || (swapIdx !== null && rightChild > leftChild)){
                    swapIdx = rightIdx;
                }
            }

            if(swapIdx === null) break;
            
            this.value[idx] = this.value[swapIdx];
            this.value[swapIdx] = ele;
            idx = swapIdx;
        }
    }
}

let maxBinaryHeap = new MaxBinaryHeap;

// insert()
console.log(maxBinaryHeap.insert(41));
console.log(maxBinaryHeap.insert(39));
console.log(maxBinaryHeap.insert(33));
console.log(maxBinaryHeap.insert(18));
console.log(maxBinaryHeap.insert(27));
console.log(maxBinaryHeap.insert(12));
console.log(maxBinaryHeap.insert(55));

// extract()
console.log(maxBinaryHeap.extractMax());
console.log(maxBinaryHeap.extractMax());
console.log(maxBinaryHeap.extractMax());
console.log(maxBinaryHeap.extractMax());
console.log(maxBinaryHeap.extractMax());
console.log(maxBinaryHeap.extractMax());
console.log(maxBinaryHeap.extractMax());
console.log(maxBinaryHeap.extractMax());

console.log(maxBinaryHeap.insert(41));
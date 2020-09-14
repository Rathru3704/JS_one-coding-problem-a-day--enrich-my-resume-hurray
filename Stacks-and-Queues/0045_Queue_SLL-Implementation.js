class Node{
    constructor(val){
        this.value = val;
        this.next = null;
    }
}

class Queue{
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    // Like push()
    enqueue(val){
        let newNode = new Node(val);

        if(!this.first){
            this.first = newNode;
            this.last = newNode;
        } else{
            let oldLast = this.last;
            oldLast.next = newNode;
            this.last = newNode;
        }
        
        return ++this.size;
    }

    // Like shift()
    dequeue(){
        if(this.length === 0) return undefined;
        if(this.first === this.last) this.last = null;
        
        let newFirst = this.first.next;
        let oldfirst = this.first;
        this.first = newFirst;
        oldfirst.next = null;
        this.size--;
        return oldfirst;
    }

    print(){
        let arr = [];
        let cur = this.first;
        while(cur){
            arr.push(cur.value);
            cur = cur.next;
        }
        return arr;
    }
}


let queue = new Queue();

// Enqueue()
console.log(queue.enqueue('test 1'));
console.log(queue.enqueue('test 2'));
console.log(queue.enqueue('test 3'));
console.log(queue.enqueue('test 4'));
console.log(queue.enqueue('test 5'));
console.log(queue);
console.log(queue.print());

// Dequeue()
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue);
console.log(queue.print());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue);
console.log(queue.print());
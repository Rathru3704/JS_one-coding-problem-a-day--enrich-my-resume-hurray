class Node{
    constructor(val){
        this.value = val;
        this.next = null;
    }
}

class Stack{
    constructor(){
        this.firstOut = null;
        this.lastOut = null;
        this.size = 0;
    }

    // push() and pop() here are equal to unshift() and shift() in normal singly linked list because they will only spend constant time (i.e., O(1))
    push(val){
        let newNode = new Node(val);
        if(this.size === 0){
            this.firstOut = newNode;
            this.lastOut = this.firstOut;
        } else{
            let oldFirstOut = this.firstOut;
            this.firstOut = newNode;
            newNode.next = oldFirstOut;
        }
        return ++this.size;
    }

    // Like shift() in singly linked list
    pop(){
        if(!this.firstOut) return undefined;

        if(this.firstOut === this.lastOut) this.lastOut = null;

        let rmNode = this.firstOut;
        this.firstOut = this.firstOut.next;
        // rmNode.next = null;
        this.size--;
        return rmNode.value;
    }

    print(){
        let arr = [];
        let cur = this.firstOut;
        while(cur){
            arr.push(cur.value);
            cur = cur.next;
        }
        return arr;
    }
}


let newStack = new Stack();

// push()
console.log(newStack.push('test1'));
console.log(newStack.push('test2'));
console.log(newStack.push('test3'));
console.log(newStack.push('test4'));
console.log(newStack.push('test5'));
console.log(newStack);
console.log(newStack.print());

// pop()
console.log(newStack.pop());
console.log(newStack.pop());
console.log(newStack);
console.log(newStack.print());
console.log(newStack.pop());
console.log(newStack.pop());
console.log(newStack.pop());
console.log(newStack.print());
console.log(newStack.pop());
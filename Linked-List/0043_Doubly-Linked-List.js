// Doubly Linked List
// A data structure that contains a head, tail and length property
// Linked lists consist of nodes, and each node has a value and two pointers (previous and next) to another node or null


class Node{
    constructor(val){
        this.val = val;
        this.prev = null;
        this.next = null;
    }
}

class DoublyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    // Adding a node to the end of the doubly linked list
    push(val){
        let newNode = new Node(val);
        if(!this.head){
            this.head = newNode;
            this.tail = this.head;
        }
        else{
            let oldTail = this.tail;
            oldTail.next = newNode;
            this.tail = newNode;
            this.tail.prev = oldTail;
            // OR
            // this.tail.next = newNode;
            // newNode.prev = this.tail;
            // this.tail = newNode;
        }
        this.length++;
        return this;
    }

    // Removing a node from the end of the doubly linked list
    // It is easier than singly linked list because of having previous pointers
    pop(){
        if(!this.head) return undefined;

        let oldTail = this.tail;
        if(this.length === 1){
            this.head = null;
            this.tail = null;
        }
        else{
            this.tail = oldTail.prev;
            this.tail.next = null;

            // ***** Be careful when doing pop(), the previous pointer remains data
            oldTail.prev = null;
        }
        this.length--;
        return oldTail;
    }

    // Adding a node to the beginning of the doubly linked list
    unshift(val){
        let newNode = new Node(val);

        if(this.length === 0){
            this.head = newNode;
            this.tail = this.head;
        }
        else{
            let oldHead = this.head;
            oldHead.prev = newNode;
            this.head = newNode;
            newNode.next = oldHead;
        }
        this.length++;
        return this;
    }

    // Removing a node from the beginning of the doubly linked list
    shift(){
        if(!this.head) return undefined;

        let oldHead = this.head;
        if(this.length === 1){
            this.head = null;
            this.tail = null;
        }
        else{
            this.head = oldHead.next;
            this.head.prev = null;
            oldHead.next = null;
        }
        this.length--;
        return oldHead;
    }

    // Accessing a node in a doubly linked list by its position
    get(idx){
        if(idx < 0 || idx >= this.length) return undefined;

        var cur = this.head;
        if(idx < Math.floor(this.length / 2)){
            for(let i=0; i < idx; i++){
                cur = cur.next;
            }
        }
        else{
            var cur = this.tail;
            for(let i = this.length - 1; i > idx; i--){
                cur = cur.prev;
            }
        }
        return cur;
        // OR
        // let count, cur;
        // if(idx <= this.length / 2){
        //     count = 0;
        //     cur = this.head;
        //     while(count !== idx){
        //         cur = cur.next;
        //         count++;
        //     }
        // }
        // else{
        //     count = this.length - 1;
        //     cur = this.tail;
        //     while(count !== idx){
        //         cur = cur.prev;
        //         count--;
        //     }
        // }
        // return cur;
    }

    // Changing the value of a node based on its position in the linked list
    set(val, idx){
        // Using get() to find specific node
        let cur = this.get(idx);
        if(cur !== undefined){
            return !!(cur.val = val);
        }
        return false;
    }

    // Adding a node in a doubly linked list by a certain position
    insert(val, idx){
        if(idx === 0) return !!this.unshift(val);
        if(idx === this.length) return !!this.push(val);
        
        let cur = this.get(idx);
        if(!cur) return false;

        let insNode = new Node(val);
        let pre = cur.prev;
        pre.next = insNode;
        insNode.prev = pre;
        insNode.next = cur;
        cur.prev = insNode;
        // OR
        // let newNode = new Node(val);
        // let beforeNode = this.get(idx - 1);
        // let afterNode = beforeNode.next;
        // beforeNode.next = newNode;
        // newNode.prev = beforeNode;
        // newNode.next = afterNode;
        // afterNode.prev = newNode;

        this.length++;
        return true;
    }

    // Removing a node in a doubly linked list by a certain position
    remove(idx){
        let cur = this.get(idx);
        if(!cur) return undefined;
        if(idx === 0) return this.shift();
        if(idx === this.length - 1) return this.pop();

        let prev = cur.prev, next = cur.next;
        prev.next = next;
        next.prev = prev;
        cur.next = null;
        cur.prev = null;

        this.length--;
        return cur;
    }

    // Reversing the doubly linked list
    reverse(){
        // Swap the head and tail
        let cur = this.head;
        let tail = this.tail;
        this.head = tail;
        this.tail = cur;
        

        let pre = null, nxt;
        for(let i = 0; i < this.length; i++){
            nxt = cur.next;
            cur.next = pre;
            
            pre = cur.prev;
            cur.prev = nxt;

            pre = cur;
            cur = nxt;
        }
        return this;
    }

    print(){
        let arr = [];
        let cur = this.head;
        while(cur){
            arr.push(cur.val);
            cur = cur.next;
        }
        console.log(arr);
    }
}


// ************************************* Test DoublyLinkedList Methods *************************************
let doublyLL = new DoublyLinkedList();

// push()
doublyLL.push('test0');
doublyLL.push('test1');
console.log(doublyLL);
console.log(doublyLL.push('test2'));
console.log(doublyLL.push('test3'));
console.log(doublyLL.push('test4'));
console.log(doublyLL.push('test5'));
console.log(doublyLL.push('test6'));
console.log(doublyLL.push('test7'));
console.log(doublyLL.push('test8'));
console.log(doublyLL.push('test9'));
console.log(doublyLL.push('test10'));
doublyLL.print();

// pop()
console.log(doublyLL.pop());
console.log(doublyLL.pop());
console.log(doublyLL);
doublyLL.print();

// shift()
console.log(doublyLL.shift());
console.log(doublyLL.shift());
console.log(doublyLL);
doublyLL.print();

// unshift()
console.log(doublyLL.unshift('test1 again'));
console.log(doublyLL.unshift('test0 again'));
console.log(doublyLL);
doublyLL.print();

// get()
console.log(doublyLL.get(0));
console.log(doublyLL.get(8));
console.log(doublyLL.get(3));
console.log(doublyLL.get(4));
console.log(doublyLL.get(6));
console.log(doublyLL.get(-1));
console.log(doublyLL.get(10));
console.log(doublyLL);
doublyLL.print();

// set()
console.log(doublyLL.set('test3 again', 3));
console.log(doublyLL.set('test3 again', -5));
console.log(doublyLL.set('test3 again', 10));
doublyLL.print();

// insert()
console.log(doublyLL.insert('test2-1', 3));
doublyLL.print();
console.log(doublyLL.insert('test0-0', 0));
doublyLL.print();
console.log(doublyLL.insert('test9', 11));
doublyLL.print();
console.log(doublyLL.insert('test9', 18));
console.log(doublyLL);
doublyLL.print();
console.log(doublyLL.insert('test1-1', 3));
console.log(doublyLL);
doublyLL.print();

// remove()
console.log(doublyLL.remove(0));
console.log(doublyLL.remove(11));
doublyLL.print();
console.log(doublyLL.remove(2));
console.log(doublyLL.remove(3));
doublyLL.print();

// reverse()
console.log(doublyLL.reverse());
doublyLL.print();
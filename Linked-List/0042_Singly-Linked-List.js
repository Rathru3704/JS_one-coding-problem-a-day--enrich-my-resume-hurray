// Singly Linked List
// A data structure that contains a head, tail and length property
// Linked lists consist of nodes, and each node has a value and a pointer to another node or null


class Node{
    constructor(value){
        this.value = value;
        this.next = null;  // A pointer
        // "this" refers to the individual instance
    }
}

class SinglyLinkedList{
    // head, tail and length
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    // Add a new node to the end of the linked list
    push(val){
        let newNode = new Node(val);

        // If there is no head property on the list, set the head and tail to be the newly created node
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;  // this.tail = this.head;
        }
        // Otherwise, set the next property on the tail to be the new node and set the tail property on the list to be the newly created node
        else{
            this.tail.next = newNode;  // Noice!
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    // Removing a node from the end of the linked list
    pop(){
        // If there is no nodes in the list, return undefined
        if(!this.head) return undefined;

        // Loop through the list until reaching the tail
        let cur = this.head;
        let newTail = cur;

        while(cur.next){
            newTail = cur;
            cur = cur.next;
        }

        // Set the tail to be the second to last node
        this.tail = newTail;

        // Set the next property of the second to last node to be null
        newTail.next = null;

        // Decrement the length of the list by 1
        this.length--;

        // ***** If the list becomes empty...
        if(this.length === 0){
            this.head = null;
            this.tail = null;
        }
        return cur;
    }

    // Removing a new node from the beginning of the linked list
    shift(){
        // If there is no nodes in the list, return undefined
        if(!this.head) return undefined;

        let first = this.head;
        this.head = this.head.next;
        this.length--;

        if(this.length === 0){
            this.tail = null;
        }
        return first;
    }

    // Adding a new node to the beginning of the linked list
    unshift(val){
        let newHead = new Node(val);

        if(!this.head){
            this.head = newHead;
            this.tail = this.head;
        }
        else{
            let ori = this.head;
            newHead.next = ori;
            this.head = newHead;
            this.length++;
        }
        return this;
    }

    // Retrieving a node by it's position (index) in the linked list
    get(index){
        if(index < 0 || index >= this.length) return undefined;

        let cur = this.head;
        for(let i = 0; i < index; i++){
            cur = cur.next;
        }
        return cur;
    }

    // Changing the value of a node based on its position in the linked list
    set(val, idx){
        // Using get() to find specific node
        let target = this.get(idx);

        if(!target){
            return false;
        }

        target.value = val;
        return true;
    }

    // Adding a node to the linked list at a specific position
    insert(val, idx){
        if(idx < 0 || idx > this.length) return false;

        // If the index is 0, unshift a new code to the start of the linked list
        else if(idx === 0){
            return !!this.unshift(val);  // Noice! Instead of adding another line - return true;
        }

        // If the index is the same as the length, push a new code to the end of the linked list
        else if(idx === this.length){
            return !!this.push(val);
        }
        else{
            let pre = null;
            let cur = this.head;
            
            for(let i = 0; i < idx; i++){
                pre = cur;
                cur = cur.next;
            }
            let insertNode = new Node(val);
            pre.next = insertNode;
            insertNode.next = cur;
            // OR
            // let insertNode = new Node(val);
            // let pre = this.get(idx - 1);
            // let temp = pre.next;
            // pre.next = insertNode;
            // insertNode.next = temp;

            this.length++;
            return true;
        }
    }

    // Removing a node from the linked list at a specific position
    remove(idx){
        if(idx < 0 || idx >= this.length) return undefined;
        if(idx === 0) return this.shift();
        if(idx === this.length - 1) return this.pop();

        let preCode = this.get(idx - 1);

        let curCode = this.get(idx); 
        let nextCode = this.get(idx + 1);
        preCode.next = nextCode;
        // OR
        // let curCode = preCode.next;
        // preCode.next = curCode.next;

        this.length--;
        return curCode;
    }

    // Reversing the linked list IN PLACE - A classic interview question!
    reverse(){
        // Swap the head and tail
        let cur = this.head;
        let tail = this.tail;
        this.head = tail;
        this.tail = cur;
        
        let pre = null;
        let nxt;
        for(let i = 0; i < this.length; i++){
            nxt = cur.next;
            cur.next = pre;
            pre = cur;
            cur = nxt;
        }
        return this;
    }
}


// ************************************* Test SinglyLinkedList Methods *************************************
let singlyLL = new SinglyLinkedList();

// push()
singlyLL.push('test1');
singlyLL.push('test2');
console.log(singlyLL);
console.log(singlyLL.push('test3'));
console.log(singlyLL);

// pop()
console.log(singlyLL.pop());
console.log(singlyLL);
console.log(singlyLL.pop());
console.log(singlyLL.pop());
console.log(singlyLL);
console.log(singlyLL.pop());  // undefined

// push()
console.log(singlyLL.push('test1 back'));
console.log(singlyLL.push('test2 back'));
console.log(singlyLL.push('test3 back'));

// shift()
console.log(singlyLL.shift());
console.log(singlyLL);
singlyLL.shift();
singlyLL.shift();
console.log(singlyLL);
console.log(singlyLL.shift());  // undefined

// push()
console.log(singlyLL.push('test1 again'));
console.log(singlyLL.push('test2 again'));
console.log(singlyLL.push('test3 again'));

// unshift()
console.log(singlyLL.unshift('test 0'));

// get()
console.log(singlyLL.get(0));
console.log(singlyLL.get(2));
console.log(singlyLL.get(-1));  // undefined
console.log(singlyLL.get(16));  // undefined

// set()
console.log(singlyLL.set('t3', 3));
console.log(singlyLL.set('t3', 8));
console.log(singlyLL);

// insert()
console.log(singlyLL.insert('t1-1', 7));
console.log(singlyLL.insert('t1-1', 2));
console.log(singlyLL);
console.log(singlyLL.insert('t3-1', 5));
console.log(singlyLL);
console.log(singlyLL.insert('t0-0', 0));
console.log(singlyLL);

// remove()
console.log(singlyLL.remove(3));
console.log(singlyLL);

// reverse()
console.log(singlyLL.reverse());
console.log(singlyLL);
class Node{
    constructor(val){
        this.value = val;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree{
    constructor(){
        this.root = null;
    }

    insert(val){
        let newNode = new Node(val);

        if(!this.root) {
            this.root = newNode;
            return this;
        }

        let cur = this.root;
        while(cur){
            if(val === cur.value) return undefined;

            if(val > cur.value){
                if(cur.right){
                    cur = cur.right;
                } else{
                    cur.right = newNode;
                    return this;
                }
            }
            else{
                if(cur.left){
                    cur = cur.left;
                } else{
                    cur.left = newNode;
                    return this;
                }
            }
        }
    }

    find(val){
        if(!this.root) return undefined;

        let cur = this.root;
        let level = 0;
        let found = false;
        while(cur && !found){
            if(val === cur.value){
                level++;
                console.log(level);
                return found = true;
            } else if(val > cur.value){
                cur = cur.right;
                level++;
            }
            else{
                cur = cur.left;
                level++;
            }
        }
        console.log(level = 0);
        return found = false;
    }

    // Breadth-First Search
    bfs(){
        let queue = [];  // First in first out
        let data = [];

        if(!this.root) return null;
        
        let cur = this.root;
        queue.push(cur);

        while(queue.length){  // Noice!
            // Dequeue
            cur = queue.shift();
            
            data.push(cur.value);

            if(cur.left){
                queue.push(cur.left);
            }

            if(cur.right){
                queue.push(cur.right);
            }
        }

        return data;
    }

    // Depth-First Search - PreOrder: the root node is visited first, then the left subtree and finally the right subtree.
    dfs_preOrder(){  // ***** Noice! Using Helper Method Recursion
        if(!this.root) return null;
        
        let data = [];
        let cur = this.root;

        const traverse = (node) => {
            data.push(node.value);
            if(node.left) traverse(node.left);
            if(node.right) traverse(node.right);
        }
        traverse(cur);

        return data;
    }

    // Depth-first Search - Post Order: the root node is visited last. First we traverse the left subtree, then the right subtree and finally the root node.
    dfs_postOrder(){
        if(!this.root) return null;
        
        let data = [];
        let cur = this.root;

        const traverse = (node) =>{
            if(node.left) traverse(node.left);
            if(node.right) traverse(node.right);
            data.push(node.value);
        }
        traverse(cur);

        return data;
    }

    // Depth-first Search - In Order: the left subtree is visited first, then the root and later the right sub-tree.
    dfs_inOrder(){
        if(!this.root) return null;
        
        let data = [];
        let cur = this.root;

        const traverse = (node) =>{
            node.left && traverse(node.left);  // A trick that you do not have to use if condition
            data.push(node.value);
            node.right && traverse(node.right);
        }
        traverse(cur);

        return data;
    }
}

let bst = new BinarySearchTree;

// insert()
console.log(bst.insert(10));
console.log(bst.insert(5));
console.log(bst.insert(20));
console.log(bst.insert(15));
console.log(bst.insert(10));
console.log(bst.insert(7));
console.log(bst.insert(18));


// find()
console.log(bst.find(10));
console.log(bst.find(5));
console.log(bst.find(18));
console.log(bst.find(7));
console.log(bst.find(27));

// bfs()
console.log(bst.bfs());

// dfs_preOrder()
console.log(bst.dfs_preOrder());

// dfs_postOrder()
console.log(bst.dfs_postOrder());

// dfs_inOrder()
console.log(bst.dfs_inOrder());
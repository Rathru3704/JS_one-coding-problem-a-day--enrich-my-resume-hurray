//--------------------------------------------------------------- Create linked list l1 and l2
function ListNode(val) {
    this.val = val;
    this.next = null;
}

let l1 = new ListNode(1);

let l1_02 = new ListNode(2);
l1.next = l1_02;

let l1_03 = new ListNode(4);
l1_02.next = l1_03;

let l2 = new ListNode(1);

let l2_02 = new ListNode(3);
l2.next = l2_02;

let l2_03 = new ListNode(4);
l2_02.next = l2_03;
//--------------------------------------------------------------- Merge two linked list
var mergeTwoLists = function(l1, l2) {
    let list = new ListNode();
    let head = list;
    
    while(l1 != null && l2 != null){
        if(l1.val < l2.val){
            list.next = new ListNode(l1.val);
            l1 = l1.next;
        }
        else{
            list.next = new ListNode(l2.val);
            l2 = l2.next;
        }
        
        list = list.next
    }
    
    // It's possible that one linked list is shorter than the other, so we just add on the remainder of the last linked list.
    list.next = l1 || l2;
    
    // return .next because this first element in the linkedlist is empty
    return head.next;
};
//--------------------------------------------------------------- Linked list to array
let list = mergeTwoLists(l1, l2);

let arr = [list.val];
while(list.next !== null){
    list = list.next;
    arr.push(list.val);
}

console.log(arr);
// [1, 1, 2, 3, 4, 4]
/*
208 / 208 test cases passed.
Runtime: 68 ms
Memory Usage: 35.6 MB
*/
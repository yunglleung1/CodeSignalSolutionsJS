// Definition for singly-linked list:
// function ListNode(x) {
//   this.value = x;
//   this.next = null;
// }
//given a linked list l, return an array of their values reversed in groups of k
function reverseNodesInKGroups(l, k) {
    let values = getValues(l);
    let s = 0;
    let n = s + k;
    let e = values.length;
    let slice;
    let rSlice;
    let reversed = [];

    while(n <= e){
        slice = values.slice(s, n);
        rSlice = [];
        while(slice.length){
            rSlice.push(slice.pop())
        }
        reversed.push(...rSlice);
        s = n;
        n += k;
    }

    if(s < e){
       reversed.push(...values.slice(s, e));
    }
    return reversed;
}


function getValues(l){//returns an array of all values in linked list l
    let values = [];
    if(l){
        values.push(l.value);
        while(l.next){
            l = l.next;
            values.push(l.value);
        }
    }
    return values;
}

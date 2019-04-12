// Definition for singly-linked list:
// function ListNode(x) {
//   this.value = x;
//   this.next = null;
// }
//given linked list l, return an array of its values
//with the last n values moved to the front of the array
function rearrangeLastN(l, n) {
    let values = getValues(l);

    let length = values.length;
    let s = length - n;

    let slice = values.splice(s, length);
    let rearranged = slice.concat(values);

    return rearranged;
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

// Definition for singly-linked list:
// function ListNode(x) {
//   this.value = x;
//   this.next = null;
// }
//given singly linked list l & integer k, return array of values excluding k
function removeKFromList(l, k) {
    let list = [];

    let node = l;
    while(node){
        if(node["value"] !== k){
           list.push(node["value"]);
        }
        node = node["next"];
    }
    return list;
}

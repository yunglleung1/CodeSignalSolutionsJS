// Definition for singly-linked list:
// function ListNode(x) {
//   this.value = x;
//   this.next = null;
// }
//given linked list l, return true if list of values is a palindrome, else return false
function isListPalindrome(l) {

    let list = [];
    let node = l;

    while(node){
        list.push(node["value"]);
        node = node["next"];
    }

    let length = list.length
    if(length % 2 === 1){//odd
        let m = Math.floor(length / 2);
        for(let i = 0; i < m; i++){
            if(list[i] !== list[length - 1 - i]){
               return false;
            }
        }
    }

    if(length % 2 === 0){//even
        for(let i = 0; i < list.length; i++){
            if(list[i] !== list[length - 1 - i]){
               return false;
            }
        }
    }
    return true;
}

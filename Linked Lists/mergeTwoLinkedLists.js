// Definition for singly-linked list:
// function ListNode(x) {
//   this.value = x;
//   this.next = null;
// }
//given two linked lists (l1, l2), return a sorted array of their values
function mergeTwoLinkedLists(l1, l2) {

    let v1 = getDigits(l1);
    console.log(v1);

    let v2 = getDigits(l2);
    console.log(v2);

    if(v1 && v2){
        let mR = merge(v1, v2);
        return mR;
    } else if(v1 && !v2){
        return v1;
    } else if (!v1 && v2){
        return v2;
    } else{
        return [];
    }

}

function getDigits(n){//returns an array of all values for a given linked list
    if(n){
        let digits = [];
        digits.push(n.value);
        while(n.next){
            n = n.next;
            digits.push(n.value);
        }
        return digits;
    }
}

function merge(c1, c2){//merges two arrays
    let i = 0;
    let j = 0;
    let mR = [];

    while(i < c1.length && j < c2.length){
          if(c1[i] < c2[j]){
              mR.push(c1[i]);
              i++;
          } else{
              mR.push(c2[j]);
              j++;
          }
    }

    while(i < c1.length){
        mR.push(c1[i]);
        i++;
    }

    while(j < c2.length){
        mR.push(c2[j]);
        j++;
    }

    return mR;
}

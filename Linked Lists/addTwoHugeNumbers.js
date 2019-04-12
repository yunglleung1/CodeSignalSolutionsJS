// Definition for singly-linked list:
// function ListNode(x) {
//   this.value = x;
//   this.next = null;
// }
//given 2 sets of linked lists (a & b) representing 2 large numbers,
//return an array of their sum
function addTwoHugeNumbers(a, b) {

    let v1 = getDigits(a);
    let l1 = v1.length

    let v2 = getDigits(b);
    let l2  = v2.length;

    let maxDCU = getMaxDigitCount([...v1, ...v2]);
    let maxArrL = Math.max(l1, l2);

    let num1 = constructNumber(v1, maxArrL);
    let num2 = constructNumber(v2, maxArrL);

    let sum = getArrSum(num1, num2, maxDCU, maxArrL);
    return sum;
}

function getDigits(n){//returns all values from a linked list
    let digits = [];
    digits.push(n.value);
    while(n.next){
        n = n.next;
        digits.push(n.value);
    }
    return digits;
}

function getDigit(v, bTP){//returns a digit from a value
    let aV = Math.abs(v);
    let dP = Math.pow(10, bTP);
    let digits = Math.floor(aV / dP);
    return digits % 10;
}

function digitCount(v){//returns a count of the number of digits in a value
    if(v === 0){
        return 1;
    } else{
        let aV = Math.abs(v);
        let aDC = Math.floor(Math.log10(v));
        return aDC + 1;
    }
}

function getMaxDigitCount(c){//returns the highest digit count in a collection
    let maxDC = 0;
    while(c.length){
        maxDC = Math.max(maxDC, digitCount(c.shift()));
    }
    return maxDC;
}

function constructNumber(v, maxArrL){//returns a large number in the form of an array
    while(v.length < maxArrL){
       v.unshift(0);
    }
    return v;
}

function getArrSum(num1, num2, maxDCU, maxArrL){//returns the sum of two large numbers
    let sum = 0;
    let strSum = "";
    let sumDC;
    let extraD;
    let sumArr = [];
    for(let i = maxArrL - 1; i >= 0; i--){
        sum += num1[i] + num2[i];
        sumDC = digitCount(sum);

        if(sumDC > maxDCU){
            extraD = Math.floor(sum / Math.pow(10, maxDCU));

            for(let j = maxDCU - 1; j >= 0; j--){
                strSum += getDigit(sum, j)
            }
            sum = parseInt(strSum);
            strSum = "";

            sumArr.unshift(sum);
            sum = extraD;
        } else{
            sumArr.unshift(sum);
            sum = 0;
        }
    }
    if(sum > 0){
        sumArr.unshift(sum);
    }
    return sumArr;
}

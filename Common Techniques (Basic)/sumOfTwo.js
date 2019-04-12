//given two arrays (a & b) and a value (v),
//if a[i] + b[j] === v exists, return true, else return false
//edge cases: there can also be negative numbers, repeating values within an array
function sumOfTwo(a, b, v) {
    let uniqueValuesA = recordValues(a)[1];
    let recordB = recordValues(b)[0];

    //loops through uniqueValuesA to check if num2 exists in recordB
    for(let i = 0; i < uniqueValuesA.length; i++){
        let num1 = uniqueValuesA[i];
        let num2 = v - num1;
        if(recordB[num2]){
           return true;
        }
    }
    return false;
}

//returns array of unique values in the form of a hash & array
function recordValues(array){
  let record = {};
  let uniqueValues = [];
    array.forEach(num => {
      if(!record[num]){
        record[num] = num;
        uniqueValues.push(num);
      }
    })
    return [record, uniqueValues];
}

//given an arrays of 3 words (crypt) and an array of letters mapped to string digits (solution),
//i.e.: crypt = [word1, word2, word3] & solution = [['character1', 'digit1'], ['character2', 'digit2']]
//if word1 + word2 === word3, return true, else return false
function isCryptSolution(crypt, solution) {
    let stringNum = '';
    let number = 0;
    let numbers = [];
    let leadingZero = false;//i.e. of edge case: 054 + 091 = 145 is invalid

    let decoder = generateDecoder(solution);

    crypt.forEach(word => {//decodes each character of each word
        if(decoder[word[0]] === '0' && word.length > 1){//handles leading 0's problem
           leadingZero = true;
        }

        word.split('').forEach(char => {
            stringNum += decoder[char];
        })
        number = parseInt(stringNum);
        numbers.push(number);
        stringNum = '';
    })

    if(numbers[0] + numbers[1] === numbers[2] && !leadingZero){
       return true;
    } else{
        return false;
    }
}

function generateDecoder(solution){//dictionary for characters & corresponding stringed number
    let decoder = {};

    solution.forEach(decryptionArray => {
        decoder[decryptionArray[0]] = decryptionArray[1];
    })
    return decoder;
}

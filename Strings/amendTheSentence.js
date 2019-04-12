//given string sentence s, where each word's 1st letter is capitalized & no spaces between words
//return the sentence with every word in lowercase & a space between words
function amendTheSentence(s) {
    let arr = s.split("");
    let sentence = arr[0].toLowerCase();
    for(let i = 1; i < arr.length; i++){
        if(arr[i].toUpperCase() === arr[i]){//if uppercase
           sentence += " " + arr[i].toLowerCase();
        } else if(arr[i].toUpperCase() < arr[i]){//if lowercase
           sentence += arr[i];
        }
    }
    return sentence;
}

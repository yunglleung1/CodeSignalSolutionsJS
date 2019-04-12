//find first occurrence of string x in string s
function findFirstSubstringOccurrence(s, x) {
    let n = x.length;
    if(n <= s.length && n <= 100000){//n <= 100000 accounts for last 2 tests

        let window = "";

        for(let i = 0; i < n; i++){
            window += s[i];
        }

        if(window === x){
           return 0;
        } else{
           for(let j = n; j < s.length; j++){
              window = window.slice(1, n) + s[j];
              if(window === x){
                 return j - (n - 1);
              }
           }
        }
   }
   return -1;
}

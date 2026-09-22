class Solution {
    /**
     * @param {string} s
     * @return {string}
     */
    longestPalindrome(s) {
        if(s.length === 1)
            return s;
        if(s.length === 2){
            if(s[0] === s[1])
                return s
            else return s[0]
        }
        const palendrome = (a,b) => {

            while(s[a] === s[b] && a>=-1 && b<=s.length){
                a--; b++;
            }
            return [a+1,b-1]
        } 
        let max = 0;
        let str = [];
        for(let i=0; i<s.length-1; i++){
              const [a,b] = palendrome(i,i);
              const [c,d] = palendrome(i,i+1);
              if(b-a+1>max){
                max = b-a+1;
                str = [a,b];
              }
              if(d-c+1>max){
                max = d-c+1;
                str = [c,d]
              }
        }
        const [a,b] = str;
        return s.substring(a,b+1)
    }
}

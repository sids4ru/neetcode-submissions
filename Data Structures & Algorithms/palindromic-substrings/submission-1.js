class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    countSubstrings(s) {
        let count = 0
        const isPal = (i,j) => {
            let a = i; let b=j;
            let l = 0
            while(a>=0 && b<s.length && s[a] === s[b] ){
                l = (b-a+1);
                a--; b++;
                count++;
            }
            return l
        }
        let max = 0
        for(let i=0; i<s.length; i++){
            isPal(i,i);
            isPal(i,i+1);
        }
        return count;
    }
}

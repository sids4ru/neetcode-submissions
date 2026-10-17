class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let set = new Set();
        let l=0;
        let max = 0
        for(let i=0; i<s.length; i++){
            let curr = s[i];
            while(l<=i && set.has(curr)){
                set.delete(s[l]);
                l++;
            }
            set.add(curr);
            max = Math.max(max,i-l+1);
        }
        if(max === -Infinity)
            return -1;
        return max;
    }
}

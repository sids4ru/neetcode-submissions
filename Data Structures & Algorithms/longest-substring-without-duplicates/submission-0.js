class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let set = new Set();
        let p = 0;
        let max = 0;
        for(let i=0; i<s.length;i++){
            
            while(set.has(s[i])){
                set.delete(s[p]);
                p++;
            }
            set.add(s[i]);
            max = Math.max(i-p+1,max)
        }
        return max;
    }
}

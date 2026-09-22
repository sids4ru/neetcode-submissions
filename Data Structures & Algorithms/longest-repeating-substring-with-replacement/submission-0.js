class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let map = {};
        let max = 0;
        let l = 0;
        let maxLen = 0;
        for(let i=0; i<s.length; i++){
            if(!map[s[i]])
                map[s[i]] = 0;
            map[s[i]]++;
            if(map[s[max]<map[s[i]]]){
                max = i;
            }
            max = Math.max(map[s[i]],max);
            if(i-l+1-max-k>0){
                map[s[l]]--;
                l++;
            }
            maxLen = Math.max(maxLen,i-l+1);
        }
        return maxLen;
    }
}

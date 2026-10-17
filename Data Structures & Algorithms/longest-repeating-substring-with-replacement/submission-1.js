class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let map = {}
        let l = 0;
        let max = 0
        let len = 0
        for(let i=0; i<s.length; i++){
            let curr = s[i]
            if(!map[curr])
                map[curr] = 0;
            map[curr]++;
            max = Math.max(map[curr],max);
            while((i-l+1)-max>k){
                map[s[l]]--;
                l++
            }
            len = Math.max(len,i-l+1);
        }
        return len;
    }  
}

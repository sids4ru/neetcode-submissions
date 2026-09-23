class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    numDecodings(s) {
        const map = new Map([...'ABCDEFGHIJKLMNOPQRSTUVWXYZ'].map((char, index) => [String(index + 1), char]));
        let DP = new Array(s.length).fill(0);
        const dfs = (p)=>{
            if(p >= s.length){
                return 1;
            }

            if (s[p] === '0') return 0;
            if(DP[p]>0)
                return DP[p];
            let count = 0;
            if(map.has(s[p]))
                count += dfs(p+1);
            
            if(p + 1 < s.length && map.has(s.substring(p,p+2)))
                count += dfs(p+2);
            DP[p] = count;
            return count
        }
        return dfs(0);
    }
}

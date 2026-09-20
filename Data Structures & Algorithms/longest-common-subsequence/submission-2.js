class Solution {
    /**
     * @param {string} text1
     * @param {string} text2
     * @return {number}
     */
    longestCommonSubsequence(text1, text2) {
        let DP = {};
        const dfs = (p,q) =>{

            if(p===text1.length || q === text2.length){
                return 0;
            }
            const key = `${p}||${q}`
            if(DP[key])
                return DP[key];
            DP[key] = Math.max(dfs(p,q+1),dfs(p+1,q),dfs(p+1,q+1)+(text1[p] === text2[q]? 1 : 0))
            return DP[key];
        }
        return dfs(0,0,0);
        
    }
}

class Solution {
    /**
     * @param {string} s
     * @param {string[]} wordDict
     * @return {boolean}
     */
    wordBreak(s, wordDict) {
        let set = new Set();
        for(let i=0; i<wordDict.length;i++){
            set.add(wordDict[i]);
        }
        let DP = new Array(false)
        const dfs = (a) => {
            if(a >=s.length)
                return true;
            if(DP[a])
                return false;
            for(let i=a; i<s.length; i++){
                const sub = s.substring(a,i+1);
                if(!set.has(sub))
                    continue;
                if(dfs(i+1))
                    return true;
            }
            DP[a] = true;
            return false;
        }
        return dfs(0);
    }
}

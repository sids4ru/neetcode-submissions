class Solution {
    /**
     * @param {number} m
     * @param {number} n
     * @return {number}
     */
    uniquePaths(m, n) {
        let visited = new Array(m).fill(null).map(()=>Array(n).fill(false))
        let res = 0;
        let DP = {};
        const dfs = (r,c) => {
            if(r === (m-1) && c===(n-1)){
                //res++;
                return 1;
                return;
            }
            if(r>=m || c>=n)
                return 0;
            const key = `${r}||${c}`
            if(DP[key])
               return DP[key]; 
            visited[r][c] = true;
            let a = dfs(r+1,c)
            let b = dfs(r,c+1)
            visited[r][c] = false;
            DP[key] = a+b
            return a+b;
        }
        return dfs(0,0);
        // return res;
    }
}

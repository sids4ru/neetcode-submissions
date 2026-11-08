class Solution {
    /**
     * @param {number} n
     * @return {string[]}
     */
    generateParenthesis(n) {
        const N = 2*n;
        let res = [];
        const dfs = (open, close, path) =>{
            if((open + close) >= N){
                res.push(path.join(""))
            }
            if(open < n){
               path.push('(')
               dfs(open+1, close, path) 
               path.pop(); 
            }
            if(close < open){
                path.push(')')
                dfs(open, close+1, path) 
                path.pop(); 
            }
        }
        dfs(0, 0, [])
        return res;
    }
}

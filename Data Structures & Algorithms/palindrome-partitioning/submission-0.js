class Solution {
    /**
     * @param {string} s
     * @return {string[][]}
     */
    partition(s) {
        let res = [];
        const isPal = (l,r)=>{
            while (l<=r){
                if(s[l]!=s[r])
                    return false;
                l++; r--
            }
            return true;
        }
        
        const dfs = (pos,path) => {
            if(pos >= s.length){
                res.push([...path]);
                return
            }
            for(let i=pos; i<s.length; i++){
                if(isPal(pos,i)){
                    path.push(s.substring(pos,i+1))
                    dfs(i+1,path)
                    path.pop()
                }
            }
        }
        dfs(0,[]);
        return res;
    }
}

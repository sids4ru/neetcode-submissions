class Solution {
    /**
     * @param {number[]} candidates
     * @param {number} target
     * @return {number[][]}
     */
    combinationSum2(candidates, target) {
        let res = [];
        candidates = candidates.sort((a,b) => a-b)
        const dfs = (pos, target, path) => {
            if(target === 0){
                res.push([...path])
                return;
            }
            if(target < 0 || pos>=candidates.length ){
                return;
            }
            for(let i=pos+1; i<candidates.length; i++){
                if(i>pos+1 && candidates[i] === candidates[i-1])
                    continue;
                path.push(candidates[i])
                dfs (i, target-candidates[i], path)
                path.pop();
            }
        }
        dfs(-1, target, []);
        return res; 
    }
}

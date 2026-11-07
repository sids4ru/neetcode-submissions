class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    permute(nums) {
        let res = []
        let visited = new Array(nums.length).fill(false)
        const dfs = (path) => {
            if(path.length === nums.length){
                res.push([...path])
                return;
            } 
            for(let i=0; i<nums.length; i++){
                if(visited[i])
                    continue;
                visited[i] = true;
                path.push(nums[i])
                dfs(path)
                path.pop();
                visited[i] = false;
            }
        }
        dfs([]);
        return res;
    }
}

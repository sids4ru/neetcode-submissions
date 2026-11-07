class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums) {
        let res = [];
        const dfs = (pos, path) => {
            if(pos >= nums.length){
                res.push([...path]);
                return;
            }
            path.push(nums[pos])
            dfs(pos+1,path)
            path.pop()
            dfs(pos+1,path)
        }
        dfs(0,[])
        return res;
    }
}

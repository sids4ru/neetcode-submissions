class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums, target) {
        let res = []
        const dfs = (pos, target, path) => {
            if(target === 0){
                res.push([...path]);
                return;
            }
            if(target < 0)
                return;
            if(pos >= nums.length ){
                return;
            }
            path.push(nums[pos])
            dfs(pos, target-nums[pos], path);
            // dfs(pos+1, target-nums[pos], path);
            path.pop(nums[pos])
            dfs(pos+1, target, path);
        }
        dfs(0,target, []);
        return res;
    }
}

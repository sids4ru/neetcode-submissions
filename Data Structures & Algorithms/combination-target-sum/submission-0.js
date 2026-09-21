class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums, target) {
        let res = [];
        const dfs = (pos,target,path) => {
            if(pos>=nums.length || target<0)
                return;
            if(target === 0){
                res.push([...path])
                return;
            }
            path.push(nums[pos])
            //for(let i=pos; i<nums.length;i++){
            dfs(pos,target-nums[pos],path);
            path.pop();
            dfs(pos+1,target,path);
            //}
            
        }
        let path = []
        dfs(0,target,path)
        return res;
    }
}

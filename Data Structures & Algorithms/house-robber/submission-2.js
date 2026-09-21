class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        let max = -Infinity;
        let DP = new Array(nums.length).fill(-Infinity)
        const dfs = (i) => {
            if(DP[i]> -Infinity)
                return DP[i];
            let max = -Infinity;
            if(i>=nums.length){
                // max = Math.max(sum,max)
                return 0;
            }
            DP[i] = Math.max(dfs(i+1), dfs(i+2)+nums[i])
            return DP[i]
        }
        return dfs(0,0);
        
    }
}

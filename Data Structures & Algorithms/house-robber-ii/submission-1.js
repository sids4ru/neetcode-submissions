class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        if(nums.length === 1)
            return nums[0];
        let DP = new Array(nums.length).fill(-Infinity)
        const dfs = (i,j) => {
            if(i>j){
                return 0;
            }
            if(DP[i]> -Infinity)
                return DP[i];

            DP[i] = Math.max(dfs(i+1,j), dfs(i+2,j)+nums[i])
            return DP[i]
        }
        let res = dfs(0,nums.length-2);
        DP = new Array(nums.length).fill(-Infinity)
        res = Math.max(res,dfs(1,nums.length-1));
        return res;
    }
}

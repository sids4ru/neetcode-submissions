class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    lengthOfLIS(nums) {
        // Initialize DP with -1 to properly track uncalculated states
        let DP = new Array(nums.length).fill(-1);

        const dfs = (pos) => {
            if (pos >= nums.length) return 0;
            
            // Check if already computed (using -1 as the uncalculated flag)
            if (DP[pos] !== -1) return DP[pos];

            let max = 0;
            for (let i = pos + 1; i < nums.length; i++) {
                if (nums[i] > nums[pos]) {
                    max = Math.max(max, dfs(i) + 1);
                }
            }
            // Also consider skipping the current element
            // max = Math.max(max, dfs(pos + 1));

            DP[pos] = max;
            return max;
        };
       let globalMax = 0;
        
        // Try starting the LIS from every possible index
        for (let i = 0; i < nums.length; i++) {
            globalMax = Math.max(globalMax, dfs(i)+1);
        }

        return globalMax;
    }
}
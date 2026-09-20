class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxSubArray(nums) {
        let l=0; let r=0;
        let max = -Infinity;
        let sum = 0;
        for(let i=0; i<nums.length; i++){
            if(sum <0)
                sum = 0;
            sum+=nums[i];
            max = Math.max(sum,max);
        }
        return max;
    }
}

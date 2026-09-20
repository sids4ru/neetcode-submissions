class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    canJump(nums) {
        const n = nums.length-1;
        let maxReach = 0
        for(let i=0; i<=n; i++){
            if(maxReach>=n)
                return true;
            if(i>maxReach)
                return false;
            maxReach = Math.max(nums[i]+i,maxReach)
            
        }
        
    }
}

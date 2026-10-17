class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
     threeSum(nums) {
        nums = nums.sort((a,b)=>a-b)
        const bs = (l,r,target) => {
            while(l<=r){
                let m = Math.floor((l+r)/2);
                if(nums[m] === target){
                    return m; 
                }
                else if(nums[m]<target){
                    l = m+1
                }
                else r = m-1;
            }
            return -1;
        }
        let res = [];
        for(let i=0; i<nums.length; i++){
            if(i>0 && nums[i] === nums[i-1])
                continue;
            for(let j=i+1; j<nums.length; j++){
                if(j>i+1 && nums[j] === nums[j-1])
                    continue;
                let sum = nums[i] + nums[j];
                let m = bs(j+1,nums.length,-sum)
                if(m>=0){
                    res.push([nums[i],nums[j],nums[m]])
                }
            }
       
        }
        return res;
    }
}

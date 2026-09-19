class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        let res =[];
        nums = nums.sort((a,b)=>a-b);
        const twoSum = (l,target)=>{
            let i = l; let j = nums.length-1;

            while(i<j){
                let sum = nums[i] + nums[j]
                if (sum === target){
                    res.push([-target,nums[i],nums[j]]);
                    i++;j--;
                    while (i < j && nums[i] === nums[i - 1]) i++;
                    while (i < j && nums[j] === nums[j + 1]) j--;
                }
                else if(sum > target)
                    j--;
                else i++;
            }
        }
        for(let i=0; i<nums.length;i++){
            if(i>0 && nums[i] === nums[i-1])
                continue;
            twoSum(i+1,-nums[i]);
        }
        return res;
    }
}

class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
     longestConsecutive(nums) {
        let set = new Set();
        for(let i=0; i<nums.length; i++){
            set.add(nums[i])
        }
        let maxLen = 0;
        for(let i=0; i<nums.length; i++){
            let curr = nums[i];
            if(set.has(curr-1))
                continue;
            let len = 0;
            while(set.has(curr)){
                len++;
                curr++;
            }
            maxLen = Math.max(len,maxLen);
        }
        return maxLen;
    }
    }

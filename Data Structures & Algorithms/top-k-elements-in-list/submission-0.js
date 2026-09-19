class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let map = {};
        for(let i=0; i<nums.length;i++){
            if(!map[nums[i]])
                map[nums[i]]=0;
            map[nums[i]]++;
        }
        let arr = [];
        for(let i in map){
            arr.push([i,map[i]]);
        }
        arr = arr.sort((a,b)=>a[1]-b[1]);
        let res = [];
        for(let i=0; i<k; i++){
            res.push(arr.pop()[0]);
        }
        return res;
    }
}

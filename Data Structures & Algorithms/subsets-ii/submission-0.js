class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsetsWithDup(nums) {
        nums = nums.sort((a,b)=>a-b);
        let res = [];
        const dfs = (pos,path) => {
           
            for(let i=pos+1; i<=nums.length; i++){
                if(i >= nums.length)
                {
                    res.push([...path]);
                    continue;
                }
                if(i>pos+1 && nums[i] === nums[i-1])
                    continue;
                path.push(nums[i])
                dfs(i,path)
                path.pop()
            }
        }
        dfs(-1,[]);
        return res;
    }
}

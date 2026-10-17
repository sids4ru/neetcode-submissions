class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let l = 0; let r = heights.length-1;
        let max = -Infinity;
        while(l<r){
            max = Math.max(max, (r-l)*Math.min(heights[r],heights[l]));
            if(heights[l]<heights[r])
                l++;
            else
                r--;
        }
        return max
    }
}

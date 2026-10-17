class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
     trap(height) {
        const N = height.length;
        let left = new Array(N).fill(0);
        let right = new Array(N).fill(0);
        for(let i=1; i<N; i++){
           left[i] = Math.max(left[i-1],height[i-1])
        } 
        for(let i=N-2; i>=0; i--){
            right[i] = Math.max(right[i+1],height[i+1]);
        }
        let sum = 0;
        for(let i=0; i<N; i++){
            let curr = Math.min(left[i],right[i])-height[i];
            if(curr<0)
                curr = 0;
            sum += curr;
        }
        return sum;
    }
}

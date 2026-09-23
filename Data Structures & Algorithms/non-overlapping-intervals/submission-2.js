class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number}
     */
    eraseOverlapIntervals(intervals) {
        intervals = intervals.sort((a,b) => a[0] - b[0])
        let prevY = intervals[0][1];
        let count = 0;
        for(let i=1; i<intervals.length; i++){
            const [x,y] = intervals[i];
            if(x<prevY){ 
                count++
                prevY = Math.min(prevY,y);
            }
            else{
                prevY = intervals[i][1]
            }

        }
        return count;
    }
}

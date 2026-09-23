/**
 * Definition of Interval:
 * class Interval {
 *   constructor(start, end) {
 *     this.start = start;
 *     this.end = end;
 *   }
 * }
 */

class Solution {
    /**
     * @param {Interval[]} intervals
     * @returns {number}
     */
    minMeetingRooms(intervals) {
        intervals = intervals.sort((a,b) => a.start - b.start);
        let Y = [];
        for(let i=0; i<intervals.length;i++){
            Y.push(intervals[i].end)
        }
        Y = Y.sort((a,b) => a-b);
        let count = 0;
        let y = 0;
        for(let i=0; i<intervals.length;i++){
            let curr = intervals[i];
            if(curr.start < Y[y]){
                count ++;
            }    
            else{
                y++;
            }
        }
        return count;
    }
}

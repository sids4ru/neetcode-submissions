class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number[][]}
     */
    merge(intervals) {
        intervals = intervals.sort((a,b)=>a[0]-b[0])
        let [a,b] = intervals[0];
        let res = [];
        for(let i=0; i<intervals.length; i++){
            let [x,y] = intervals[i];
            if(x>b || y<a){
                res.push([a,b]);
                [a,b] = [x,y];
                continue;
            }
            a=Math.min(x,a);
            b=Math.max(y,b);
        }
        res.push([a,b])
        return res;
    }
}

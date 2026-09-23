class Solution {
    /**
     * @param {number[][]} intervals
     * @param {number[]} newInterval
     * @return {number[][]}
     */
    insert(intervals, newInterval) {
        let res = [];
        let [a,b] = newInterval;
        for(let i=0; i<intervals.length; i++){
            let [x,y] = intervals[i];
            if(y<a){
                res.push([x,y]);
                continue;
            }
            if(x>b){
                if(a!=Infinity){
                    res.push([a,b]);
                    a=Infinity;
                }
                res.push([x,y]);
                
                continue;
            }
            a = Math.min(a,x);
            b = Math.max(y,b);
            
        }
        if(a!=Infinity){
            res.push([a,b]);
        }
        return res;
    }

}

class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
 twoSum(numbers, target) {
        const bs = (l,r, target) =>{
            while(l<=r){
                const m = Math.floor((l+r)/2);
                if(numbers[m] === target)
                    return m;
                else if(numbers[m] < target)
                    l = m+1;
                else r = m-1;
                
            }
            return -1;
        }
        for(let i=0; i<numbers.length; i++){
            
            let s = bs(i+1,numbers.length,target - numbers[i])
            if(s>=0){
                return [i+1,s+1]
            }
        }
        return [];
    }
}

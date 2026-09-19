class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let map = {};
        for(let i=0; i<strs.length; i++){
            let s = strs[i].split('');
            s = s.sort((a,b)=>a.localeCompare(b));
            s = s.join('');
            if(!map[s])
                map[s]=[];
            map[s].push(strs[i])
        }
        let res = [];
        for(let key in map){
            res.push(map[key]);
        }
        return res;
    }
}

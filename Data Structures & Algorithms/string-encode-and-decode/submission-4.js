class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        if(strs.length === 0)
            return("nothing")
        return strs.join("||")
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        if(str === "nothing")
            return [];
        let res = str.split("||")
        if (res.length === 0)
            return [""];
        return res;
    }
}

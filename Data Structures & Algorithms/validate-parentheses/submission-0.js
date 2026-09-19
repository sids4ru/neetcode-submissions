class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let map = {
            "(":")",
            "{":"}",
            "[":"]"
        }
        let stack = [];
        for(let i=0; i<s.length;i++){
            let curr = s[i];
            if(s[i] === "(" || s[i] === "{" || s[i] === "["){
                stack.push(s[i]);
            }else{
                let r = stack.pop();
                if(map[r] === s[i])
                    continue;
                else return false;
            }
        }
        if(stack.length === 0)
            return true;
        return false 
    }
}

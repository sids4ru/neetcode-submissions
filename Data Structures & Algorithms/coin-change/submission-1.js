class Solution {
    /**
     * @param {number[]} coins
     * @param {number} amount
     * @return {number}
     */
    coinChange(coins, amount) {
        let DP = {}
        const dfs = (pos,amount) =>{
            if(amount === 0){
                return 0;
            }
            if(amount < 0){
                return Infinity;
            }
            if(pos>=coins.length){
                return Infinity;
            }
            let key = `${pos}||${amount}`;
            if(DP[key])
                return DP[key];
            let min = Infinity;
            min = Math.min(dfs(pos,amount-coins[pos])+1,min);
            min = Math.min(dfs(pos+1,amount),min)
            DP[key] = min;
            return min;
        }
        let res = dfs(0,amount);
        if(res >= Infinity)
            res = -1;
        return res;
    }
}

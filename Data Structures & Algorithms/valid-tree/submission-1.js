class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {boolean}
     */
    validTree(n, edges) {
        
        let adj = new Array(n).fill(null).map(()=>[]);
        let count = 0;
        for(let i=0; i<edges.length; i++){
            const [a,b] = edges[i];
            adj[a].push(b);
            adj[b].push(a);
        }
        let visited = new Set();

        const dfs = (node,prev)=>{
            visited.add(node);
            count ++;
            for(let i=0; i<adj[node].length;i++){
                const curr = adj[node][i]
                if(curr === prev)
                    continue;
                if(visited.has(curr))
                    return false;
                if(!dfs(curr,node))
                    return false;
                
            }
            return true;
        }
        if(!dfs(0,Infinity))
            return false;
        if(count === n)
            return true;
        return false;
    }
}

class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {number}
     */
    countComponents(n, edges) {
        let visited = new Array(5).fill(false);
        const adj = {};
        for(let i=0; i<edges.length; i++){
            const [a,b] = edges[i];
            if(!adj[a])
                adj[a] = [];
            if(!adj[b])
                adj[b]=[];
            adj[a].push(b);
            adj[b].push(a);
        }
        const dfs = (a) => {
            if(!adj[a])
                return;
            visited[a] = true;
            for(let i=0; i<adj[a].length; i++){
                const curr = adj[a][i];
                if(visited[curr])
                    continue;
                dfs(curr);
            }
        }

        let count = 0;
        for(let i=0; i<n; i++){
            if(visited[i])
                continue;
            count ++;
            dfs(i)
        }
        return count;
    }
}

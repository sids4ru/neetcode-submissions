class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {number}
     */
    countComponents(n, edges) {
        let adj = {};
        for(let i=0; i<edges.length;i++){
            const [a,b] = edges[i];
            if(!adj[a])
                adj[a] = [];
            if(!adj[b])
                adj[b] = [];
            adj[a].push(b);
            adj[b].push(a); 
        }
        let visited = new Array(n).fill(false)
        const dfs = (n)=>{
            visited[n] = true;
            if(!adj[n])
                return;
            let nodes = adj[n];
            for(let i=0; i<nodes.length; i++){
                const curr = nodes[i]
                if(visited[curr])
                    continue;
                dfs(curr);
            }
        }
        let count = 0;
        for(let i=0; i<n; i++){
            if(visited[i])
                continue;
            dfs(i);
            count++;
        }
        return count;
    }
}

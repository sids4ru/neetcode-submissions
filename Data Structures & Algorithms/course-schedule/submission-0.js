class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {boolean}
     */
    canFinish(numCourses, prerequisites) {
        let visited = new Array(numCourses).fill(0);
        let adj = {};
        for(let i=0; i<prerequisites.length; i++){
            const [b,a] = prerequisites[i];
            if(!adj[a])
                adj[a] = [];
            adj[a].push(b);
        }
        const dfs = (pos)=>{
            if(visited[pos] === 1)
                return false;
            visited[pos] = 1;
            let arr = adj[pos];
            if(!arr || arr.length === 0){
                visited[pos] = 2;
                return true;
            }
            for(let i=0; i<arr.length; i++){
                const curr = arr[i];
                if(visited[curr] === 2)
                    continue;
                if(visited[curr] === 1)
                    return false;
                if(!dfs(arr[i]))
                    return false;
            }
            visited[pos] = 2;
            return true;
        }
        for(let i=0; i<numCourses; i++){
            if(visited[i]>0)
                continue;
            if(!dfs(i))
                return false;
        }
        for(let i=0; i<numCourses; i++){
            if(!visited[i])
                return false;
        }
        return true;
    }
}

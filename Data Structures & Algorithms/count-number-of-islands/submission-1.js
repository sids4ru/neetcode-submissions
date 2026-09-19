class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    
    numIslands(grid) {
        const R = grid.length;
        const C = grid[0].length;
        let visited = new Array(R).fill(false).map(()=>(Array(C).fill(false)));
        let dirs = [[1,0],[0,1],[-1,0],[0,-1]]
        let count = 0;
        const dfs = (r,c,visited)=>{
            if(visited[r][c])
                return;
            visited[r][c] = true;
            for(let i=0; i<4; i++){
                const row = r+dirs[i][0];
                const col = c+dirs[i][1];
                if(row<0||col<0||row>=R||col>=C)
                    continue;
                if(visited[row][col])
                    continue;
                if(grid[row][col] === "0")
                    continue;
                dfs(row,col,visited);
            }
        }
        for(let r=0;r<R;r++){
            for (let c=0;c<C;c++){
                if(!visited[r][c]&&grid[r][c] === "1"){
                    count++;
                    dfs(r,c,visited);
                }
            }
        }
        
        return count;
        }
        

    }


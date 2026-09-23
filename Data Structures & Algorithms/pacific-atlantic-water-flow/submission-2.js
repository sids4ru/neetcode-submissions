class Solution {
    /**
     * @param {number[][]} heights
     * @return {number[][]}
     */
    pacificAtlantic(heights) {
        const R = heights.length;
        const C = heights[0].length;
        let pacific = new Array(R).fill(null).map(()=>Array(C).fill(false));
        let atlantic = new Array(R).fill(null).map(()=>Array(C).fill(false));
        const dirs = [[0,1],[0,-1],[1,0],[-1,0]]
        let dfs = (r,c,visited) =>{
            visited[r][c] = true;
            for(let i=0; i<4;i++){
                const row = r+dirs[i][0];
                const col = c+dirs[i][1];
                if(row<0||row>=R||col<0||col>=C)
                    continue;
                if(visited[row][col])
                    continue;
                if(heights[row][col] < heights[r][c])
                    continue;
                dfs(row,col,visited);
            }
        }
        for(let c=0;c<C;c++){
            dfs(0,c,pacific);
            dfs(R-1,c,atlantic);
        }
        for(let r=0;r<R;r++){
            dfs(r,0,pacific);
            dfs(r,C-1,atlantic);
        }
        let res = [];
        for(let r=0; r<R;r++){
            for (let c=0; c<C;c++){
                if(pacific[r][c] && atlantic[r][c])
                    res.push([r,c])
            }
        }
        return res;
    }
}

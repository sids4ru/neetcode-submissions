class Solution {
    /**
     * @param {character[][]} board
     * @param {string} word
     * @return {boolean}
     */
    exist(board, word) {
        const dirs = [[1,0],[-1,0],[0,1],[0,-1]]
        const R = board.length;
        const C = board[0].length;
        let visited = new Array(R).fill(null).map(()=>new Array(C).fill(false));
        const dfs = (r,c,pos)=>{
            if(pos===word.length-1)
                return true;
            visited[r][c] = true;
            for(let i=0; i<4; i++){
                const row = r+dirs[i][0];
                const col = c+dirs[i][1];
                if(row<0||row>=R||col<0||col>=C)
                    continue;
                if(visited[row][col])
                    continue;
                if(board[row][col]!=word[pos+1])
                    continue;
                if(dfs(row,col,pos+1) )
                    return true;
            }
            visited[r][c] = false;
            return false;
        }
        for(let r=0; r<R; r++){
            for(let c=0; c<C; c++){
                if(board[r][c]===word[0]){
                    if(dfs(r,c,0))
                        return true;
                }
            }
        }
        return false;
    }
}

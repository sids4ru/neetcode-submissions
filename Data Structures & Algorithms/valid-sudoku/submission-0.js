class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
            isValidSudoku(board) {
        const row = (r) => {
            let set = new Set()
            for(let i=0; i<9; i++){
                if(board[r][i] === ".")
                    continue;
                let num = parseInt(board[r][i])
                if(set.has(num))
                    return false;
                set.add(num);
            }
            return true;
        }
        const col = (c) => {
            let set = new Set()
            for(let i=0; i<9; i++){
                if(board[i][c] === ".")
                    continue;
                
                let num = parseInt(board[i][c])
                if(set.has(num))
                    return false;
                set.add(num);
            }
            return true
        }
        const block = (r,c) => {
            let set = new Set()
            for(let row = r; row<r+3; row++){
                for(let col = c; col < c+3; col++){
                    if(board[row][col] === ".")
                    continue;
                
                    let num = parseInt(board[row][col])
                if(set.has(num))
                    return false;
                set.add(num);
                }
            }
            return true
        }
        for(let r=0; r<9; r++){
            if(!row(r))
                return false;
        }
        for(let c=0; c<9;c++){
            if(!col(c))
                return false;
        }
        for(let r=0; r<9; r+=3){
            for(let c=0; c<9; c+=3){
                if(!block(r,c)){
                    return false
                }
            }
        }
        return true;
    }
    
}

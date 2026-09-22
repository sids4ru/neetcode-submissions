class Solution {
    /**
     * @param {character[][]} board
     * @param {string} word
     * @return {boolean}
     */
    exist(board, word) {
        const dirs = [[1,0],[-1,0],[0,1],[0,-1]];
        const R = board.length;
        const C = board[0].length;
        let visited = new Array(R).fill(null).map(() => Array(C).fill(false));

        const dfs = (r, c, pos) => {
            // 1. Check if we have successfully matched the entire word first!
            if (pos === word.length)
                return true;

            // 2. Check bounds
            if (r < 0 || r >= R || c < 0 || c >= C)
                return false;

            // 3. Check if already visited or doesn't match the current character
            if (visited[r][c] || board[r][c] !== word[pos])
                return false;

            visited[r][c] = true;

            for (let i = 0; i < dirs.length; i++) {
                const row = r + dirs[i][0];
                const col = c + dirs[i][1];
                if (dfs(row, col, pos + 1))
                    return true;
            }

            visited[r][c] = false;
            return false;
        }

        for (let r = 0; r < R; r++) {
            for (let c = 0; c < C; c++) {
                if (dfs(r, c, 0))
                    return true;
            }
        }
        return false;
    }
}

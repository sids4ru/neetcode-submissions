/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {number[][]}
     */
    levelOrder(root) {
        if (!root)
            return [];
        let map = {}
        let levels = 0;
        const recurse = (root, level) => {
            if(!root)
                return;
            if(!map[level])
                map[level] = [];
            map[level].push(root.val);
            levels = Math.max(levels,level);
            recurse(root.left,level+1)
            recurse(root.right,level+1)
        }
        recurse(root,0);
        let res = [];
        for(let i=0; i<=levels;i++){
            res.push(map[i])
        }
        return res;
    }
}

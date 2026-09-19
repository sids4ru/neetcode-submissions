/**
 * // Definition for a Node.
 * class Node {
 *     constructor(val = 0, neighbors = []) {
 *       this.val = val;
 *       this.neighbors = neighbors;
 *     }
 * }
 */

class Solution {
    /**
     * @param {Node} node
     * @return {Node}
     */
    cloneGraph(node) {
        let visited = new Map;
        const dfs = (node) =>{
            if(!node)
                return null;
            if(visited.has (node))
                return visited.get(node);
                
            let clone = new Node(node.val);
            visited.set(node,clone);

            for(let i=0; i< node.neighbors.length; i++){
                clone.neighbors.push(dfs(node.neighbors[i]))
            }
            
            return clone;
        }
        return dfs(node);
    }
}

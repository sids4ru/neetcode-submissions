class Node {
        map = {};
        val = null;
        isEnd = false;
        constructor(val){
            this.val = val;
        }
    }
class PrefixTree {

    root = new Node();
    constructor() {
       
    }

    /**
     * @param {string} word
     * @return {void}
     */
    insert(word) {
        const traverse = (pos,root) => {
            if(!root)
                return;
            if(pos>=word.length){
                root.isEnd = true;
                return;
            }
            const curr = word[pos];

            if(!root.map[curr]){
                let node = new Node(curr);
                root.map[curr] = node;
            }

            traverse(pos+1,root.map[curr]);
        }
        traverse(0,this.root);
    }

    /**
     * @param {string} word
     * @return {boolean}
     */
    search(word) {
        const traverse = (pos,root) =>{
            if(!root)
                return false;  
            if(pos >= word.length)
                 return root.isEnd;;
            const curr = word[pos];
 
            return traverse(pos+1, root.map[curr])
        }
        return traverse(0,this.root);
    }

    /**
     * @param {string} prefix
     * @return {boolean}
     */
    startsWith(prefix) {
            const traverse = (pos,root) =>{
            if(!root)
                return false;    
            if(pos >= prefix.length)
                return true;
            const curr = prefix[pos];       
            return traverse(pos+1, root.map[curr])
        }
        return traverse(0,this.root);
    }
}

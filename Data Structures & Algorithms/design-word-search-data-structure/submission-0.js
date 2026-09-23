class Node {
    val=null;
    map = {};
    isEnd = false;
    constructor (val){
        this.val = val;
    }
}
class WordDictionary {
    root = new Node;
    constructor() {}

    /**
     * @param {string} word
     * @return {void}
     */
    addWord(word) {
        const insert = (pos, root) => {
            if(!root)
                return;
            if(pos>=word.length){
                root.isEnd = true;
                return
            }
            const curr = word[pos];
            if(!root.map[curr])
            {
                root.map[curr] = new Node(curr);
            }
            insert(pos+1,root.map[curr])
        }
        insert(0,this.root)
    }

    /**
     * @param {string} word
     * @return {boolean}
     */
    search(word) {
        const dfs = (pos, root) => {
            if(!root)
                return false;
            if(pos>=word.length)
                return root.isEnd;
            const curr = word[pos];
            if(curr === "."){
                for(let key in root.map){
                    if(dfs(pos+1,root.map[key]))
                        return true;
                }
            }
            else return dfs(pos+1,root.map[curr])
            return false
        }
        return dfs(0,this.root);
    }
}

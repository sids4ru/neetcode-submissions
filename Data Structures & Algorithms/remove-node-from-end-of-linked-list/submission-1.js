/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head, n) {
        if(head === null)
            return;
        let dummy = new ListNode(0,head)
        let count = 0;
        let p1 = head;
        while(count < n && p1){
            p1 = p1.next;
            count++
        }

        let p = dummy;
        while(p && p1){
            p = p.next;
            p1 = p1.next;
        }
 
            
        p.next = p.next.next
     
        return dummy.next;
    }
}

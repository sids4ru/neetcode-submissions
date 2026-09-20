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
     * @return {void}
     */
    reorderList(head) {
        let arr = [];
        let p = head;
        while (p!=null){
            arr.push(p);
            p = p.next;
        }
        console.log(arr.length);
        // return head;
        let dummy = new ListNode()
        p = dummy;
        let l = 0; let r = arr.length-1;
        while(l<r){
            p.next = arr[l];
            p = p.next;
            p.next = arr[r];
            l++;
            r--;
            p = p.next;
        }
        if (l === r) {
            p.next = arr[l];
            p = p.next;
        }
        p.next = null;
        return dummy.next;
    }
}

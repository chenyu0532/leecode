// 给定一个排序链表，删除所有重复的元素，使得每个元素只出现一次。

// 示例 1:
// 输入: 1->1->2
// 输出: 1->2

// 示例 2:
// 输入: 1->1->2->3->3
// 输出: 1->2->3
var deleteDuplicates = function(head) {
    if (head === null || head.next === null) {
    	return head;
    }
    let p1 = head;
    while(p1) {
    	let p2 = p1.next;
    	while(p2 && p1.val === p2.val) {
    		p2 = p2.next;
    	}
    	p1.next = p2;
    	p1 = p2;
    }
    return p1;
};

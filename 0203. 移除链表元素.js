// 删除链表中等于给定值 val 的所有节点。

// 示例:

// 输入: 1->2->6->3->4->5->6, val = 6
// 输出: 1->2->3->4->5

var removeElements = function(head, val) {
 	while(head && head.val === val) {
 		head = head.next;
 	}
 	if (!head) {
 		return head;
 	}
 	let p = head;
 	while(p.next) {
 		if (p.next.val === val) {
 			p.next = p.next.next;
 		} else {
 			p = p.next;
 		}
 	}
 	return head;

};


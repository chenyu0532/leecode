// 请判断一个链表是否为回文链表。

// 示例 1:

// 输入: 1->2
// 输出: false

// 示例 2:

// 输入: 1->2->2->1
// 输出: true

// 进阶：
// 你能否用 O(n) 时间复杂度和 O(1) 空间复杂度解决此题？

// 翻转链表
var reverseList = function(head) {
    let newHead = null;
    while(head) {
    	let next = head.next;
    	head.next = newHead;
    	newHead = head;
    	head = next;
    }
    return newHead;
};
var isPalindrome = function(head) {
	if (!head) return true;
	let p = head;
	let length = 0;
	while(p) {
		length++;
		p = p.next;
	}
	p = head; //
	if (length === 1) return true;
	let half = Math.floor((length + 1) / 2);
	let q = head;
	for(let i = 0; i < half; i++) {
		q = q.next;
	}
	q = reverseList(q);
	while(q && p) {
        if(p.val === q.val) {
            q = q.next;
            p = p.next;
        } else {
            return false;
        }
        
    }
    return true;
};


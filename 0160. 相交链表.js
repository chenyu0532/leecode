// 编写一个程序，找到两个单链表相交的起始节点。
// 如下面的两个链表：
// 在节点 c1 开始相交。


// 示例 1：
// 输入：intersectVal = 8, listA = [4,1,8,4,5], listB = [5,0,1,8,4,5], skipA = 2, skipB = 3
// 输出：Reference of the node with value = 8
// 输入解释：相交节点的值为 8 （注意，如果两个列表相交则不能为 0）。
// 从各自的表头开始算起，链表 A 为 [4,1,8,4,5]，链表 B 为 [5,0,1,8,4,5]。在 A 中，相交节点前有 2 个节点；
// 在 B 中，相交节点前有 3 个节点。
var getIntersectionNode = function(headA, headB) {
    let p1 = headA;
    let p2 = headB;
    let len1 = 0, len2 = 0;
    while(p1) {
    	p1 = p1.next;
    	len1++;
    }
    while(p2) {
    	p2 = p2.next;
    	len2++;
    }
    p1 = headA;
    p2 = headB;
    if (len1 > len2) {
    	for(let i = 0; i < len1 - len2; i++) {
    		p1 = p1.next;
    	}
    } else {
    	for(let i = 0; i < len2 - len1; i++) {
    		p2 = p2.next;
    	}
    }
    while(p1 != p2) {
    	p1 = p1.next;
    	p2 = p2.next;
    }
    return p1;
};



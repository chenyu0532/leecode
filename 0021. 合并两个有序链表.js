// 将两个有序链表合并为一个新的有序链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。 

// 示例：

// 输入：1->2->4, 1->3->4
// 输出：1->1->2->3->4->4
class linklistNode{
	constructor(value, next = null){
		this.value = value;
		this.next = next
	}
}
class linklist{
	constructor(){
		this.head = null; //头结点
		this.tail = null; //保持指向尾节点
	}
	//尾结点插入，也可以用作创建列表
	append(value){
		const newNode = new linklistNode(value);
		//length++;
		if(!this.head){
			this.head = newNode;
			this.tail = newNode;
			return this;
		}
		this.tail.next = newNode;
		this.tail = newNode;

		return this;
	}
	printList(){
		let current = this.head;
		while(current !==null)
		{
			console.log(current.value)
			current = current.next;
		}
	}
}
var mergeTwoLists = function(l1, l2) {
	if (l1 === null) return l2;
	if (l2 === null) return l1;
	let link3 = new linklist();
	let cur = link3;

	let cur1 = l1.head;
	let cur2 = l2.head;
	while(cur1 && cur2) {
		if (cur1.value <= cur2.value) {
			cur.append(cur1.value);
			cur1 = cur1.next;
		} else {
			cur.append(cur2.value);
			cur2 = cur2.next;
		}
	}
	if (cur1 === null) {
		while(cur2) {
			cur.append(cur2.value);
			cur2 = cur2.next;
		}
	}
	if (cur2 === null) {
		while(cur1) {
			cur.append(cur1.value);
			cur1 = cur1.next;
		}
	}
	cur.printList();
	return cur;
};
let link1 = new linklist();
link1.append(1);
link1.append(2);
link1.append(4);
link1.append(5);
link1.append(6);

let link2 = new linklist();
link2.append(1);
link2.append(3);
link2.append(4);

console.log(mergeTwoLists(link1, link2));

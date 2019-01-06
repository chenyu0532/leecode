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
	insert(position, value){
		const newNode = new linklistNode(value);
		if(position === 0){ //头结点插入
			newNode.next = this.head;
			this.head = newNode;
		}else{
			let index = 0;
			let previous;
			let current = this.head;
			while(index < position){
				previous = current;
				current = current.next;
				index++;
			}
			previous.next = newNode;
			newNode.next = current;
		}
		length++;
	}
}
var mergeTwoLists = function(l1, l2) {
    let list1 = new LinkList();
    let list2 = new LinkList();
    for(let i = 0; i < l1.length; i++){
    	list1.append(l1[i]);
    }

};
mergeTwoLists([1,2,4], [1,3,4]);

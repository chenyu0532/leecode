// 给定两个二叉树，编写一个函数来检验它们是否相同。
// 如果两个树在结构上相同，并且节点具有相同的值，则认为它们是相同的。

////////////前序遍历///////////////////
// var isSameTree = function(p, q) {
//     if (!p && !q) return true;
//     if (!p || !q) return false;
//     if (p.val === q.val) {
//     	return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
//     }
//     return false;
// };
var isSameTree = function(p, q) {
	let parr = [];
	let qarr = [];
	if(p){
		parr.push(p);
	}
	if(q){
		qarr.push(q);
	}
	while(parr.length > 0 && qarr.length > 0){
		let ptemp = parr.pop();
		let qtemp = qarr.pop();
		if (ptemp.val !== qtemp.val) return false;

		if (ptemp.left) {
			parr.push(ptemp.left);
		}
		if (qtemp.left) {
			qarr.push(qtemp.left);
		}
		if (parr.length !== qarr.length) {
			return false;
		}

		if (ptemp.right) {
			parr.push(ptemp.right);
		}
		if (qtemp.right) {
			qarr.push(qtemp.right);
		}
		if (parr.length !== qarr.length) {
			return false;
		}
	}
	return parr.length === qarr.length;
};


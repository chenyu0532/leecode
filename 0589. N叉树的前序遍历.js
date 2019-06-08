// 给定一个 N 叉树，返回其节点值的前序遍历。
/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */
/**
 * @param {Node} root
 * @return {number[]}
 */

 ////////////递归///////////////
// var preorder = function(root) {
// 	let res = [];
//     const helper = function(root) {
//     	if (!root) return;
//     	res.push(root.val);
//     	for(let child of root.children) {
//     		helper(child);
//     	}
//     }
//     helper(root);
//     return res
// };

///////////////非递归/////////////////
var preorder = function(root) {
	let res = []
	let list = []
	if (!root) return list;
	list.push(root);
	while(list.length > 0) {
		let node = list.pop();
		res.push(node.val);
		let len = node.children.length;
		for(let i = len - 1; i >= 0; i--) {
			list.push(node.children[i]);
		}
	}
	return res;
};



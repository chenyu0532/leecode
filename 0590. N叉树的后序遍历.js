// 给定一个 N 叉树，返回其节点值的后序遍历。

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
// var postorder = function(root) {
//     let res = [];
//     const helper = function(root) {
//     	if (!root) return;
//     	for(let i = 0; i < root.children.length - 1; i++) {
//     		res.push(root.children[i].val);
//     		helper(root.children[i]);
//     	}
//     	res.push(root.val);
//     }
//     helper(root);
//     return res
// };
var postorder = function(root) {
    let res = []
	let list = []
	if (!root) return list;
	list.push(root);
	while(list.length > 0) {
		let node = list.pop();
		res.unshift(node.val);
		if (node.children.length > 0) {
			for(let i = 0; i < node.children.length; i++) {
				list.push(node.children[i]);
			}
		}
	}
	return res;
};


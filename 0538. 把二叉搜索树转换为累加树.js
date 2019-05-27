// 给定一个二叉搜索树（Binary Search Tree），把它转换成为累加树（Greater Tree)，
// 使得每个节点的值是原来的节点值加上所有大于它的节点值之和。

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var convertBST = function(root) {
    let pre = 0;
    const convert = function(root) {
    	if (!root) return;
    	convert(root.right);
    	root.val += pre;
    	pre = root.val;
    	convert(root.left);
    }
    convert(root);
    return root;
};
// var convertBST = function(root) {
// 	if (!root) return;
// 	let arr = [];
// 	let pre = 0;
// 	let node = root;
// 	while(node || arr.length > 0) {
// 		while(node) {
// 			arr.push(node);
// 			node = node.right;
// 		}
// 		node = arr.pop();
// 		node.val += pre;
// 		pre = node.val;
// 		if (node.left) {
// 			node = node.left;
// 		} else {
// 			node = null;
// 		}
// 	}
// 	return root;
// };


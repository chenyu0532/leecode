// 给出一棵二叉树，其上每个结点的值都是 0 或 1 。每一条从根到叶的路径都代表一个从最高有效位开始的二进制数。
// 例如，如果路径为 0 -> 1 -> 1 -> 0 -> 1，那么它表示二进制数 01101，也就是 13 。

// 对树上的每一片叶子，我们都要找出从根到该叶子的路径所表示的数字。
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumRootToLeaf = function(root) {
    if(!root) return 0;
    return _sumRootToLeaf(root, 0);
};
var _sumRootToLeaf = function(root, num) {
	let sum = 0;
	num = (num << 1) + root.val;
	if (!root.left && !root.right) return num;
	if (root.left) {
		sum += _sumRootToLeaf(root.left, num);
	}
	if (root.right) {
		sum += _sumRootToLeaf(root.right, num);
	}
	return sum;
}





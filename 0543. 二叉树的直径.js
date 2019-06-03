// 给定一棵二叉树，你需要计算它的直径长度。一棵二叉树的直径长度是任意两个结点路径长度中的最大值。
// 这条路径可能穿过根结点。

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
var diameterOfBinaryTree = function(root) {
    let max = 0;
    const getMax = function(root) {
    	if (!root) return 0;
    	let l = getMax(root.left);
    	let r = getMax(root.right);
    	max = Math.max(max, l + r);
    	return Math.max(l, r) + 1;
    }
    getMax(root);
    return max;
};



// 给定一个所有节点为非负值的二叉搜索树，求树中任意两节点的差的绝对值的最小值。
// 注意: 树中至少有2个节点。
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
var getMinimumDifference = function(root) {
    let min = Number.MAX_VALUE;
    let pre = null;
    getMini = function(root) {
    	if (!root) return min;
    	getMini(root.left);
    	if (pre !== null) {
    		min = Math.min(min, root.val - pre);
    	}
    	pre = root.val;
    	getMini(root.right);

    }
 	getMini(root);
 	return min

};


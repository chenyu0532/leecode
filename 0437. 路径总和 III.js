// 给定一个二叉树，它的每个结点都存放着一个整数值。

// 找出路径和等于给定数值的路径总数。

// 路径不需要从根节点开始，也不需要在叶子节点结束，但是路径方向必须是向下的（只能从父节点到子节点）。

// 二叉树不超过1000个节点，且节点数值范围是 [-1000000,1000000] 的整数。
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number}
 */
var pathSum = function(root, sum) {
    if(!root) return 0;
    let sum1 = 0, sum2 = 0, sum3 = 0;
    sum1 = psum(root, sum);
    if (root.left) {
    	sum2 = pathSum(root.left, sum);
    }
    if (root.right) {
    	sum3 = pathSum(root.right, sum)
    }
    return sum1 + sum2 + sum3;
};
var psum = function(root, sum) {
    if (!root) return 0;
    let value = root.val;
    let temp = (sum === value? 1: 0);
    return temp + psum(root.left, sum - value) + psum(root.right, sum - value);
};

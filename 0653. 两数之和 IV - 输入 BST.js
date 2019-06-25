// 给定一个二叉搜索树和一个目标结果，如果 BST 中存在两个元素且它们的和等于给定的目标结果，则返回 true。

// 案例 1:
// 输入: 
//     5
//    / \
//   3   6
//  / \   \
// 2   4   7
// Target = 9
// 输出: True

// 案例 2:
// 输入: 
//     5
//    / \
//   3   6
//  / \   \
// 2   4   7
// Target = 28
// 输: False
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {boolean}
 */
var findTarget = function(root, k) {
    let set = new Set();
    return dfs(root, set, k);
};
var dfs = function(root, set, k) {
	if (!root) return false;
	if (set.has(k - root.val)) {
		return true;
	}
	set.add(root.val);
	return dfs(root.left, set, k) || dfs(root.right, set, k);
}



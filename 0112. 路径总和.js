// 给定一个二叉树和一个目标和，判断该树中是否存在根节点到叶子节点的路径，这条路径上所有节点值相加等于目标和。

// 说明: 叶子节点是指没有子节点的节点。

var hasPathSum = function(root, sum) {
    if (!root) return false;
    if (!root.left && !root.right) {
    	return sum - root.val === 0;
    }
    return hasPathSum(root.left, sum - root.val) || hasPathSum(root.right, sum - root.val)
};



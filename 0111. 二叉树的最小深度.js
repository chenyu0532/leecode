// 给定一个二叉树，找出其最小深度。

// 最小深度是从根节点到最近叶子节点的最短路径上的节点数量。

// 说明: 叶子节点是指没有子节点的节点。

var minDepth = function(root) {
    if(!root) return 0;
    let left = minDepth(root.left);
    let right = minDepth(root.right);
    return (left == 0 || right == 0)? left + right + 1: Math.min(left, right) + 1;
};


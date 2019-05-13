// 给定一个二叉树，返回所有从根节点到叶子节点的路径。

// 说明: 叶子节点是指没有子节点的节点

var binaryTreePaths = function(root) {
    let arr = [];
    if (!root) return arr;
    binaryTree(root, arr, '');
    return arr;
};
var binaryTree = function(root, arr, path) {
	if (!isLeafNode(root) && root) {
		path += (root.val + '->');
		binaryTree(root.left, arr, path);
		binaryTree(root.right, arr, path);
	} else if (isLeafNode(root) && root) {
		path += root.val;
		arr.push(path);
	}
};
var isLeafNode = function(root) {
	return root && !root.left && !root.right;
};


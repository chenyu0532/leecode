// 给定一个二叉树，判断它是否是高度平衡的二叉树。

// 本题中，一棵高度平衡二叉树定义为：

//     一个二叉树每个节点 的左右两个子树的高度差的绝对值不超过1。

var isBalanced = function(root) {
    return balance(root) !== -1;
};

var balance = function(root) {
	if (!root) {
		return 0;
	}
    let left = balance(root.left);
    console.log(left);
    let right = balance(root.right);
    if (left == -1 || right == -1 || Math.abs(left - right) >1) {
    	return -1;
    }
    return Math.max(left, right) + 1
};


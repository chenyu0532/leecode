// 计算给定二叉树的所有左叶子之和。



var sumOfLeftLeaves = function(root) {
    if (!root || (!root.left && !root.right)) return 0;
    let sum = 0;
   	if (root.left) {
   		if (!root.left.left && !root.left.right) {
   			sum += root.left.val;
   		} else {
   			sum += sumOfLeftLeaves(root.left);
   		}
   	}
   	if (root.right) {
   		sum += sumOfLeftLeaves(root.right);
   	}
 	return sum;
};




// 将一个按照升序排列的有序数组，转换为一棵高度平衡二叉搜索树。

// 本题中，一个高度平衡二叉树是指一个二叉树每个节点 的左右两个子树的高度差的绝对值不超过 1。
var sortedArrayToBST = function(nums) {
    if(nums.length === 0) return null;
    return sortedArray(nums, 0, nums.length - 1)
};
var sortedArray = function(nums, left, right) {
	if(left > right) return null;
    let mid = Math.floor((left + right) / 2);
    let newNode = new TreeNode(nums[mid]);
    newNode.left = sortedArray(nums, left, mid - 1);
    newNode.right = sortedArray(nums, mid + 1, right);
    return newNode;
};

// 给定一个二叉树，计算整个树的坡度。

// 一个树的节点的坡度定义即为，该节点左子树的结点之和和右子树结点之和的差的绝对值。空结点的的坡度是0。

// 整个树的坡度就是其所有节点的坡度之和。

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
var findTilt = function(root) {
    let result = 0;
    const getResult = function(root) {
    	console.log('111')
    	if (!root) return 0;
        console.log('222')
    	let left = getResult(root.left);
        console.log('left-->', left)
    	let right = getResult(root.right);
        console.log('right-->', right)
    	result += (Math.abs(left - right));
        console.log('result--->', result)
        console.log('fanhui--->', root.val)
    	return left + right + root.val;
    }
    getResult(root);
    return result;
};


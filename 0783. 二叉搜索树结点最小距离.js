// 给定一个二叉搜索树的根结点 root, 返回树中任意两节点的差的最小值。

// 示例：
// 输入: root = [4,2,6,1,3,null,null]
// 输出: 1
// 解释:
// 注意，root是树结点对象(TreeNode object)，而不是数组。

// 给定的树 [4,2,6,1,3,null,null] 可表示为下图:

//           4
//         /   \
//       2      6
//      / \    
//     1   3  

// 最小的差值是 1, 它是节点1和节点2的差值, 也是节点3和节点2的差值。

// 注意：

//     二叉树的大小范围在 2 到 100。
//     二叉树总是有效的，每个节点的值都是整数，且不重复。

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

 ///////////////中序遍历////////////
var minDiffInBST = function(root) {
	let cur = root, pre = null;
	let min = Infinity;
	let array = [];
	while(cur || array.length > 0) {
		if (cur) {
			array.push(cur);
			cur = cur.left;
		} else {
			cur = array.pop();
			if (pre) {
				min = Math.min(min, Math.abs(cur.val - pre.val));
			}
			pre = cur;
			cur = cur.right;
		}
		
	}
	return min;
	
};




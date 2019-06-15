// 给定一个非空二叉树, 返回一个由每层节点平均值组成的数组.

// 示例 1:
// 输入:
//     3
//    / \
//   9  20
//     /  \
//    15   7
// 输出: [3, 14.5, 11]
// 解释:
// 第0层的平均值是 3,  第1层是 14.5, 第2层是 11. 因此返回 [3, 14.5, 11].

// 注意：

//     节点值的范围在32位有符号整数范围内。

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var averageOfLevels = function(root) {
    if (!root) return [];
    let rrr = []
    let res = [];
    res.push(root)
    while(res.length > 0) {
    	let i = 0;
    	let sum = 0;
    	let len = res.length;
    	while(i < len) {
    		let node = res.shift();
    		sum += node.val;
    		if (node.left) {
    			res.push(node.left);
    		}
    		if (node.right) {
    			res.push(node.right);
    		}
    		i++;
    	}
    	rrr.push(sum / i);
    }
    return rrr;
};


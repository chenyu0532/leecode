// 给定一个 N 叉树，返回其节点值的层序遍历。 (即从左到右，逐层遍历)。

/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */
/**
 * @param {Node} root
 * @return {number[][]}
 */

var levelOrder = function(root) {
	let result = [];
    if (!root) return [];
    let arr = [];
    arr.push(root);
    while(arr.length > 0) {
    	let tempArr = [];
    	let len = arr.length;
    	for(let i = 0; i < len; i++) {
    		let node = arr.shift();
    		for(let n of node.children) {
    			arr.push(n);
    		}
			tempArr.push(node.val);
    	}
    	result.push(tempArr);
    }
    return result;
};


// 给定一个 N 叉树，找到其最大深度。

// 最大深度是指从根节点到最远叶子节点的最长路径上的节点总数。

/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */
/**
 * @param {Node} root
 * @return {number}
 */
 //////广度优先 BFS
// var maxDepth = function(root) {
// 	if (!root) return 0;
// 	let depth = 0;
// 	let arr = [];
// 	arr.push(root);
// 	while(arr.length > 0) {
// 		let len = arr.length;
// 		for(let i = 0; i < len; i++) {
// 			let node = arr.shift();
// 			arr.push(...node.children);
// 		}
// 		depth++;
// 	}
// 	return depth;
// };
///////深度优先DFS/////////
var maxDepth = function(root) {
	if (!root) return 0;
	let maxDepth = 1;

	const getDepth = function(root, depth) {
		if (!root) return;
		maxDepth = Math.max(maxDepth, depth);
		for(let child of root.children) {
			getDepth(child, depth + 1);
		}
	}
	getDepth(root, 1);
	return maxDepth;
};



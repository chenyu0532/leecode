// 给定一个二叉树，找出其最大深度。
// 二叉树的深度为根节点到最远叶子节点的最长路径上的节点数。
// 说明: 叶子节点是指没有子节点的节点。

// var maxDepth = function(root) {
//     if (!root) {
//     	return 0;
//     }
//     return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
// };

var maxDepth = function(root) {
    if (!root) return 0;
    let arr = [];
    let depth = 0;
    arr.push(root);
    while(arr.length > 0) {
    	depth++;
    	let len = arr.length;
    	for(let i = 0; i < len; i++) {
    		let cur = arr.shift();
    		if (cur.left) {
    			arr.push(cur.left);
    		}
    		if (cur.right) {
    			arr.push(cur.right);
    		}
    	}
    }
    return depth;
};

// 我们想要使用一棵四叉树来储存一个 N x N 的布尔值网络。网络中每一格的值只会是真或假。
// 树的根结点代表整个网络。对于每个结点, 它将被分等成四个孩子结点直到这个区域内的值都是相同的.

// 每个结点还有另外两个布尔变量: isLeaf 和 val。isLeaf 当这个节点是一个叶子结点时为真。
// val 变量储存叶子结点所代表的区域的值。
// 提示：
//     N 将小于 1000 且确保是 2 的整次幂。
//     如果你想了解更多关于四叉树的知识，你可以参考这个 wiki 页面。
/**
 * // Definition for a QuadTree node.
 * function Node(val,isLeaf,topLeft,topRight,bottomLeft,bottomRight) {
 *    this.val = val;
 *    this.isLeaf = isLeaf;
 *    this.topLeft = topLeft;
 *    this.topRight = topRight;
 *    this.bottomLeft = bottomLeft;
 *    this.bottomRight = bottomRight;
 * };
 */
/**
 * @param {number[][]} grid
 * @return {Node}
 */
//////////////////////此题的描述不清，没有什么再看的意义////////////////////////

var quadTree = function(grid, x, y, len) {
    if (len <= 0) return null;
    for(let i = x; i < x + len; i++) {
    	for(let j = y; j < y + len; j++) {
    		let value = grid[x][y];
    		if (grid[i][j] !== value) {
    			return new Node(false, false, 
    				quadTree(grid, x, y, len / 2),
    				quadTree(grid, x, y + len / 2, len / 2),
    				quadTree(grid, x + len / 2, y, len / 2),
    				quadTree(grid, x + len / 2, y + len / 2, len / 2));
    		}
    	}
    }
    return new Node(grid[x][y], true, null, null, null, null);
};

var construct = function(grid) {
    return quadTree(grid, 0, 0, grid.length);
};



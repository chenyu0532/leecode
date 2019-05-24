// 给定一个有相同值的二叉搜索树（BST），找出 BST 中的所有众数（出现频率最高的元素）。

// 假定 BST 有如下定义：

//     结点左子树中所含结点的值小于等于当前结点的值
//     结点右子树中所含结点的值大于等于当前结点的值
//     左子树和右子树都是二叉搜索树
// 提示：如果众数超过1个，不需考虑输出顺序

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
 ///////////////////重点看//////////////////////
var findMode = function(root) {
	let pre = null, curCount = 0, maxCount = 0;
	let arr = []
    find = function(root) {
        if (!root) return;
        find(root.left);
        if (pre == null || root.val > pre) {
            pre = root.val;
            curCount = 1;
        } else if(root.val === pre) {
            curCount++;
        }
        if (curCount > maxCount) {
            maxCount = curCount;
            arr = []
            arr.push(pre);
           // console.log(arr)
        } else if(curCount === maxCount && curCount > 0) {
            arr.push(pre);
        }
    
        find(root.right);

    };
    find(root);
    arr = [... new Set(arr)]
    return arr;
};


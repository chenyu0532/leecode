// 给定一个二叉树，返回其节点值自底向上的层次遍历。 
// （即按从叶子节点所在层到根节点所在的层，逐层从左向右遍历）


//////广(宽)度优先搜索BFS

// var levelOrderBottom = function(root) {
//     let level = []
//     let roll = (node, deep) => {
//         if(!node){
//             return 
//         }
//         if(!level[deep]){
//             level[deep] = []
//         }
//         level[deep].push(node.val)
//         roll(node.left, deep+1)
//         roll(node.right, deep+1)
//     }
//     roll(root, 0)
//     return level.reverse()
// };
var levelOrderBottom = function(root) {
    let arr = [];
    levelOrder(arr, root, 0);
    return arr.reverse();
};
var levelOrder = function(arr, root, level) {
    if (!root) return;
    if (!arr[level]) {
    	arr[level] = [];
    }
    arr[level].push(root.val);
    level++;
    levelOrder(arr, root.left, level);
    levelOrder(arr, root.right, level);
};


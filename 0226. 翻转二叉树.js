// 翻转一棵二叉树。


var invertTree = function(root) {
    if(!root) return null;
    let left = root.left;
    let right = root.right;
    if (left) {
    	left = invertTree(left);
    }
    if (right) {
    	right = invertTree(right);
    }
    root.left = right;
    root.right = left;
    return root;
};


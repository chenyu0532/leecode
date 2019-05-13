// 给定一个二叉搜索树, 找到该树中两个指定节点的最近公共祖先。

//它或者是一棵空树，或者是具有下列性质的二叉树： 若它的左子树不空，则左子树上所有结点的值均小于它的根结点的值； 
//若它的右子树不空，则右子树上所有结点的值均大于它的根结点的值； 它的左、右子树也分别为二叉排序树。

// 百度百科中最近公共祖先的定义为：“对于有根树 T 的两个结点 p、q，最近公共祖先表示为一个结点 x，
// 满足 x 是 p、q 的祖先且 x 的深度尽可能大（一个节点也可以是它自己的祖先）。”

var lowestCommonAncestor = function(root, p, q) {
    if ((root.val > p.val) && (root.val > q.val)) {
    	return lowestCommonAncestor(root.left, p, q);
    } else if((root.val < p.val) && (root.val < q.val)) {
    	return lowestCommonAncestor(root.right, p, q);
    } else {
    	return root
    }
};




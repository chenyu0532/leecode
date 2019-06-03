// 给定两个非空二叉树 s 和 t，检验 s 中是否包含和 t 具有相同结构和节点值的子树。
// s 的一个子树包括 s 的一个节点和这个节点的所有子孙。s 也可以看做它自身的一棵子树。

/////////用中序遍历 把树转成字符串。。这个没想到。。
var isSubtree = function(s, t) {
	let left = setString(s);
	let right = setString(t);
	return left.includes(right);
};
var setString(node) {
	if (!node) return '';
	return `+${node.val}, ${setString(node.left)}, ${setString(node.right)}-`;
}



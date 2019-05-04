// 给定一个二叉树，检查它是否是镜像对称的。

// var isSymmetric = function(root) {
// 	if (!root) return true;
// 	return isSymme(root.left, root.right);
// };
// var isSymme = function(p, q) {
// 	if (!p && !q) return true;
// 	if (!p || !q) return false;
// 	if (p.val === q.val) {
// 		return isSymme(p.left, q.right) && isSymme(p.right, q.left);
// 	}
// 	return false;
// };

var isSymmetric = function(root) {
	if (!root) return true;
	let parr = [];
	let qarr = [];
	if (root.left) {
		parr.push(root.left);
		if (!root.right) return false;
		qarr.push(root.right);
	} else if(root.right) {
		return false;
	}
	while(parr.length > 0 && qarr.length > 0) {
		let ptemp = parr.pop();
		let qtemp = qarr.pop();
		if (ptemp.val !== qtemp.val) return false;
		///////////
		if (ptemp.left) {
			parr.push(ptemp.left);
		}
		if (qtemp.right) {
			qarr.push(qtemp.right);
		}
		if (parr.length !== qarr.length) {
			return false;
		} else {
			if (ptemp.left && qtemp.right && ptemp.left.val !== qtemp.right.val) {
				return false;
			}
		}
		////////////////
		if (ptemp.right) {
			parr.push(ptemp.right);
		}
		if (qtemp.left) {
			qarr.push(qtemp.left);
		}
		if (parr.length !== qarr.length) {
			return false;
		} else {
			if (ptemp.right && qtemp.left && ptemp.right.val !== qtemp.left.val) {
				return false;
			}
		}
	}
	return true;
};


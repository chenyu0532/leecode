// 给定一个正整数 num，编写一个函数，如果 num 是一个完全平方数，则返回 True，否则返回 False。

// 说明：不要使用任何内置的库函数，如  sqrt。

// 示例 1：
// 输入：16
// 输出：True

// 示例 2：
// 输入：14
// 输出：False

//二分法查找
var isPerfectSquare = function(num) {
	let left = 0, right = num;
	while(left <= right){
		let mid = Math.ceil((left + right) / 2);
		if(mid * mid === num){
			return true;
		} else if(mid * mid < num) {
			left = mid + 1;
		} else if(mid * mid > num) {
			right = mid - 1;
		}
		console.log("left-->", left);
		console.log("right-->", right);
	}
	return false;
};
console.log(isPerfectSquare(16));


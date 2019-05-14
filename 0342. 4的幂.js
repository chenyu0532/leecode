// 给定一个整数 (32 位有符号整数)，请编写一个函数来判断它是否是 4 的幂次方。

// 示例 1:

// 输入: 16
// 输出: true

// 示例 2:

// 输入: 5
// 输出: false

// 进阶：
// 你能不使用循环或者递归来完成本题吗？
var isPowerOfFour = function(num) {
    if(n <= 0) {
		return false;
	}
    while(n % 4 === 0){
    	n /= 4;
    }
    if(n === 1) {
    	return true;
    }
    return false;
};



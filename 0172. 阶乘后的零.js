// 给定一个整数 n，返回 n! 结果尾数中零的数量。

// 示例 1:
// 输入: 3
// 输出: 0
// 解释: 3! = 6, 尾数中没有零。

// 示例 2:
// 输入: 5
// 输出: 1
// 解释: 5! = 120, 尾数中有 1 个零.

///肯定不能用阶乘，数大的话就死掉了

//有多少0，即使求有多少个2和5，因为只有2*5最后才有0,又因为2的数量肯定比5多，所以只需要求5的数量即可
var trailingZeroes = function(n) {
	let count = 0;
	while(n >= 5){
		count += Math.floor(n / 5);
		flag *= 5;
	}
	return count;
};
console.log(trailingZeroes(30));



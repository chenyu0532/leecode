// 给定一个整数 n，返回 n! 结果尾数中零的数量。

// 示例 1:
// 输入: 3
// 输出: 0
// 解释: 3! = 6, 尾数中没有零。

// 示例 2:
// 输入: 5
// 输出: 1
// 解释: 5! = 120, 尾数中有 1 个零.

//这样的话 result的值可能会超过最大值
// var trailingZeroes = function(n) {
// 	let result = 1;
//     for(let i = n; i > 0; i--){
//     	result *= i;
//     }
//     console.log(result);
//     let str = result.toString();
//     let num = 0;
//     for(let i = str.length - 1; i >= 0; i--){
//     	if(str[i] == 0){
//     		num++;
//     	} else {
//     		break;
//     	}
//     }
//     return num;
// };

//有多少0，即使求有多少个5
var trailingZeroes = function(n) {
	let count = 0;
	let flag = 5;
	while(flag <= n){
		count += Math.floor(n / flag);
		flag *= 5;
	}
	return count;
};
console.log(trailingZeroes(30));



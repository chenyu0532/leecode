// 给定一个非负整数 c ，你要判断是否存在两个整数 a 和 b，使得 a2 + b2 = c。

// 示例1:
// 输入: 5
// 输出: True
// 解释: 1 * 1 + 2 * 2 = 5

// 示例2:
// 输入: 3
// 输出: False

//二分查找
var judgeSquareSum = function(c) {
	let result = 0;
    let low = 0;
    let high = Math.floor(Math.sqrt(c));
    while(low <= high){
    	result = low * low + high * high;
    	if(result === c){
    		return true;
    	}else if(result > c) {
    		high -= 1;
    	} else {
    		low += 1;
    	}
    }
    return false;
};
console.log(judgeSquareSum(5));


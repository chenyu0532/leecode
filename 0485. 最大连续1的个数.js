// 给定一个二进制数组， 计算其中最大连续1的个数。

// 示例 1:

// 输入: [1,1,0,1,1,1]
// 输出: 3
// 解释: 开头的两位和最后的三位都是连续1，所以最大连续1的个数是 3.

// 注意：

//     输入的数组只包含 0 和1。
//     输入数组的长度是正整数，且不超过 10000。

var findMaxConsecutiveOnes = function(nums) {
	let re = [];
	let count = 0;
    for(let i = 0; i < nums.length; i++){
    	if(nums[i] === 1){
    		count++;
    		if(i === nums.length - 1){
    			re.push(count);
    			break;
    		}
    	} else {
    		re.push(count);
    		count = 0;
    	}
    }
    return Math.max.apply(null, re);
};
console.log(findMaxConsecutiveOnes([1,1,0,1,1,1,0,0]))
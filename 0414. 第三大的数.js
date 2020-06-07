// 给定一个非空数组，返回此数组中第三大的数。如果不存在，则返回数组中最大的数。
// 要求算法时间复杂度必须是O(n)。

// 示例 1:
// 输入: [3, 2, 1]
// 输出: 1
// 解释: 第三大的数是 1.

// 示例 2:
// 输入: [1, 2]
// 输出: 2
// 解释: 第三大的数不存在, 所以返回最大的数 2 .

// 示例 3:
// 输入: [2, 2, 3, 1]
// 输出: 1
// 解释: 注意，要求返回第三大的数，是指第三大且唯一出现的数。
// 存在两个值为2的数，它们都排第二。

// var thirdMax = function(nums) {
//     let set = new Set(nums);
//     let arr = [...set];
//     arr.sort((a, b)=> b - a);
//     if (arr.length < 3) {
//     	return arr[0];
//     } 
//     return arr[2];
// };

var thirdMax = function(nums) {
	// 最大值 第二大值  第三大值
    let max1 = max2 = max3 = -Infinity;
    let arr = [...new Set(nums)];
    for(let i = 0; i < arr.length; i++) {
    	const v = arr[i];
    	if (v > max1) {
    		max3 = max2;
    		max2 = max1;
    		max1 = v;
    	} else if (v > max2) {
    		max3 = max2;
    		max2 = v;
    	} else if(v > max3) {
    		max3 = v;
    	}
    }
    return Number.isFinite(max3)? max3: max1; 

};
console.log(thirdMax([2, 2, 3, 1]));

// 给定一个非空且只包含非负数的整数数组 nums, 数组的度的定义是指数组里任一元素出现频数的最大值。

// 你的任务是找到与 nums 拥有相同大小的度的最短连续子数组，返回其长度。

// 示例 1:
// 输入: [1, 2, 2, 3, 1]
// 输出: 2
// 解释: 
// 输入数组的度是2，因为元素1和2的出现频数最大，均为2.
// 连续子数组里面拥有相同度的有如下所示:
// [1, 2, 2, 3, 1], [1, 2, 2, 3], [2, 2, 3, 1], [1, 2, 2], [2, 2, 3], [2, 2]
// 最短连续子数组[2, 2]的长度为2，所以返回2.

// 示例 2:
// 输入: [1,2,2,3,1,4,2]
// 输出: 6

// 注意:
//     nums.length 在1到50000区间范围内。
//     nums[i] 是一个在0到49999范围内的整数。


var findShortestSubArray = function(nums) {
	let count = new Map();
	let first = new Map();
	let last = new Map();
	let max = 0;
	for(let i = 0; i < nums.length; i++){
		if(!count.has(nums[i])){
			count.set(nums[i], 1);
			first.set(nums[i], i);
			last.set(nums[i], i);
		} else {
			count.set(nums[i], count.get(nums[i]) + 1);
			last.set(nums[i], i);
		}
		max = Math.max(max, count.get(nums[i])); //求得出现次数最多的元素
	}
	console.log(count);
	console.log(max);
	let res = Number.MAX_VALUE;
	for(let [key, value] of count){
		if(value === max){
			res = Math.min(res, last.get(key) - first.get(key) + 1);
		}
	}
	return res;
};
console.log(findShortestSubArray([1, 2, 2, 3, 1, 4, 2]));
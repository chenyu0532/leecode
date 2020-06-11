// 给定一个整型数组，在数组中找出由三个数组成的最大乘积，并输出这个乘积。

// 示例 1:
// 输入: [1,2,3]
// 输出: 6

// 示例 2:
// 输入: [1,2,3,4]
// 输出: 24

// 注意:
//     给定的整型数组长度范围是[3,104]，数组中所有的元素范围是[-1000, 1000]。
//     输入的数组中任意三个数的乘积不会超出32位有符号整数的范围。

// 这个题要注意，排序后， 前两项可能为负数

// var maximumProduct = function(nums) {
//     nums.sort(function(a, b){
//     	return a - b;
//     })
//     console.log(nums);
//     let a = nums[nums.length - 1] * nums[nums.length - 2] * nums[nums.length - 3];
//     let b = nums[0] * nums[1] * nums[nums.length - 1];
//     return a > b? a: b;
// };

// 2 不错的求大值的方法
var maximumProduct = function(nums) {
	let max1 = Number.MIN_VALUE;
	let max2 = Number.MIN_VALUE;
	let max3 = Number.MIN_VALUE;

	let min1 = Number.MAX_VALUE;
	let min2 = Number.MAX_VALUE;

	for(let i = 0; i < nums.length; i++){
		if(nums[i] > max1){
			max3 = max2;
			max2 = max1;
			max1 = nums[i];
		} else if(nums[i] > max2){
			max3 = max2;
			max2 = nums[i];
		} else if(nums[i] > max3) {
			max3 = nums[i];
		}
		if(nums[i] < min1){
			min2 = min1;
			min1 = nums[i];
		} else if(nums[i] < min2){
			min2 = nums[i];
		}
	}
	return Math.max(max1 * max2 * max3, max1 * min1 * min2);
};
console.log(maximumProduct([-4,-3,-2,-1,60]));
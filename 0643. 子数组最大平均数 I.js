// 给定 n 个整数，找出平均数最大且长度为 k 的连续子数组，并输出该最大平均数。

// 示例 1:
// 输入: [1,12,-5,-6,50,3], k = 4
// 输出: 12.75
// 解释: 最大平均数 (12-5-6+50)/4 = 51/4 = 12.75

// 注意:
//     1 <= k <= n <= 30000。
//     所给数据范围 [-10000，10000]。

var findMaxAverage = function(nums, k) {
	let sum = 0;
    for(let i = 0; i < k; i++){
    	sum += nums[i];
    }
    let max = sum;
    for(let i = k; i < nums.length; i++){
    	sum += (nums[i] - nums[i - k])
    	max = Math.max(max, sum);
    }
    return max / k;
};
console.log(findMaxAverage([1,12,-5,-6,50,3], 4));
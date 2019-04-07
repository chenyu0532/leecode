// 和谐数组是指一个数组里元素的最大值和最小值之间的差别正好是1。
// 现在，给定一个整数数组，你需要在所有可能的子序列中找到最长的和谐子序列的长度。

// 示例 1:
// 输入: [1,3,2,2,5,2,3,7]
// 输出: 5
// 原因: 最长的和谐数组是：[3,2,2,2,3].

// 说明: 输入的数组长度最大不超过20,000.
var findLHS = function(nums) {
	let map = new Map();
    for(let i = 0; i < nums.length; i++) {
    	if (map.has(nums[i])) {
    		map.set(nums[i], map.get(nums[i]) + 1);
    	} else {
    		map.set(nums[i], 1);
    	}
    }
    console.log(map);
    let result = 0;
    let key = [...map.keys()];
    for(let i = 0; i < key.length; i++) {
    	if (map.has(key[i] + 1)) {
    		result = Math.max(result, map.get(key[i] + 1) + map.get(key[i]));
    	}
    }
    return result;
};
console.log(findLHS([0,3,1,3,3,3,0,1,0,2,0,3,1,3,-3,2,0,3,1,2,2,-3,2,2,3,3]));



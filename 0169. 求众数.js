// 给定一个大小为 n 的数组，找到其中的众数。众数是指在数组中出现次数大于 ⌊ n/2 ⌋ 的元素。

// 你可以假设数组是非空的，并且给定的数组总是存在众数。

// 示例 1:

// 输入: [3,2,3]
// 输出: 3

// 示例 2:

// 输入: [2,2,1,1,1,2,2]
// 输出: 2
// var majorityElement = function(nums) {
//     let n = Math.floor(nums.length / 2);
//     let map = new Map();
//     for(let i = 0; i < nums.length; i++){
//     	let b = map.has(nums[i]);
//     	if(b){
//     		map.set(nums[i], map.get(nums[i]) + 1);
//     	} else {
//     		map.set(nums[i], 1);
//     	}
//     }
//     console.log([...map.entries()]);
//     let array = [...map.entries()];
// 	array.sort(function(a, b){
// 		return b[1] - a[1];
// 	})
// 	console.log(array);
//     //return map;
//     return array[0][0];
// };
var majorityElement = function(nums) {
	let result = nums[0];
	let count = 1;
	for(let i = 1; i < nums.length; i++){
		if(count === 0){
			count = 1;
			result = nums[i];
		} else if(result === nums[i]){
			count++;
		} else {
			count--;
		}
	}
	return result;
};
console.log(majorityElement([2,2,1,1,1,2,2]));

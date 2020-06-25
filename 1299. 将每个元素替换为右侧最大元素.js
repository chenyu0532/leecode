// 给你一个数组 arr ，请你将每个元素用它右边最大的元素替换，如果是最后一个元素，用 -1 替换。
// 完成所有替换操作后，请你返回这个数组。

// 示例：
// 输入：arr = [17,18,5,4,6,1]
// 输出：[18,6,6,6,1,-1]

// 提示：
//     1 <= arr.length <= 10^4
//     1 <= arr[i] <= 10^5

/**
 * @param {number[]} arr
 * @return {number[]}
 */

 ///Math.max(...arr)   这个方法速度不行
// var replaceElements = function(arr) {
// 	let arrCopy = arr.slice(0);
//     for(let i = 0; i < arr.length - 1; i++) {
//     	arrCopy.shift();
//     	arr[i] = Math.max(...arrCopy);
//     }
//     arr[arr.length - 1] = -1;
//     return arr;
// };

////看网友的答案得知
var replaceElements = function(arr) {
	let max = -1, res = [];
	for(let i = arr.length - 1; i >= 0; i--) {
		res[i] = max;
		max = arr[i] > max? arr[i]: max;
	}
	return res;
};

console.log(replaceElements([17,18,5,4,6,1]));


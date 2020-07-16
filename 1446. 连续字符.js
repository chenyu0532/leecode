// 给你一个字符串 s ，字符串的「能量」定义为：只包含一种字符的最长非空子字符串的长度。
// 请你返回字符串的能量。

// 示例 1：
// 输入：s = "leetcode"
// 输出：2
// 解释：子字符串 "ee" 长度为 2 ，只包含字符 'e' 。

// 示例 2：
// 输入：s = "abbcccddddeeeeedcba"
// 输出：5
// 解释：子字符串 "eeeee" 长度为 5 ，只包含字符 'e' 。

// 示例 3：
// 输入：s = "triplepillooooow"
// 输出：5

// 示例 4：
// 输入：s = "hooraaaaaaaaaaay"
// 输出：11

// 示例 5：
// 输入：s = "tourist"
// 输出：1

// 提示：
//     1 <= s.length <= 500
//     s 只包含小写英文字母。

/**
 * @param {string} s
 * @return {number}
 */

 //双指针
// var maxPower = function(s) {
// 	let res = 1;
// 	let start = 0, end = 1;
// 	while(end < s.length) {
// 		if (s[start] !== s[end]) {
// 			res = Math.max(end - start, res);
// 			start = end;
// 		}
// 		end++;
// 	}
// 	/////不能直接返回res，因为像下面这种例子就不能直接返回res
// 	//return res;
// 	return Math.max(end - start, res);
// };

////双指针解法需要考虑一个上述的特例是比较常见的问题，那么可以在后面加上一个任意发不同的字符来避免
var maxPower = function(s) {
	let res = 1;
	let start = 0, end = 1;
	s += '0';
	while(end < s.length) {
		if (s[start] !== s[end]) {
			res = Math.max(end - start, res);
			start = end;
		}
		end++;
	}
	
	return res;
};
console.log(maxPower("hooraaaaaaaaaaaa"))



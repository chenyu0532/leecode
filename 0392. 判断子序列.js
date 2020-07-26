// 给定字符串 s 和 t ，判断 s 是否为 t 的子序列。
// 你可以认为 s 和 t 中仅包含英文小写字母。字符串 t 可能会很长（长度 ~= 500,000），而 s 是个短字符串（长度 <=100）。
// 字符串的一个子序列是原始字符串删除一些（也可以不删除）字符而不改变剩余字符相对位置形成的新字符串。
// （例如，"ace"是"abcde"的一个子序列，而"aec"不是）。

// 示例 1:
// s = "abc", t = "ahbgdc"
// 返回 true.

// 示例 2:
// s = "axc", t = "ahbgdc"
// 返回 false.

// 后续挑战 :
// 如果有大量输入的 S，称作S1, S2, ... , Sk 其中 k >= 10亿，你需要依次检查它们是否为 T 的子序列。
// 在这种情况下，你会怎样改变代码？

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
// var isSubsequence = function(s, t) {
// 	let index = 0;
// 	for(let i = 0; i < t.length; i++) {
// 		if(t[i] === s[index]) {
// 			index++;
// 		}
// 	}
// 	if (index === s.length) return true;
// 	return false;
// };

//////看网友的答案，发现这种很好
/////利用map和二分查找
var isSubsequence = function(s, t) {
	let map = new Map();
	for(let i = 0; i < 26; i++) {
		map.set(String.fromCharCode(97 + i), []);
	}
	for(let i = 0; i < t.length; i++) {
		map.get(t[i]).push(i);   ///存位置
	}
	console.log(map);
	let index = -1;
	for(let i = 0; i < s.length; i++) {
		let now = s[i];
		let left = 0; right = map.get(now).length - 1
		while(left < right) {
			let mid = Math.floor((left + right) / 2);
			if (map.get(now)[mid] > index) {
				right = mid;
			} else {
				left = mid + 1;
			}
		}
		if(right < left || map.get(now)[left] < index) return false;
        index = map.get(now)[left];
	}
	return true;
};

console.log(isSubsequence('axc', "ahbagdc"))


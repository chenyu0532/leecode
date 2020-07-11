// 对于字符串 S 和 T，只有在 S = T + ... + T（T 与自身连接 1 次或多次）时，我们才认定 “T 能除尽 S”。
// 返回最长字符串 X，要求满足 X 能除尽 str1 且 X 能除尽 str2。

// 示例 1：
// 输入：str1 = "ABCABC", str2 = "ABC"
// 输出："ABC"

// 示例 2：
// 输入：str1 = "ABABAB", str2 = "ABAB"
// 输出："AB"

// 示例 3：
// 输入：str1 = "LEET", str2 = "CODE"
// 输出：""

// 提示：
//     1 <= str1.length <= 1000
//     1 <= str2.length <= 1000
//     str1[i] 和 str2[i] 为大写英文字母

/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */

// 最大公因子公式-----------最NB的方法
// const gcd = (a, b) => {
// 	return 0 === b ? a : gcd(b, a % b);
// }
// var gcdOfStrings = function(str1, str2) {
// 	if(str1 + str2 !== str2 + str1) return '';
// 	return str1.substring(0, gcd(str1.length, str2.length));
// };


//////要求的是最短的公共前缀，其长度必是str1 str2长度的约数，要不然不能复制几次得到长度相等的字符串
/////可以枚举符合长度要求的前缀串，再复制若干次 看是否等于str1和str2

let check = function(t, s) {
	let len = Math.floor(s.length / t.length);
	let res = '';
	for(let i = 1; i <= len; i++) {
		res += t;
	}

	return res === s;
}

var gcdOfStrings = function(str1, str2) {
	let len1 = str1.length;
	let len2 = str2.length;
	for(let i = Math.min(len1, len2); i >= 1; i--) {
		if(len1 % i === 0 && len2 % i === 0) {
			let str = str1.substring(0, i);
			if (check(str, str1) && check(str, str2)) {
				return str;
			}
		}
	}
	return '';
};

console.log(gcdOfStrings("ABCABC", "ABC"));



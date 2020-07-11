// 给你一个字符串 text，你需要使用 text 中的字母来拼凑尽可能多的单词 "balloon"（气球）。
// 字符串 text 中的每个字母最多只能被使用一次。请你返回最多可以拼凑出多少个单词 "balloon"。

// 示例 1：
// 输入：text = "nlaebolko"
// 输出：1

// 示例 2：
// 输入：text = "loonbalxballpoon"
// 输出：2

// 示例 3：
// 输入：text = "leetcode"
// 输出：0

// 提示：
//     1 <= text.length <= 10^4
//     text 全部由小写英文字母组成

/**
 * @param {string} text
 * @return {number}
 */
var maxNumberOfBalloons = function(text) {
	let len = text.length;
	let map = new Map();
	for(let i = 0; i < len; i++) {
		if (!map.has(text[i])) {
			map.set(text[i], 1);
		} else {
			map.set(text[i], map.get(text[i]) + 1);
		}
	}
	if (!map.get('b') || !map.get('a') || !map.get('l') || !map.get('o') || !map.get('n')) {
		return 0;
	}
	let arr = [];
	let cur = 0;
	for(let key of map.keys()) {
		if(key === 'l' || key === 'o') {
			cur = Math.floor(map.get(key) / 2);
			arr.push(cur)
		} else if(key === 'b' || key === 'a' || key === 'n') {
			cur = map.get(key);
			arr.push(cur)
		}
		
	}
	return Math.min.apply(null, arr);

};

console.log(maxNumberOfBalloons("loonbalxballpoon"));

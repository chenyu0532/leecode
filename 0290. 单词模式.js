// 给定一种 pattern(模式) 和一个字符串 str ，判断 str 是否遵循相同的模式。
// 这里的遵循指完全匹配，例如， pattern 里的每个字母和字符串 str 中的每个非空单词之间存在着双向连接的对应模式。

// 示例1:
// 输入: pattern = "abba", str = "dog cat cat dog"
// 输出: true

// 示例 2:
// 输入:pattern = "abba", str = "dog cat cat fish"
// 输出: false

// 示例 3:
// 输入: pattern = "aaaa", str = "dog cat cat dog"
// 输出: false

// 示例 4:
// 输入: pattern = "abba", str = "dog dog dog dog"
// 输出: false

// 说明:
// 你可以假设 pattern 只包含小写字母， str 包含了由单个空格分隔的小写字母。
var wordPattern = function(pattern, str) {
	let strr = str.split(' ');
	if(pattern.length != strr.length) return false;
	let map = new Map();
    for(let i = 0; i < pattern.length; i++) {
    	if(map.has(pattern[i])) {
    		if(map.get(pattern[i]) != strr[i]) {
    			return false;
    		}
    	} else {
    		map.set(pattern[i], strr[i]);
    		for(let j = 0; j < i; j++) {
    			if(map.get(pattern[i]) == map.get(pattern[j])) {
    				return false;
    			}
    		}
    	}
    }
    return true;
};
console.log(wordPattern("abba", "dog dog dog dog"))


